import React, { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccoutItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();
  // Xóa dữ liệu ô input và kết quả tìm kiếm
  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  // Ấn kết quả tìm kiếm khi click ra ngoài
  const handleHideResult = () => {
    setShowResult(false);
  };
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Tài khoản</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos..."
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
