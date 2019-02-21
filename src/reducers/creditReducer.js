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

// 自由単位を管理します。
function addFree(state, record, needCredit) {
  if (state.freeFirst + Number(record[4]) <= needCredit.freeFirst) {
    state.freeFirst += Number(record[4]);
    state.freeFirstLesson.push(record[3]);
  } else {
    state = addFreeSecondOrSurplus(state, record, needCredit);
  }

  return state;
}

// 自由単位Ⅱもしくは余剰単位に分割します。
function addFreeSecondOrSurplus(state, record, needCredit) {
  if (state.freeSecond + Number(record[4]) <= needCredit.freeSecond) {
    state.freeSecond += Number(record[4]);
    state.freeSecondLesson.push(record[3]);
  } else {
    state.surplusCredit += Number(record[4]);
    state.surplusCreditLesson.push(record[3]);
  }

  return state;
}

// その他の教養育成科目を管理します。
function addEducationOthers(state, record, needCredit) {
  if (state.educationOthers + Number(record[4]) <= needCredit.educationOthers) {
    state.educationOthers += Number(record[4]);
    state.educationOthersLesson.push(record[3]);
  } else {
    state = addFree(state, record, needCredit);
  }

  return state;
}

function splitCreditWithRecord(state, record, needCredit, expartRequired) {
  //英語
  if (record[2] === "英語") {
    if (state.english + Number(record[4]) <= needCredit.english) {
      state.english += Number(record[4]);
      state.englishLesson.push(record[3]);
    } else {
      state = addFree(state, record, needCredit);
    }
  }

  //初修
  if (record[1] === "外国語科目" && record[2] !== "英語") {
    if (
      state.foreignLanguage + Number(record[4] <= needCredit.foreignLanguage)
    ) {
      state.foreignLanguage += Number(record[4]);
      state.foreignLanguageLesson.push(record[3]);
    } else {
      state = addFree(state, record, needCredit);
    }
  }

  //健康文化
  if (record[1] === "健康スポーツ" || record[1] === "文化芸術") {
    if (state.artCulture + Number(record[4]) <= needCredit.artCulture) {
      state.artCulture += Number(record[4]);
      state.artCultureLesson.push(record[3]);
    } else {
      state = addFree(state, record, needCredit);
    }
  }

  //情報科学
  if (record[1] === "情報科学") {
    if (
      state.informationScience + Number(record[4]) <=
      needCredit.informationScience
    ) {
      state.informationScience += Number(record[4]);
      state.informationScienceLesson.push(record[3]);
    } else {
      state = addFree(state, record, needCredit);
    }
  }

  if (record[0] === "教養育成科目") {
    //人文社会科学
    if (record[2] === "人文社会科学") {
      if (state.social + Number(record[4]) <= needCredit.social) {
        state.social += Number(record[4]);
        state.socialLesson.push(record[3]);
      } else {
        state = addEducationOthers(state, record, needCredit);
      }
    } else if (record[2] === "自然科学") {
      if (state.science + Number(record[4]) <= needCredit.science) {
        state.science += Number(record[4]);
        state.scienceLesson.push(record[3]);
      } else {
        state = addEducationOthers(state, record, needCredit);
      }
    } else {
      state = addEducationOthers(state, record, needCredit);
    }
  }

  if (record[0] === "専門教育科目") {
    if (record[1] === "専門基礎科目") {
      if (
        state.specialFundamental + Number(record[4]) <=
        needCredit.specialFundamental
      ) {
        state.specialFundamental += Number(record[4]);
        state.specialFundamentalLesson.push(record[3]);
      } else {
        state = addFreeSecondOrSurplus(state, record, needCredit);
      }
    } else if (expartRequired.includes(record[3])) {
      state.specialCompulsory += Number(record[4]);
      state.specialCompulsoryLesson.push(record[3]);
    }
    // TODO 専門選択と専門自由の分割
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
