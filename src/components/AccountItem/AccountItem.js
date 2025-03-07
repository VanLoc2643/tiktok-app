import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
const cx = classNames.bind(Styles);
function AccountItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://ih1.redbubble.net/image.2655697443.3677/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                alt="Ganyu"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Nguyen Van C</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenVanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
