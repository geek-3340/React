import styles from './Button.module.css';

function Button(props) {
  const { onClick, type, disabled, children } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
export default Button;
