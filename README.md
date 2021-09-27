# tel-blacklist-react

## 功能描述 (Features)
1. 列出電話名單，使用者可以**查閱、增加一筆電話、刪除一筆電話**。
2. 可以**搜尋電話或姓名**，可以個別搜尋，也能同時搜尋兩者。
3. 使用**頁籤（全部、黑名單、白名單）篩選**查閱的電話清單。

## React Component 架構
- 父層：《TelBlacklist》
  - 〈SearchNav〉
  - 〈TableWarp〉
> Component 架構還有重構空間，有需求再做調整。

## CSS 
1. 使用 all.css 將全域會使用到的 CSS class name 整合成一隻檔案
2. 全域會使用到的 CSS class name 使用 小寫開頭 Ex. basic、reset
4. 客製化樣式 Ex.Crad 使用 Css module 引入

## 安裝與執行步驟 (Installation and Execution)
1. 將專案複製到本機 (兩種方法)
> (1) 打開終端機輸入 
`git clone https://github.com/Louslife/tel-blacklist-react`</br>
> (2) 點選 download ZIP 下載

2. 進入專案資料夾安裝工具包
> 打開終端機輸入
`npm install`

3. 執行專案
> 打開終端機輸入 
`npm start`

4. 使用瀏覽器瀏覽
> 打開瀏覽器在網址列輸入 localhost:3000 即可瀏覽

## 專案開發人員

> [AOI](https://github.com/aoigj100a)
