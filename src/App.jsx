import { useEffect, useState } from 'react';
import Button from './components/Button/Button'
import Display from './components/Display/Display'

// コンポーネントは、関数として定義する
// コンポーネントは、最初の文字を大文字にする（パスカルケース）
function App() {

  // useStateは、Reactのフックの一つで、状態を管理するために使用する
  // useStateは、状態変数とその更新関数を返し、引数には初期値を指定する
  // useStateはコンポーネントの最上部で呼び出す
  const [count,setCount]=useState(0);

  // useEffectは、Reactのフックの一つで、副作用を管理するために使用する
  // useEffectは、コンポーネントのライフサイクルに合わせて実行される
  // useEffectは、コンポーネントの最上部で呼び出す
  // useEffectは、第一引数に実行する関数を指定し、第二引数に依存配列を指定する
  // 第二引数に空の配列を指定すると、コンポーネントがマウントされたときのみ実行され、依存配列を指定すると配列の値が変更されたときのみ実行される
  // 第二引数を省略すると、コンポーネントが更新されるたびに実行される
  useEffect(()=>{
    console.log('counted + ',count);
  },[count])

  // 関数は、コンポーネントの中で定義する
  const testGreeting=()=>{
    console.log('Hello World!');
  }

  // returnの中にJSXを記載する
  return (
    <>
      <Display count={count} />
      <br />
      <Button disable={false} type={'button'} onClick={() => { 
        setCount(count + 1)
        testGreeting()
        }}>
        <span>Click Me</span>
      </Button>
    </>
  )
}

export default App;