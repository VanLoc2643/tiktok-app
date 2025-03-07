// !DEFault layput tức là nó sẽ chưa nhưng layout chính của giao diện

import Header from '~/components/Layout/components/Header';

//!Ta thấy layout tiktok có nhưng layout chính như Header, sideBar,..
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {/*! De chuyen layout dong */}
                    {children}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
