# 班決定後の初回

## やること

* 環境構築
  * sublime text 3
  * git (/ git bash)
  * npm / node.js
  * (chrome)
  * sourcetree

* node.js の使い方、軽く文法

* 課題

### 環境構築

#### sublime text

ここからダウンロード：

https://www.sublimetext.com

できれば設定はこんな感じにしよう(作業優先度:低)

*preference*

```json
{
	"always_show_minimap_viewport": true,
	"bold_folder_labels": true,
	"color_scheme": "Packages/Material Theme/schemes/Material-Theme-Darker.tmTheme",
	"ensure_newline_at_eof_on_save": true,
	"font_face": "CamingoCode",
	"font_size": 11,
	"highlight_modified_tabs": true,
	"ignored_packages":
	[
		"JavaScript",
		"Vintage"
	],
	"line_padding_bottom": -2,
	"overlay_scroll_bars": "enabled",
	"tab_size": 2,
	"theme": "Material-Theme-Darker.sublime-theme",
	"translate_tabs_to_spaces": true,
	"trim_trailing_white_space_on_save": true
}
```


#### git 単品

git bash を利用する場合は不要

##### mac

```
brew update
brew install git
```

確認

```
git --version
```

#### git bash

公式サイトから。

https://git-for-windows.github.io/

#### npm / node.js

##### windows

nvmw を使う。

http://qiita.com/kouh/items/30e7cbb673472c43b66f

もしうまくいかない場合は、公式サイトのインストーラを使用する

https://nodejs.org/

##### mac / linux

nvm を使う。

http://qiita.com/tagosaku324/items/bf1fe149c38c99728c72


##### chrome

https://www.google.co.jp/chrome/browser/desktop/index.html

#### sourcetree

ここからダウンロード&インストール

https://ja.atlassian.com/software/sourcetree


### node.js の使い方

#### 事前準備

* 作業フォルダを作っておくこと

* ターミナルでそこに移動しといたほうがいい

#### node.js の動作確認

sublime text で以下ファイルを作成し、保存

*app.js*

```
console.log('hello world!');
```

実行

```
$ node app.js
```

コンソール上に、 hello world という文字列が表示されたら成功

### 課題

* node.js とは何か？javascriptとは何か？という理解を深める

* 同フォルダにあるpowerpoint 資料を見て勉強してくる
