import { useState, useEffect } from 'react';

function Display(props) {
  const [text, setText] = useState('Loading...');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setTimeout(() => {
        setText(`count : ${props.count}`);
        setInitialized(true); // 初回レンダリングが完了したことを記録
      }, 2000);
    } else {
      setText(`count : ${props.count}`); // 初回以降は即座に更新
    }
  }, [props.count, initialized]);

  return <div>{text}</div>;
}
export default Display;
