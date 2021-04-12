import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

 const Wishes = [
  {
     id: 1,
     image: "//main-cdn.grabone.co.nz/goimage/495x343/f8293dd56b36f6efe250d112ab107f84a0206479.jpg",
     title: "Three-Day Abel Tasman Self",
     description:"Three-Day Abel Tasman Walk",
     overlayText: "Test overlay description for each card component card",
     place:"Win",
     numBooking:"106",
     oldPrice:"$1445",
     Price:"$1095"
  },
  {
     id: 2,
     image: "//main-cdn.grabone.co.nz/goimage/495x343/0546c800d3ad18ab9d4e0cd7db4a72d45efdcb53.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wairakei",
     numBooking:"14738",
     oldPrice:"$25",
     Price:"$15"
  },
];

function test() {
  Wishes.map((wish) => {
    const {id, image, title, description} = wish
    console.log(wish);
    return(wish)
  })
}

function WishList() {
  return (
    <>
    {Wishes.map((data,key) => {
      return(
        <div key={key}  className="col-lg-4 col-md-6 my-4 content">
        <div className="wishlist-card rounded content-image">
        <div id="content-wishes" className="content-overlay"></div>
          <img src={data.image} alt="" className="card-img-top"/>
          <div className="content-details">
            <h5 className="content-title">{data.overlayText}</h5>
          </div>
            <div className="wishlist-body">
            <h5 className="wishlist-title">{data.title}</h5>
            <p className="wishlist-desc">{data.description}</p>
            <p className="wishlist-place">{data.place}</p>
            <p className="wishlist-number">{data.numBooking}</p>
            <div className="wishlist-price">
            <span className="old-price"> {data.oldPrice} </span>
            <span className="new-price"> {data.Price} </span>
            </div>
            </div>
          </div>
         </div>
      );
    })}
  </>
  );
}

export default WishList;
