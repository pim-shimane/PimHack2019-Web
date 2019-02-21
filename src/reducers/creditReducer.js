import { SPLIT_CREDIT } from "../actions/creditAction.js";

const initialState = {
  isSelected: false, //アップロード & コース選択済み？
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
  //追加
  social: 0, //社会全般
  science: 0, //自然全般
  educationOthers: 0, //教養その他
  //ここまで
  socialTrain: 0, //社会人力養成
  freeFirst: 0, //自由選択Ⅰ
  specialFundamental: 0, //専門基礎
  specialCompulsory: 0, //専門必修
  specialOptional: 0, //専門選択
  specialFree: 0, //専門自由
  freeSecond: 0, //自由選択Ⅱ
  surplusCredit: 0 //余剰単位
};

function splitCreditWithRecord(state, record, needCredit) {
  var i = 0;
  var free1 = 0;
  var free2 = 0;
  // var social = 0;
  // var science = 0;
  var educate = 0;

  //英語
  if (record[2] === "英語") {
    i = Number(state.english);
    i += Number(record[4]);
    state.english = String(i);
    if (i > Number(needCredit.english)) {
      free1 = Number(state.freeFirst);
      free1 += i - Number(needCredit.english);
      state.english = needCredit.english;
      state.freeFirst = String(free1);
    }
  }

  //初修
  if (record[1] === "外国語科目" && record[2] !== "英語") {
    i = Number(state.foreignLanguage);
    i += Number(record[4]);
    state.foreignLanguage = String(i);
    if (i > Number(needCredit.foreignLanguage)) {
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

  //人文入門
  if (record[1] === "入門科目" && record[2] === "人文社会科学") {
    i = Number(state.socialElements) + Number(state.socialAdvance);
    i += Number(record[4]);
    state.socialElements = String(
      Number(state.socialElements) + Number(record[4])
    );
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

  //自然入門
  if (record[1] === "入門科目" && record[2] === "自然科学") {
    i = Number(state.scienceElements) + Number(state.scienceAdvance);
    i += Number(record[4]);
    state.scienceElements = String(
      Number(state.scienceElements) + Number(record[4])
    );
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

  //学際入門
  if (record[1] === "入門科目" && record[2] === "学際") {
    i =
      Number(state.interdisciplinaryElements) +
      Number(state.interdisciplinaryAdvance);
    i += Number(record[4]);
    state.interdisciplinaryElements = String(
      Number(state.interdisciplinaryElements) + Number(record[4])
    );
    state.educationOthers = String(i);
    if (i > Number(needCredit.educationOthers)) {
      free1 = Number(state.freeFirst);
      free1 += i - Number(needCredit.educationOthers);
      state.educationOtherss = needCredit.educationOthers;
      state.freeFirst = String(free1);
    }
  }

  //人文発展
  if (record[1] === "発展科目" && record[2] === "人文社会科学") {
    i = Number(state.socialElements) + Number(state.socialAdvance);
    i += Number(record[4]);
    state.socialAdvance = String(
      Number(state.socialAdvance) + Number(record[4])
    );
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

  //自然発展
  if (record[1] === "発展科目" && record[2] === "自然科学") {
    i = Number(state.scienceElements) + Number(state.scienceAdvance);
    i += Number(record[4]);
    state.scienceAdvance = String(
      Number(state.scienceAdvance) + Number(record[4])
    );
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

  //学際発展
  if (record[1] === "発展科目" && record[2] === "学際") {
    i =
      Number(state.interdisciplinaryElements) +
      Number(state.interdisciplinaryAdvance);
    i += Number(record[4]);
    state.interdisciplinaryAdvance = String(
      Number(state.interdisciplinaryAdvance) + Number(record[4])
    );
    state.educationOthers = String(i);
    if (i > Number(needCredit.educationOthers)) {
      free1 = Number(state.freeFirst);
      free1 += i - Number(needCredit.educationOthers);
      state.educationOthers = needCredit.educationOthers;
      state.freeFirst = String(free1);
    }
  }

  //社会人力育成
  if (record[1] === "社会人力養成科目") {
    i = Number(state.socialTrain);
    i += Number(record[4]);
    state.socialTrain = String(Number(state.socialTrain) + Number(record[4]));
    state.educationOthers = String(i);
    if (i > Number(needCredit.educationOthers)) {
      free1 = Number(state.freeFirst);
      free1 += i - Number(needCredit.educationOthers);
      state.educationOthers = needCredit.educationOthers;
      state.freeFirst = String(free1);
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
