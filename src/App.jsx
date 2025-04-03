import { useEffect, useState } from 'react';
import './App.css'
import Button from './components/Button/Button'
import Display from './components/Display/Display'

function App() {

  const [count,setCount]=useState(0);

  useEffect(()=>{
    console.log('counted + ',count);
  },[count])

  const testGreeting=()=>{
    console.log('Hello World!');
  }

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

export default App
