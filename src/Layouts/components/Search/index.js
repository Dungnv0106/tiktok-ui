import React, { useState, useEffect, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/apiServices/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccoutItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import useDebounce from '~/hooks/useDebounce';
const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

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

  const handleChange = (e) => {
    // Không cho nhập khoảng trắng đầu tiên
    const inputValue = e.target.value;
    if (!e.target.value.startsWith(' ')) {
      setSearchValue(inputValue);
    }
  };
  useEffect(() => {
    // encodeURIComponent: mã hóa dữ liệu người dùng nhập vào
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    // Trước khi gọi api thì loading là true
    // setLoading(true);

    // request
    //   .get(`users/search`, {
    //     params: {
    //       q: debounced,
    //       type: 'less',
    //     },
    //   })
    //   .then((res) => {
    //     // console.log(res.data.data);
    //     setSearchResult(res.data.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setLoading(false);
    //   });

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debounced);
      // console.log(result);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debounced]);

  // const handleSubmit = (e) => {

  // }
  return (
    // Using a wrapper <div> tag around the reference element solves
    //this by creating a new parentNode context.
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Tài khoản</h4>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
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
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

          <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
