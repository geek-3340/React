# React概要
## 何が出来るの？
- JSXを使える
  JavaScriptファイルの中にHTMLを埋め込むことができ、そのHTML内にJSの関数を使うことも出来る

- コンポーネント化
  上記の仕組みを利用して、WEBサイトの構造をコンポーネント管理出来る

  具体的にはコンポーネント数だけJSXファイルを作り、一つのファイルにインポートする

## ディレクトリ概要
ルートディレクトリにindex.htmlを配置し基本編集しない
- ### srcディレクトリ
  この中にmain.jsx、App.jsxファイル、assets、componentsディレクトリを配置

- ### componentsディレクトリ
  この中にJSXのコンポーネントディレクトリを配置し、各ディレクトリにjsxコンポーネントと依存関係のCSS等を配置する

- ### assetsディレクトリ
  main.jsx、App.jsxにCSSをあてる時はここに配置

## JSXファイル概要
※ファイル名は任意であるが以下はViteデフォルトのファイル名であり推奨
- ### main.jsx
  一番最初の階層となるファイルで、HTMLのルートを取得しReactコンポーネントファイルをレンダリングする処理をする

  このファイルが読み込むJSXファイルはコンポーネントとなり、ファイル名は`パスカルケース`で記述する

- ### App.jsx
  2番目の階層となるファイルで、各コンポーネントを読み込んでまとめるファイル

  main.jsxのrenderメソッドで読み込まれるファイル

- ### コンポーネント名.jsx
  プロジェクトに応じたコンポーネントを記述したファイル

  コンポーネントの数だけ存在し、App.jsxで読み込まれて配置される