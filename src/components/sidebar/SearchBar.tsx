import { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  function handleInputChange(value: string) {
    setSearchValue(value);
  }

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <div className={styles['search-box']}>
      <button type="button" className={styles['search-button']} />
      <div className={styles['input-box']}>
        <label htmlFor="search-input">
          장소, 버스, 지하철, 도로 검색
          <input
            type="text"
            id="search-input"
            name="search-input"
            autoComplete="false"
            aria-controls="home-search-input"
            onChange={(e) => handleInputChange(e.target.value)}
            value={searchValue}
          />
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
