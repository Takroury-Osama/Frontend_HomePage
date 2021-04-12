import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

 const Booking = [
  {
     id: 1,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/1f380eea37924b2b4cf5211b01540f74385e2343.jpg",
     title: "Three-Day Abel Tasman Self",
     description:"Three-Day Abel Tasman Walk",
     overlayText: "Test overlay description for component for each card card",
     place:"Win",
     numBooking:"106",
     oldPrice:"$1445",
     Price:"$1095"
  },
  {
     id: 2,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/83195255b7be8033753be6db6b421693237350af.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wairakei",
     numBooking:"14738",
     oldPrice:"$35",
     Price:"$17"
  },
  {
     id: 3,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/f3cef4c8013e9b89d374149d2ae9622d12eb2d54.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wairakei",
     numBooking:"14738",
     oldPrice:"$25",
     Price:"$15"
  },
  {
     id: 4,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/0ea97f179320d53b9df3218ca73e7f925b7df679.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wairakei",
     numBooking:"14738",
     oldPrice:"$25",
     Price:"$15"
  }
];

function RestuandCafe() {
  return (
    <>
    <section className="section-content py-2">
    <div>
      <h2 className="type-booking font-weight-bold my-4 pr-1 d-inline position-relative">Collections</h2>
      <button className="btn btn-info">View More &#62;</button>
    </div>
    <div className="row">
        {Booking.map((data,key) => {
          return(
            <div key={key} className="col-lg-3 col-md-6 py-3 content">

            <div className="wishlist-card rounded content-image">
            <div className="content-overlay"></div>
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
        </div>
    </section>
  </>
  );
}

export default RestuandCafe;
