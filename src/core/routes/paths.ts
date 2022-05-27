// ----------------------------------------------------------------------

function path(root: string, subLink: string) {
  return `${root}${subLink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  // TODO: add paths for auth module here
  login: path(ROOTS_AUTH, '/login')
};

export const PATH_LANDING = {
  // TODO: add paths for landing page module here
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD
  // TODO: add paths for dashboard module here
};
