import { faMagnifyingGlass, faSpinner, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'; // optional
import images from '~/assets/images';
import { AccountItem } from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

console.log(images.logo);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // todo: call api
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>

                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search__dropdown')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search__dropdown-tittle')}>Account</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input className={cx('search__input')} placeholder="Tìm kiếm " spellCheck={false} />
                        <button className={cx('search__clear')}>
                            {/* icon close */}
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                        <button className={cx('search__loading')}>
                            {/* icon loading */}
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>

                        {/* <Tippy content="Tìm kiếm" placement="right" animation="scale-subtle" theme="light">
                        <button className={cx('search__btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Tippy> */}

                        <button className={cx('search__btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary className={cx('custum-login')}>
                        Log In
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
