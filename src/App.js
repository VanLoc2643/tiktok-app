import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// ?Routes là cha vĩ tuyến nhòm các thằng route lai
//!Tại trang page nó đc tthay đổi mà nôi nôidung có thể bị thayd dổi thì ta sx đặt đúng
//!Cái thằng routes
//!Bên trong routes sẽ là các route nó sẽ và mỗi route nó chứa 1 cai page của ta
//?ROUTE CHỨA 2 props path và element chưa REACT EWLEMNT (</home> ko nhận react componet home )
import { Fragment } from 'react';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import { publicRoutes } from '~/routes';
import './App.css';
// !Thuong 1 trang web chio co 1 Router thoi
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    // !Nếu router ko có thuộc tính layout thì mặc định sẽ là default layout

                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
