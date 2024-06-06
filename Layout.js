import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        
            <Link to="/">Home</Link>
            <Link to="/Register">Register</Link>
            <Link to="/Activate/:token">Activate</Link>
            <Link to="/Login">Login</Link>
          </nav>

      <Outlet />
    </>
  )
};

export default Layout;