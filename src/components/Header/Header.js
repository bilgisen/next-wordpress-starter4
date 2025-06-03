import styles from './Header.module.scss';
// import useDarkMode from '../../hooks/useDarkMode';

const Header = ({ children }) => {
  // const [theme, toggleTheme] = useDarkMode();

  return (
    <header className={styles.header}>
      <div>
        <div className={styles['header-info']}>{children}</div>
        <button
          onClick={() => alert('toggle!')}
          style={{
            padding: '0.5em 1em',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
          aria-label="Dark mode toggle"
        >
          🌙 Dark Mode
        </button>
      </div>
    </header>
  );
};

export default Header;