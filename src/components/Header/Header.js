import styles from './Header.module.scss';

const Header = ({ title, description }) => {
  return (
    <header className={styles.header}>
      <div className={styles['header-info']}>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </header>
  );
};

export default Header;
