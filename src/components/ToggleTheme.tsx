import { FiMoon, FiSun } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';

function changeThemeMode(dark: boolean): void {
  if (dark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

const ToggleTheme: React.FC = () => {
  //切换主题
  const darkState = Boolean(localStorage.getItem('yiuman_theme_mode') === 'true') || false;
  const [dark, setDark] = useState(darkState);

  const changeTheme = (mode: boolean) => {
    localStorage.setItem('yiuman_theme_mode', String(mode));
    setDark(mode);
  };

  useEffect(function () {
    changeThemeMode(dark);
  });

  return (
    <nav className="cursor-pointer px-3" onClick={() => changeTheme(!dark)}>
      {dark ? <FiSun className="layout-nav" /> : <FiMoon className="layout-nav" />}
    </nav>
  );
};

export default ToggleTheme;
