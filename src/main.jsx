import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// 以下は、JSXをHTMLに変換し描画するための雛形
// createRoot()の引数に、描画先のDOM要素を渡す
// render()の引数にベースとなるJSXを渡す
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)