import { INCREMENT, DECREMENT } from './constant'
export default function countReducer(preState, action) {
  console.log(preState, action)
  const { type, data } = action
  preState = preState ?? 0;
  // eslint-disable-next-line default-case
  switch (type) {
    case INCREMENT:
      return preState + data * 1;
    case DECREMENT:
      return preState - data;
    default:
      return preState
  }
}