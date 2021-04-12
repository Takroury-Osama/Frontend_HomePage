import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function SendEmail() {
  return (
<>
<section className="section-content">
  <div className="bg-white py-5 email-box border-shadow">
  <p className="text-info font-weight-bold d-inline px-5">Get the best deals delivered direct to your inbox each day</p>
    <div className="d-inline float-right">
      <input type="text"className="input-style-email" name="email" placeholder="enter your email" />
      <button type="submit" className="btn btn-info mx-4">Send Email</button>
    </div>
  </div>
</section>
</>
  );
}

export default SendEmail;
