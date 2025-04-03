import { useEffect,useState } from 'react';
import styles from './Display.module.css';

const Display=({count})=>{
const [text, setText] = useState('...Loading');

useEffect(() => {
  setTimeout(() => {
    setText('Count:');
  }, 2000);
}, []);

  return <div className={styles.display}>{text} + {count}</div>
};

export default Display;