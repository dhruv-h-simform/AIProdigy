import { isWeb } from '../theme';

export default {
  BASE_URL: 'https://accounts.zoho.com/oauth/v2/',
  PROJECT_BASE_URL: 'https://projectsapi.zoho.com/restapi/',
  USER_STORIES_BASE_URL: 'https://b533-14-99-102-226.ngrok-free.app/',
  AUTH_TOKEN: 'token',
  API_AUTH_TOKEN: 'access-token',
  ZOHO_PERMISSION_SCOPE:
    'ZohoProjects.portals.ALL,ZohoProjects.projects.ALL,ZohoProjects.search.READ,ZohoProjects.tags.ALL,ZohoProjects.milestones.ALL,ZohoProjects.status.ALL,ZohoProjects.users.ALL,ZohoProjects.tasks.ALL,ZohoProjects.tasklists.ALL',
  ZOHO_CLIENT_ID: isWeb
    ? '1000.QQXC1A8VVB89C8I6BHYL8TOGP9N32T'
    : '1000.V1FQ787JO228XWBS39ZQJOB0SPAV4V',
  ZOHO_CLIENT_Secret: isWeb
    ? '9414abb3f399aab45173a15abd96b2654178255e66'
    : 'a0b981e9b0d1eb7f80081e483d178d2b512f25811d',
  ZOHO_REDIRECT_URL: isWeb
    ? 'https://main--velvety-fudge-ed7fcc.netlify.app'
    : 'promanage://bottom-tabs',
};
