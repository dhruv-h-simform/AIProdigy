import { useRouter } from '../navigation/router/router';

const useAppNavigation = () => {
  const { navigate, pop, back, replace, reset, push, toggleDrawer } =
    useRouter();

  return {
    navigate,
    pop,
    back,
    replace,
    reset,
    push,
    toggleDrawer,
  };
};

export default useAppNavigation;
