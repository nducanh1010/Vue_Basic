import authService from '@/services/auth.services'; // call axios
import { LOGIN, REGISTER, LOGOUT, REFRESH } from '@/constants/actions'; // biến dùng chung các action
import { removeAuthenticated } from '@/utils/auth';   // xoas key localStorage == Logout

export const auth = {
  namespaced: true,
  state: {
    user: '',
  },
  getters: {
    getUserProfile: state => state?.user?.profile,
    getUserName: state => state?.user?.profile?.name,
    getUserEmail: state => state?.user?.profile?.email,
    getUserRole: state => (state?.user?.profile?.name),
    getUserId: state => state?.user.profile.id, 
  },
  mutations: {
    [LOGIN](state, { user }) {
      state.user = user;
    },
    [LOGOUT](state) {
      state.user = '';
    },
    [REFRESH](state, { token }) {
      state.user.token = token;
    },
  },
  actions: {
    [LOGIN]({ commit }, { email, password }) {
      return authService.login({ email, password }).then(data => {
        if (data && data.token && data.user) {
          commit(LOGIN, { user: { token: data.token, profile: data.user } });
        }
      });
    },
    [REGISTER]({ account, password }) {
      return authService.register({ account, password });
    },
    [LOGOUT]({ commit }) {
      return authService.logout().then(message => {
        commit(LOGOUT);
        removeAuthenticated(); // remove authentication in local storage

        return message 
      });
    },
    [REFRESH]({ commit }) {
      return authService.refresh().then(data => {
        if (data && data.token) {
          commit(REFRESH, { token: data.token });
        }
      });
    },
  },
};
