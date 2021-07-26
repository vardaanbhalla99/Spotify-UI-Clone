import * as types from './../actionTypes';

export function initLogin(payload) {
  console.log(payload);
  return {type: types.LOGIN_START, payload};
}

// export const initLogin = payload => ({
//   type: types.LOGIN_START,
//   payload,
// });
export const initLogout = () => ({
  type: types.LOGOUT,
});
