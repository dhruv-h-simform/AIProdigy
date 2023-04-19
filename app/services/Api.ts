import AsyncStorage from '@react-native-async-storage/async-storage';
import apisauce from 'apisauce';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import { AppConstants } from '../constants';
import { store } from '../redux';

//Create apisauce Instance
const getApiInstance = (baseURL: string) => {
  return apisauce.create({
    baseURL: baseURL ?? AppConstants?.BASE_URL,
    timeout: 30000,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
  });
};

const getUserStoriesApiInstant = () => {
  return apisauce.create({
    baseURL: AppConstants.USER_STORIES_BASE_URL,
    timeout: 30000,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
  });
};
//Multiple instance based on authentication requirement
const protectedApiClient = (baseURL: string) => getApiInstance(baseURL);
const apiClient = (baseURL: string) => getApiInstance(baseURL);

/**
 * Use AuthorizedAPI when Authorization token required for the API request
 * Use UnauthorizedAPI when Authorization token NOT required for the API request
 */
const AuthorizedAPI = protectedApiClient(AppConstants.BASE_URL);
const ProjectAuthorizedAPI = protectedApiClient(AppConstants.PROJECT_BASE_URL);
const UnauthorizedAPI = apiClient(AppConstants.BASE_URL);

/**
Monitors are functions you can attach to the API which will be called when any request is made. You can use it to do things like:

=> check for headers and record values
=> determine if you need to trigger other parts of your code
=> measure performance of API calls
=> perform logging
=> Monitors are run just before the promise is resolved.
=> You get an early sneak peak at what will come back.

You cannot change anything, just look.
 */

const APIMonitor = (response: any) => {
  // LOGGER.info(`API MONITOR: ${response?.config?.url}`, response);
};

AuthorizedAPI.addMonitor(APIMonitor);
ProjectAuthorizedAPI.addMonitor(APIMonitor);
UnauthorizedAPI.addMonitor(APIMonitor);

// Mutate request object in here to change header about the request.
AuthorizedAPI.addAsyncRequestTransform(async request => {
  let token: string | null | void = '';
  const state = store?.getState();
  try {
    token = await AsyncStorage.getItem(AppConstants.AUTH_TOKEN);
    const token_decoded = jwt_decode(token!);

    const isValidToken = moment
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      .unix(token_decoded.exp)
      .isAfter(moment().subtract(1, 'h'));

    // request.params = {
    //   ...request.params,
    //   access_token: token,
    // };

    if (isValidToken) {
      // request.params = {
      //   ...request.params,
      //   access_token: token,
      // };
      request.headers.Authorization = `Bearer ${token}`;
    } else {
      // const idTokenResult = await auth().currentUser?.getIdTokenResult();
      // request.headers.Authorization = idTokenResult?.token;
      // token = await AsyncStorage.setItem(
      //   AppConstants.AUTH_TOKEN,
      //   idTokenResult?.token ?? ''
      // );
    }
    if (!token) {
      token = '';
    }
  } catch (err) {
    console.log(err, 'err');

    token = await AsyncStorage.getItem(AppConstants.AUTH_TOKEN);
  }
  request.headers.Authorization = `Bearer ${token}`;
  // request.params = {
  //   ...request.params,
  //   access_token: token,
  // };
});

// Mutate request object in here to change header about the request.
ProjectAuthorizedAPI.addAsyncRequestTransform(async request => {
  let token: string | null | void = '';
  const state = store?.getState();
  try {
    token = await AsyncStorage.getItem(AppConstants.API_AUTH_TOKEN);
    console.log('ProjectAuthorizedAPI', token);
    const token_decoded = jwt_decode(token!);

    const isValidToken = moment
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      .unix(token_decoded.exp)
      .isAfter(moment().subtract(1, 'h'));

    // request.params = {
    //   ...request.params,
    //   access_token: token,
    // };

    if (isValidToken) {
      // request.params = {
      //   ...request.params,
      //   access_token: token,
      // };
      request.headers.Authorization = `Bearer ${token}`;
    } else {
      // const idTokenResult = await auth().currentUser?.getIdTokenResult();
      // request.headers.Authorization = idTokenResult?.token;
      // token = await AsyncStorage.setItem(
      //   AppConstants.AUTH_TOKEN,
      //   idTokenResult?.token ?? ''
      // );
    }
    if (!token) {
      token = '';
    }
  } catch (err) {
    console.log(err, 'err');

    token = await AsyncStorage.getItem(AppConstants.API_AUTH_TOKEN);
  }
  request.headers.Authorization = `Bearer ${token}`;
  // request.params = {
  //   ...request.params,
  //   access_token: token,
  // };
});

export {
  AuthorizedAPI,
  UnauthorizedAPI,
  ProjectAuthorizedAPI,
  getUserStoriesApiInstant,
};
