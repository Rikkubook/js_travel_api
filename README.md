#德安訂房前台平台系統

## Get Start 
### 1. 安裝套件
``
 $ npm install
``

### 2. 複製設定檔
複製configs/dbConfig_example.js 到同一層的configs/dbConfig.js
``
 $ cp configs/dbConfig_example.js  configs/dbConfig.js
``
### 3. 執行
``
 $ node app
``


###  開發注意事項

* commit 前需要對修改的檔案做eslint  格式的檢查 ，必須確保都沒問題 (格式設定檔路徑 : ..eslintrc.json)
* commit 前需要merge 遠端develop 分支回自己要commit的該分支，減緩維運人員merge時衝突情況
* 分支規則 [單號_dev] (ex: 175509_dev ) 
