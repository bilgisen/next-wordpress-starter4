import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Kullanıcı tercihi varsa onu kullan, yoksa sistem temasını kullan
    const userTheme = localStorage.getItem('theme');
    if (userTheme) {
      setTheme(userTheme);
      document.documentElement.setAttribute('data-theme', userTheme);
    } else {
      const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(sysTheme);
      document.documentElement.setAttribute('data-theme', sysTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return [theme, toggleTheme];
}
