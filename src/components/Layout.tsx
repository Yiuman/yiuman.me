import React from 'react';
import { Link } from 'gatsby';
import settings from '../settings';
import '../styles/layout.css';
import ToggleTheme from './ToggleTheme';

//布局头部
const LayoutHeader: React.FC = () => {
  return (
    <header className="flex justify-end py-6">
      {settings.navigations.map((nav) => {
        const NavIcon = nav.icon;
        return (
          <nav className="px-3" key={nav.linkTo}>
            <Link to={nav.linkTo}>
              {nav.title && <span className="inline-block mt-1.5">{nav.title}</span>}
              {NavIcon && <NavIcon className="layout-nav" />}
            </Link>
          </nav>
        );
      })}
      <ToggleTheme />
    </header>
  );
};

//布局顶部
const LayoutFooter: React.FC = () => {
  const fontColor = {
    color: '#888',
  };
  return (
    <footer className="flex border-t justify-center justify-items-center py-3 ">
      <section style={fontColor}>Yiuman © 2021</section>
      <span className="px-1">|</span>
      <section style={fontColor}>
        Powered by <a href="//www.gatsbyjs.com">gatsbyjs</a>
      </section>
    </footer>
  );
};

//布局组件
const Layout: React.FC = (props) => {
  return (
    <main className={'bg-white dark:bg-black flex flex-col h-full '}>
      <LayoutHeader />
      <div className="flex-1">{props.children}</div>
      <LayoutFooter />
    </main>
  );
};

export default Layout;
