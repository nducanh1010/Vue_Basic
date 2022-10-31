
import { createStore } from 'vuex'

// Import modules
import auth from './auth'
const store = createStore({
	modules: {
		auth	
	}
})
export default store
