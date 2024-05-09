import SearchBar from './SearchBar';
import styles from './SidePanel.module.scss';

function SidePanel() {
  return (
    <div className={styles['panel-container']}>
      <SearchBar />
    </div>
  );
}

export default SidePanel;
