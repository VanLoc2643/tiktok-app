import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
//! to là thuộc tính của Link
function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    large = false,
    small = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // !Remove event disable
    if (disabled) {
        // !thật ra khi nắng nghe sự kiện đều bắt đầu bằng on vậy nên
        //ta có thể dùng cách linh hoạt hơn
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        leftIcon,
        rightIcon,
        text,
        disabled,
        rounded,
        [className]: className, // Chỉ thêm 'class' nếu có giá trị
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {<span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
