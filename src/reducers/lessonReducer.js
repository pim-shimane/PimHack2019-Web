const initialState = {
  name: '',
  subject: '',
  num: 0
}
// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTASK': {
      return console.log(action.value)
    }
    default: {
      return state
    }
  }
}
  
export default reducer