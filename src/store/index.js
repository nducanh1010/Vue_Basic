
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

// Import modules
import { auth } from './modules/auth.modules';
// import auth from './auth'
const store = createStore({
	modules: {
		auth	
	},
	plugins:[
		createPersistedState({
			paths:['auth.user'], // lấy state user trong vuex modules auth
			key: 'master_user'
		})
	]
})
export default store