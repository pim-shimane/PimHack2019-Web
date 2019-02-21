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

function splitCreditWithRecord(state, record, needCredit) {
  var i = 0;
  var free1 = 0;
  var free2 = 0;
  var educate = 0;

  //英語
  if (record[2] === "英語") {
    state.english = state.english + Number(record[4]);
    state.englishLesson.push(record[3]);
    if (state.english > needCredit.english) {
      free1 = Number(state.freeFirst);
      free1 += i - needCredit.english;
      state.english = needCredit.english;
      state.freeFirst = String(free1);
    }
  }

  //初修
  if (record[1] === "外国語科目" && record[2] !== "英語") {
    state.foreignLanguage = state.foreignLanguage + Number(record[4]);
    if (state.foreignLanguage > needCredit.foreignLanguage) {
      free1 = Number(state.freeFirst);
      free1 += i - Number(needCredit.foreignLanguage);
      state.foreignLanguage = needCredit.foreignLanguage;
      state.freeFirst = String(free1);
    }
  }

  //健康文化
  if (record[1] === "健康スポーツ" || record[1] === "文化芸術") {
    i = Number(state.artCulture);
    i += Number(record[4]);
    state.artCulture = String(i);
    if (i > Number(needCredit.artCulture)) {
      free1 = Number(state.freeFirst);
      free1 += i - Number(needCredit.artCulture);
      state.artCulture = needCredit.artCulture;
      state.freeFirst = String(free1);
    }
  }

  //情報科学
  if (record[1] === "情報科学") {
    i = Number(state.informationScience);
    i += Number(record[4]);
    state.informationScience = String(i);
    if (i > Number(needCredit.informationScience)) {
      free1 = Number(state.freeFirst);
      free1 += i - Number(needCredit.informationScience);
      state.informationScience = needCredit.informationScience;
      state.freeFirst = String(free1);
    }
  }

  //人文社会科学
  if (record[2] === "人文社会科学") {
    i = Number(state.social);
    i += Number(record[4]);
    state.social = String(i);
    if (i > Number(needCredit.social)) {
      educate = Number(state.educationOthers);
      educate += i - Number(needCredit.social);
      state.social = needCredit.social;
      state.educationOthers = String(educate);
      if (educate > Number(needCredit.educationOthers)) {
        free1 = Number(state.freeFirst);
        free1 += educate - Number(needCredit.educationOthers);
        state.educationOthers = needCredit.educationOthers;
        state.freeFirst = String(free1);
      }
    }
  }

  //自然科学
  if (record[2] === "自然科学") {
    i = Number(state.science);
    i += Number(record[4]);
    state.science = String(i);
    if (i > Number(needCredit.science)) {
      educate = Number(state.educationOthers);
      educate += i - Number(needCredit.science);
      state.science = needCredit.science;
      state.educationOthers = String(educate);
      if (educate > Number(needCredit.educationOthers)) {
        free1 = Number(state.freeFirst);
        free1 += educate - Number(needCredit.educationOthers);
        state.educationOthers = needCredit.educationOthers;
        state.freeFirst = String(free1);
      }
    }
  }

  //自由選択I
  if (Number(state.freeFirst) > Number(needCredit.freeFirst)) {
    free2 = Number(state.freeSecond);
    free2 += Number(state.freeFirst) - Number(needCredit.freeFirst);
    state.freeFirst = needCredit.freeFirst;
    state.freeSecond = String(free2);
  }
  return state;
}

function splitCredit(state, records, needCredit) {
  //コース選択していない場合、そのままstateを返します。
  if (needCredit === "" || records.length === 0) return state;
  let newState = initialState;
  newState.isSelected = true;
  for (const record of records) {
    if (record[8] === "合") {
      newState = splitCreditWithRecord(newState, record, needCredit);
    }
  }
  console.log(newState);
  return newState;
}

// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SPLIT_CREDIT: {
      return splitCredit(state, action.records, action.needCredit);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
