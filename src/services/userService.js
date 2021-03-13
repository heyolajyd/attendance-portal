import { removeToken } from './storageService';

export const userService = {
  logout,
};

function logout() {
  removeToken();
}
