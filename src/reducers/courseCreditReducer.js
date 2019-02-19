const initialState = {
  english: 0, //英語
  foreignLanguage: 0, //初修
  artCulture: 0, //芸術文化
  informationScience: 0, //情報科学
  socialElements: 0, //入門人文社会科学
  scienceElements: 0, //入門自然科学
  interdisciplinaryElements: 0, //入門学際
  socialAdvance: 0, //発展人文社会科学
  scienceAdvance: 0, //発展自然科学
  interdisciplinaryAdvance: 0, //発展学際
  socialTrain: 0, //社会人力養成
  freeFirst: 0, //自由選択Ⅰ
  specialFundamental: 0, //専門基礎
  specialCompulsory: 0, //専門必修
  specialOptional: 0, //専門選択
  specialFree: 0, //専門自由
  freeSecond: 0, //自由選択Ⅱ
  surplusCredit: 0 //余剰単位
};
// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Sample": {
      //後で変えて下さい。
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
