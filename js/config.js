// =========================================================
// 全站設定檔
// 這裡的內容會被 layout.js（頁首 / 頁尾）和 home.js（首頁狀態）讀取
// =========================================================
window.CAMP_CONFIG = {
  // 營隊名稱（會出現在頁首、頁尾、首頁）
  title: "第29屆工程科學營",
  shortTitle: "ESC29",

  // 首頁右上的狀態格會依現在時間自動切換：
  regDeadlineISO: "2026-12-20T23:59:59+08:00",  // 報名截止
  campStartISO:   "2027-01-29T13:00:00+08:00",  // 報到時間
  campEndISO:     "2027-02-02T17:00:00+08:00",  // 結束時間

  // 不想顯示就設成 null
  nextCamp: null,

  // 外部連結
  applyFormURL: "https://forms.gle/DeQwXCnQo9dceE63A",
  facebookURL:  "https://www.facebook.com/ESCamp29",
  instagramURL: "https://www.instagram.com/escamp_029",
  contactEmail: "escamp029@gmail.com",
  locationText: "國立成功大學",

  // 導覽列
  nav: [
    { href: "./index.html",      text: "首頁" },
    { href: "./about.html",      text: "關於我們" },
    { href: "./staff.html",      text: "幹部介紹" },
    { href: "./admissions.html", text: "名單與行前通知" },
    { href: "./memories.html",   text: "回憶牆" }
  ]
};
