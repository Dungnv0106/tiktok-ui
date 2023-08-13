
import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { UploadIcon } from '~/components/Icons';
import styles from './Header.module.scss';
import UploadControl from '../../../pages/Upload/UploadControl';

const cx = classNames.bind(styles);

const URL_UPLOAD = 'https://api.cloudinary.com/v1_1/dscjgwdu0/upload';

export const Upload = () => {

    const [url, setUrl] = useState();

    const handleUpload = ({ target: { files } }) => {
        if (files && files.length > 0) {
            // To get options upload, please checkout: https://cloudinary.com/documentation/image_upload_api_reference#upload
	        const formData = new FormData();
	        formData.append('file', files[0]);
            formData.append('upload_preset', 'gh3lq0nu'); // checkout: https://console.cloudinary.com/settings/c-7daf4240605f73080cfdb6cf6220b5/upload
            formData.append('api_key', '951223192371225'); // checkout: https://console.cloudinary.com/console/c-7daf4240605f73080cfdb6cf6220b5
            fetch(URL_UPLOAD, {
                method: 'POST',
                body: formData,
            }).then((resp) => {
                resp.json().then((result) => {
            	    setUrl(result?.url);
                })
            })
        }
    }

    return (
        <button className={cx('action-btn')}>
            <UploadControl onChange={handleUpload} accept="image/*">
                <UploadIcon />
            </UploadControl>
        </button>
    )
}