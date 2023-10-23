import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";

Layout.propTypes = {
  children: PropTypes.node
};


function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}


export default Layout;