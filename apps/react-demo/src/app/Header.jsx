import { Link, NavLink, useLocation } from 'react-router-dom';
import './../../../html-css-js-demo/styles-header.css';

export const Header = () => {
  let location = useLocation();
  let path = location.pathname;

  return (
    <header>
      <NavLink
        to="/counter"
        style={{ textDecoration: path === '/counter' && 'underline' }}
      >
        Counter app page
      </NavLink>
      <NavLink
        to="/career"
        style={{ textDecoration: path === '/career' && 'underline' }}
      >
        Career path page
      </NavLink>
    </header>
  );
};
