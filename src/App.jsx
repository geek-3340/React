import { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0);

  // const [theFirstRender, setTheFirstRender] = useState(true);

  useEffect(() => {
    // if (theFirstRender) {
    //   setTheFirstRender(false);
    //   return;
    // }
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
