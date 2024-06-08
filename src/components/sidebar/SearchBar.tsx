import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { shopState } from 'store/atoms/shopState';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const [shop, setShop] = useRecoilState(shopState);
  function handleInputChange(value: string) {
    setSearchValue(value);
  }

  useEffect(() => {
    setShop(searchValue);
  }, [searchValue]);

  useEffect(() => {
    setSearchValue(shop);
  }, [shop]);
  return (
    <div className={styles['search-wrap']}>
      <div className={styles['search-box']}>
        <button type="button" className={styles['search-button']} />
        <div className={styles['input-box']}>
          {searchValue.length === 0 ? (
            <label htmlFor="search-input" className={styles['search-label']}>
              장소, 버스, 지하철, 도로 검색
            </label>
          ) : null}
          <input
            type="text"
            id="search-input"
            className={styles['search-input']}
            name="search-input"
            autoComplete="off"
            aria-controls="home-search-input"
            onChange={(e) => handleInputChange(e.target.value)}
            value={searchValue}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
