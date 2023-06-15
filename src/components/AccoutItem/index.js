import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <Image className={cx('avatar')} src="https://picsum.photos/id/237/50/50/" alt="Hoa" />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>NguyenVAnA</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>Username</span>
      </div>
    </div>
  );
};

export default AccountItem;
