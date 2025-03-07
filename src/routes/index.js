import Home from '~/pages/Home';

import { HeaderOnly } from '~/components/Layout';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

export const publicRoutes = [
    // !Router nay đc sử dụng khi ko cần đăng nhập vân truy cậpd dược
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    // !Layout = null sẽ ko có layout dèault
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
export const privateRoutes = [
    // !Router nay đc sử dụng dc cần đăng nhập (có thể lái ra trang login nêu cố truy cập)
];
