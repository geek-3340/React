import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0);

  // 初回レンダリングを判定するためのフラグ
  // useStateを使って初期値をtrueに設定
  const [theFirstRender, setTheFirstRender] = useState(true);

  // useEffectを使ってcountが変化したときに実行される処理を定義
  // 初回レンダリングの時はフラグをfalseにして、処理を終了
  // 2回目以降はフラグがtrueになっているので、処理を実行
  useEffect(() => {
    // 初回レンダリングでのcount初期化時に実行されるのを防ぐ処理
    // 以下では初回のフラグがtrueとなり、処理をスキップ
    if (theFirstRender) {
      setTheFirstRender(false); // 2回目以降のレンダリングで実行されるようにフラグをfalseにする
      return;
    }
    console.log(`countが${count}になりました`);
  }, [count]);

  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello World!</h1>
      <Button onClick={handleClick} type="submit" disabled={false}>
        ボタン
      </Button>
      <Display count={count} />
    </>
  );
}

export default App;
