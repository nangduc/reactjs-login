// import {
//   Link
// } from "react-router-dom";

export default function Header({ user }) {
  const logOut = () => {
    localStorage.removeItem('token')
  };


  return (
    <div>
      <header className="header_area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand logo_h" href="index.html"><img src={process.env.PUBLIC_URL + '/roya/image/logo.png'} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
              <ul className="nav navbar-nav menu_nav ml-auto">
                <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="about.html">About us</a></li>
                <li className="nav-item"><a className="nav-link" href="accomodation.html">Accomodation</a></li>
                <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                <li className="nav-item submenu dropdown">
                  <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile: {user.user.mail}</a>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><a className="nav-link" onClick={logOut} href="/">Logout</a></li>
                    <li className="nav-item"><a className="nav-link" href="/">Profile</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );


}
