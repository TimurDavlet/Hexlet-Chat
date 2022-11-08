const apiPath = '/api/v1';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  usersPath: () => [apiPath, 'data'].join('/'),
  signUpPath: () => [apiPath, 'signup'].join('/'),
  login: () => '/login',
  signup: () => '/signup',
  chat: () => '/',
  notFound: () => '*',
};

export default routes;
