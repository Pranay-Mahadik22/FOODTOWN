import { Link } from "react-router-dom";

const Header = () => {
  return (
  <div className="header_section">
  <div className="container-fluid justify-content-between">
    <nav className="navbar navbar-expand-lg navbar-light bg-light"><a className="navbar-brand" href="#">
      <img className="logo" src="https://asset.brandfetch.io/idPJ1kmv3W/idX0gH5E41.png" 
      style={{ maxWidth:"150px"}}/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">

          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link></li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link></li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
        <form action="#" method="post" className="form-inline my-2 my-lg-0">
        </form>
      </div>
    </nav>
    </div>
    </div>
);

}

export default Header ;