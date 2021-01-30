import { INCREMENT, DECREMENT } from './constant'
// 同步action就是指action的值为object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
// 异步action，就是指action的值为函数
export const createAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}
