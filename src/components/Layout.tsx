import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout; 