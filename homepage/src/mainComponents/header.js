import 'bootstrap/dist/css/bootstrap.min.css';
import {FavoriteBorder, LocationOn, ShoppingCart, PersonOutline, MailOutline} from '@material-ui/icons/';


function Header() {
  return (
    <>
    <section className="section-content bg-info">
    <nav className="navbar navbar-expand-lg navbar-dark">
    <a id="website-name" className="navbar-brand" href="#">GarbOne</a>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mr-auto">
    </ul>
    <div className="my-2 my-lg-0">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <LocationOn />  Auckland
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Auckland</a>
              <a className="dropdown-item" href="#">Another Auckland</a>
              <a className="dropdown-item" href="#">Auckland</a>
              <a className="dropdown-item" href="#">Auckland</a>
              <a className="dropdown-item" href="#">Auckland</a>
              <a className="dropdown-item" href="#">Auckland</a>
            </div>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#"><FavoriteBorder /></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#"><ShoppingCart /></a>
      </li>
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <PersonOutline />
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
            <a className="dropdown-item" href="#">Auckland</a>
            <a className="dropdown-item" href="#">Another Auckland</a>
            <a className="dropdown-item" href="#">Auckland</a>
            <a className="dropdown-item" href="#">Auckland</a>
            <a className="dropdown-item" href="#">Auckland</a>
            <a className="dropdown-item" href="#">Auckland</a>
          </div>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="#"><MailOutline /> Subscribe</a>
    </li>
    </ul>
    </div>
  </div>
</nav>
</section>
</>
  );
}

export default Header;
