import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

 const Booking = [
  {
     id: 1,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/8e448a32817094820a58e080f9e350cb64c01695.jpg",
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
     image: "//main-cdn.grabone.co.nz/goimage/325x225/1f380eea37924b2b4cf5211b01540f74385e2343.jpg",
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
     image: "//main-cdn.grabone.co.nz/goimage/325x225/6a7588f11d0d9504c663fdcf0d17a6070302995c.jpg",
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
     image: "//main-cdn.grabone.co.nz/goimage/325x225/1719b96c9ee175f185dc95a848bc4085fc4b0cba.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wiki",
     numBooking:"12738",
     oldPrice:"$160",
     Price:"$115"
  },
  {
     id: 5,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/c2b78848504442cfe60ec022235f6f150beeb65b.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wairakei",
     numBooking:"14738",
     oldPrice:"$25",
     Price:"$15"
  },
  {
     id: 6,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/f387ea5018aa7647a3d6a1919d14264a7b6715f7.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wairakei",
     numBooking:"14738",
     oldPrice:"$25",
     Price:"$15"
  },
  {
     id: 7,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/b64246ad63ac0a27dd158be5653fdef3a55e3e42.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wairakei",
     numBooking:"14738",
     oldPrice:"$25",
     Price:"$15"
  },
  {
     id: 8,
     image: "//main-cdn.grabone.co.nz/goimage/325x225/07dcd7c5c0d58985eba0c04370c8de6b86eba8b1.jpg",
     title: "Thermal Hot Pool Entry",
     description:"Waiekei Terraces",
     overlayText: "Test overlay description for each card component card",
     place:"Wairakei",
     numBooking:"738",
     oldPrice:"$100",
     Price:"$80"
  }
];

function CardBooking() {
  return (
    <>
    <section className="section-content py-5">
    <div>
      <h2 className="type-booking font-weight-bold my-4 d-inline">Featured Auckland Deals</h2>
      <button className="btn btn-info button-balance">View More &#62;</button>
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

export default CardBooking;
