import { SPLIT_CREDIT } from "../actions/creditAction.js";

const initialState = {
  isSelected: false, //アップロード & コース選択済み？
  english: 0, //英語
  englishLesson: [],
  foreignLanguage: 0, //初修
  foreignLanguageLesson: [],
  artCulture: 0, //芸術文化
  artCultureLesson: [],
  informationScience: 0, //情報科学
  informationScienceLesson: [],
  social: 0, //社会全般
  socialLesson: [],
  science: 0, //自然全般
  scienceLesson: [],
  educationOthers: 0, //教養その他
  educationOthersLesson: [],
  socialTrain: 0, //社会人力養成
  socialTrainLesson: [],
  freeFirst: 0, //自由選択Ⅰ
  freeFirstLesson: [],
  specialFundamental: 0, //専門基礎
  specialFundamentalLesson: [],
  specialCompulsory: 0, //専門必修
  specialCompulsoryLesson: [],
  specialOptional: 0, //専門選択
  specialOptionalLesson: [],
  specialFree: 0, //専門自由
  specialFreeLesson: [],
  freeSecond: 0, //自由選択Ⅱ
  freeSecondLesson: [],
  surplusCredit: 0, //余剰単位
  surplusCreditLesson: []
};

function splitCreditWithRecord(state, record, needCredit, expartRequired) {
  var i = 0;
  var free1 = 0;
  var free2 = 0;
  var educate = 0;

  //英語
  if (record[2] === "英語") {
    if (state.english + Number(record[4]) <= needCredit.english) {
      state.english += Number(record[4]);
      state.englishLesson.push(record[3]);
    }
  }

  //初修
  if (record[1] === "外国語科目" && record[2] !== "英語") {
    if (
      state.foreignLanguage + Number(record[4]) <=
      needCredit.foreignLanguage
    ) {
      stete.foreignLanguage += Number(record[4]);
      state.foreignLanguageLesson.push(record[3]);
    }
  }

  //健康文化
  if (record[1] === "健康スポーツ" || record[1] === "文化芸術") {
    if (state.artCulture + Number(record[4]) <= needCredit.artCulture) {
      stete.artCulture += Number(record[4]);
      stete.artCultureLesson.push(record[3]);
    }
  }

  //情報科学
  if (record[1] === "情報科学") {
    if (
      state.informationScience + Number(record[4]) <=
      needCredit.informationScience
    ) {
      stete.informationScience += Number(record[4]);
      stete.informationScienceLesson.push(record[3]);
    }
  }

  //人文社会科学
  if (record[2] === "人文社会科学") {
    if (state.sorcial + Number(record[4]) <= needCredit.sorcial) {
      stete.sorcial += Number(record[4]);
      stete.informationScienceLesson.push(record[3]);
    }
  }

  //自然科学
  if (record[2] === "自然科学") {
    if (state.science + Number(record[4]) <= needCredit.science) {
      stete.science += Number(record[4]);
      stete.sciencLesson.push(record[3]);
    }
  }

  return state;
}

function splitCredit(state, records, needCredit, expartRequired) {
  //コース選択していない場合、そのままstateを返します。
  if (needCredit === "" || records.length === 0) return state;
  let newState = initialState;
  newState.isSelected = true;
  for (const record of records) {
    if (record[8] === "合") {
      newState = splitCreditWithRecord(
        newState,
        record,
        needCredit,
        expartRequired
      );
    }
  }

  return newState;
}

// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SPLIT_CREDIT: {
      return splitCredit(
        state,
        action.records,
        action.needCredit,
        action.expartRequired
      );
    }
    default: {
      return state;
    }
  }
};

export default reducer;
