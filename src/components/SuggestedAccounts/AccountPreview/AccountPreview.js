import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fe57804a526210ea309ece7f20a46c99~c5_100x100.jpeg?x-expires=1690686000&x-signature=Wk%2BDGEfYlPW81qRaarONR9iu88I%3D"
                    alt="avatar"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>quocviethoang</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Quốc Việt Hoàng</p>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>6.2M</strong>
                <span className={cx('label')}>Followers</span>

                <strong className={cx('value')}>8.2M</strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
