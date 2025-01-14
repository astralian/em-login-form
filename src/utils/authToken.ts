export const getToken = () => {
  return localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');
};

export const setToken = (rememberMe: boolean, token: string) => {
  if (rememberMe) {
    localStorage.setItem('jwtToken', token);
  } else {
    sessionStorage.setItem('jwtToken', token);
  }
};
