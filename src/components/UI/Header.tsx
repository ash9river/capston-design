import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Header.module.scss';

function Header() {
  const giveActiveClass = ({
    isActive,
  }: {
    isActive: boolean;
  }): string | undefined => (isActive ? styles.active : undefined);

  const [showHamburger, setShowHamburger] = useState(false);

  function toggleHamburger() {
    setShowHamburger((prevState) => !prevState);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo512.png" alt="logo" />
        </div>
        <div
          className={styles.menuIcon}
          onClick={toggleHamburger}
          aria-hidden="true"
        >
          ≡
        </div>
        <div
          className={`${styles.navElements} ${showHamburger && styles.navActive}`}
        >
          <ul>
            <li>
              <NavLink to="/" className={giveActiveClass} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/error" className={giveActiveClass}>
                Error
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
