import classNames from 'classnames/bind';
import Styles from './Siderbar.module.scss';

const cx = classNames.bind(Styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar Page</h2>
        </aside>
    );
}

export default Sidebar;
