import Container from 'components/Container';
import styles from './Header.module.scss';
import useDarkMode from '../../hooks/useDarkMode';

const Header = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <header className={styles.header}>
      <Container>
        {children}
        <button
          onClick={toggleTheme}
          style={{
            marginLeft: 'auto',
            padding: '0.5em 1em',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
          aria-label="Dark mode toggle"
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </Container>
    </header>
  );
};

export default Header;
