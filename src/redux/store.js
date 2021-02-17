import { createStore, applyMiddleware } from 'redux'
import countReducer from './count_reducer'
// thunk实现异步操作；thunk 的一个优点是它的结果可以再次被 dispatch
import thunk from 'redux-thunk'
const store = createStore(countReducer, applyMiddleware(thunk))
export default store