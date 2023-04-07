import { useLocation, useParams } from 'react-router-dom';

export const usePageRoute = () => {
  const { hash, pathname, search, state } = useLocation();
  const urlParams = useParams();


  return { params: state, hash, pathname, search, urlParams };
};
