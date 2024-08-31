### 功能
此工具是用來查詢動漫的基本資料的，請點右側連結進入[動漫資料收集器](https://benjamin-yan.github.io/get-anime-info/)。

### 使用時機
因為此網頁是本人在紀錄正在看的動漫時使用，所以收集的資料具有高度客製化，未必是你需要的~

目前有以下四個:
- name (嚴格來說名字是我自己輸入的XD)
- img
- date
- totalcount

### 使用方法
1. 填上欲查詢的動漫名字(如: `孤獨搖滾`, `不時輕聲地以俄語遮羞的鄰座艾莉同學`)，並按下 Search 按鈕。
2. 接著請等待 ID 自動填上，若查詢失敗，請點擊標題旁的連結手動查詢(網址最後面的數字就是了)。得到作品 ID 後，請點擊 Enter 按鈕。
3. 請等待資料(縮圖網址 & 開播時間 & 總集數)自動填上，若想確認圖片是否正確，可以點擊 Check 按鈕查看。
4. 最後按下 Go 按鈕就會在右側顯示 YAML 格式的資料啦!

### 注意事項
1. 查詢時填入的名字，可以是官方的全名，如: `不時輕聲地以俄語遮羞的鄰座艾莉同學`，也可以是縮寫，如: `俄語遮羞`。
2. 在 github [網頁](https://benjamin-yan.github.io/get-anime-info/)上會遇到 `Cross-Origin` 的問題，以至於在按下 Search 按鈕時不會有任何動作，解決方法有兩個:
   1. 前往 [這裡](https://cors-anywhere.herokuapp.com/)，並按下"Request temporary access to the demo server"即可返回頁面查詢。
   2. 下載原始碼，在本地端執行。

### 致謝
- 資料來源 API: [Bangumi 番组计划](https://bangumi.tv/)
- 翻譯用 API  : [繁化姬](https://docs.zhconvert.org/api/convert/)

