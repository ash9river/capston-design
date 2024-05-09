import { useState } from 'react';
import styles from './MapSideBar.module.scss';
import SidePanel from './SidePanel';

function MapSideBar() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  function handleClick() {
    setSideBarOpen((prevState) => !prevState);
  }
  return (
    <>
      <div
        className={sideBarOpen ? styles['panel-open'] : styles['panel-close']}
      >
        <SidePanel />
      </div>
      <button
        type="button"
        className={sideBarOpen ? styles['menu-open'] : styles['menu-close']}
        onClick={handleClick}
      >
        <p className={styles['inner-text']}>&#8227;</p>
      </button>
    </>
  );
}
// width를 0에서 390으로 전환하면된다.
export default MapSideBar;
