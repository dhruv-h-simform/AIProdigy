import { useRoute } from '@react-navigation/native';

export const usePageRoute = () => {
  const { name, path, params } = useRoute();

  return { params, hash: null, pathname: name, search: null, urlParams: path };
};
