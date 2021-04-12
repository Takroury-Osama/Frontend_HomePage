import 'bootstrap/dist/css/bootstrap.min.css';
import WishList from '../mainComponents/wishlist'


function VerticalNav() {
  return (
<>
<section className="section-content">
<div className="row">
 <div className="col-lg-3 my-4">
  <nav id="vertical">
  <h3 id="discovertitle"> Discover </h3>
  <hr/>
  <ul className="verticalul">
    <li>
    <a href="#home">Featured Auckland deals</a>
    <span className="discover-num"> 121 </span>
    </li>

    <li>
    <a href="#news">Collections</a>
    <span className="discover-num"> 37 </span>
    </li>

    <li>
    <a href="#contact">Escapes</a>
    <span className="discover-num"> 97 </span>
    </li>

    <li>
    <a href="#about">Picked for You</a>
    <span className="discover-num">  </span>
    </li>

    <li>
    <a href="#about">Activities, Events & Outdoors</a>
    <span className="discover-num"> 117 </span>
    </li>

    <li>
    <a href="#about">Store</a>
    <span className="discover-num"> 943 </span>
    </li>

    <li>
    <a href="#about">Restaurants, Cafes</a>
    <span className="discover-num"> 54 </span>
    </li>

    <li>
    <a href="#about">Beauty, Massage & Spa</a>
    <span className="discover-num"> 216 </span>
    </li>

    <li>
    <a href="#about">House & Gareden</a>
    <span className="discover-num"> 509 </span>
    </li>

    <li>
    <a href="#about">Fitness & Sports</a>
    <span className="discover-num"> 63 </span>
    </li>

    <li>
    <a href="#about">Automotive</a>
    <span className="discover-num"> 67 </span>
    </li>
    </ul>
  </nav>
 </div>
 <WishList />
 </div>
</section>
   </>
  );
}

export default VerticalNav;
