import styles from './Button.module.css';

function Button({ disable, type, onClick, children }) {
  return <button className={styles.button} disabled={disable} type={type} onClick={onClick}>
      {children}
    </button>
}

export default Button;