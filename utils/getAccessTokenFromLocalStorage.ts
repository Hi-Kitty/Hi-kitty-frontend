export const getAccessTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('accessToken') || '';
  }
};
