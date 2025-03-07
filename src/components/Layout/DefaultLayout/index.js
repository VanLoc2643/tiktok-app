// !DEFault layput tức là nó sẽ chưa nhưng layout chính của giao diện

import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
//!Ta thấy layout tiktok có nhưng layout chính như Header, sideBar,..
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {/*! De chuyen layout dong */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
