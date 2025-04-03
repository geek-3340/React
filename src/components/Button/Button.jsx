import styles from './Button.module.css';

function Button({ disable, type, onClick,children }) {

  return <button className={styles.button} disabled={disable} type={type}
      onClick={onClick} >
      <span className={styles.buttonInner}>{children}</span>
    </button>
}

export default Button;