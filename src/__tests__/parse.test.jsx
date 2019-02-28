import { parse } from "../components/upload.jsx";

describe("Upload", () => {
  describe("parse()", () => {
    it("Parse test 1", () => {
      const result = parse(
        "0000,学生番号,なまえ,2,専門教育科目,数理・情報システム学科開講科目,---,数学要論ＩＢ,2,2017,前期,良,合"
      );
      expect(result).toEqual([
        [
          "専門教育科目",
          "数理・情報システム学科開講科目",
          "---",
          "数学要論ＩＢ",
          "2",
          "2017",
          "前期",
          "良",
          "合"
        ]
      ]);
    });

    it("Parse test 2", () => {
      const result = parse("");
      expect(result).toEqual([]);
    });

    it("Parse test 3", () => {
      const result = parse(
        "専門教育科目,数理・情報システム学科開講科目,---,数学要論ＩＢ,2,2017,前期,良,合"
      );
      // 各科目のデータの長さは9になるはずなので配列全体をチェックして、全てのデータの長さが9であるかチェックする
      let bool = true; // 各データの長さが全て9であるかどうか
      for (let i = 0; i < result.length; i++) {
        if (result[i].length != 9) {
          bool = false;
        }
      }
      expect(bool).toEqual(false);
    });

    it("Parse test 4", () => {
      const result = parse(
        "0000,学生番号,なまえ,2,専門教育科目,数理・情報システム学科開講科目,---,数学要論ＩＢ,2,2017,前期,良,合"
      );
      let bool = true;
      for (let i = 0; i < result.length; i++) {
        if (result[i].length != 9) bool = false;
      }
      expect(bool).toEqual(true);
    });

    it("Parse test 5", () => {
      const result = parse(
        "0000,学生番号,なまえ,2,専門教育科目,数理・情報システム学科開講科目,---,数学要論ＩＢ,2,2017,前期,良,合\n,,,,専門教育科目,数理・情報システム学科開講科目,---,数学要論ＩＢ,2,2017,前期,良,合"
      );
      let bool = true;
      for (let i = 0; i < result.length; i++) {
        if (result[i].length != 9) bool = false;
      }
      expect(bool).toEqual(true);
    });

    it("Parse test 6", () => {
      const result = parse(
        "0000,学生番号,なまえ,2,専門教育科目,数理・情報システム学科開講科目,---,数学要論ＩＢ,2,2017,前期,良,合\n,,,,専門教育科目,数理・情報システム学科開講科目,---,数学要論ＩＢ,2,2017,前期,良,合"
      );
      expect(result).toEqual([
        [
          "専門教育科目",
          "数理・情報システム学科開講科目",
          "---",
          "数学要論ＩＢ",
          "2",
          "2017",
          "前期",
          "良",
          "合"
        ],
        [
          "専門教育科目",
          "数理・情報システム学科開講科目",
          "---",
          "数学要論ＩＢ",
          "2",
          "2017",
          "前期",
          "良",
          "合"
        ]
      ]);
    });
  });
});
