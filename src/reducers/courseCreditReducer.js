const initialState = {
  english: 0,
  foreignLanguage: 0,
  artCulture: 0,
  informationScience: 0,
  socialElements: 0,
  scienceElements: 0,
  interdisciplinaryElements: 0,
  socialAdvance: 0,
  scienceAdvance: 0,
  interdisciplinaryAdvance: 0,
  socialTrain: 0,
  freeFirst: 0,
  specialFundamental: 0,
  specialCompulsory: 0,
  specialOptional: 0,
  specialFree: 0,
  freeSecond: 0 
}
// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Sample': { //後で変えて下さい。
      return state
    }
    default: {
      return state
    }
  }
}
  
export default reducer