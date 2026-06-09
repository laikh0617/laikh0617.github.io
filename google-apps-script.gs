/****************************************************************
 *  國小 300 單字評量系統 — 雲端歷程記錄後端 (Google Apps Script)
 *  資料會存在你 Google 雲端硬碟的試算表中。
 *
 *  安裝步驟：
 *  1. 到 https://drive.google.com 新增一個「Google 試算表」(可命名為「評量歷程」)。
 *  2. 在該試算表上方選單點：擴充功能 → Apps Script。
 *  3. 把這整個檔案的程式碼貼到 Code.gs (覆蓋原本內容)，按儲存。
 *  4. 右上角點「部署」→「新增部署作業」→ 類型選「網頁應用程式 (Web app)」。
 *       - 執行身分：我 (你的帳號)
 *       - 具有存取權的使用者：任何人 (Anyone)
 *     按「部署」，授權你的帳號。
 *  5. 複製產生的「網頁應用程式網址」(結尾是 /exec)。
 *  6. 打開單字評量網站 → 歷程記錄 → 貼上該網址 → 按「儲存設定」。
 *  完成後，每次測驗成績都會自動上傳到這份試算表。
 ****************************************************************/

var SHEET_NAME = 'records';

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['t', 'cls', 'seat', 'name', 'mode', 'scope', 'correct', 'total', 'score']);
  }
  return sh;
}

function readRows() {
  var sh = getSheet();
  var v = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < v.length; i++) {
    var r = v[i];
    out.push({
      t: Number(r[0]), cls: r[1], seat: r[2], name: r[3],
      mode: r[4], scope: r[5], correct: r[6], total: r[7], score: r[8]
    });
  }
  return out;
}

function reply(obj, callback) {
  var json = JSON.stringify(obj);
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

// 讀取資料 / 清除資料 (JSONP)
function doGet(e) {
  var cb = e && e.parameter ? e.parameter.callback : null;
  var action = e && e.parameter ? e.parameter.action : null;
  if (action === 'clear') {
    var sh = getSheet();
    var last = sh.getLastRow();
    if (last > 1) sh.deleteRows(2, last - 1);
    return reply({ ok: true, cleared: true }, cb);
  }
  return reply(readRows(), cb);
}

// 新增一筆成績
function doPost(e) {
  try {
    var d = JSON.parse(e.postData.contents);
    var sh = getSheet();
    sh.appendRow([d.t, d.cls, d.seat, d.name, d.mode, d.scope, d.correct, d.total, d.score]);
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}
