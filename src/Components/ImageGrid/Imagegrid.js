import React from 'react'
import image1 from '../../Assests/14pro.png';
import image2 from '../../Assests/ipad.png';
import image3 from '../../Assests/airpod.png';
import image4 from '../../Assests/watch.png';
import image5 from '../../Assests/watchultra.png';
import image6 from '../../Assests/card.png';
function Imagegrid() {
  return (
    <div className="container-fluid p-0">
    <div className="row">
      <div className="col-md-6">
        <img src={image1} className="img-fluid w-100" alt="Image 1" />
      </div>
      <div className="col-md-6">
        <img src={image2} className="img-fluid w-100" alt="Image 2" />
      </div>
    </div>
    <div className="row ">
      <div className="col-md-6">
        <img src={image3} className="img-fluid w-100" alt="Image 3" />
      </div>
      <div className="col-md-6">
        <img src={image4} className="img-fluid w-100" alt="Image 4" />
      </div>
    </div>

    <div className="row ">
      <div className="col-md-6">
        <img src={image5} className="img-fluid w-100" alt="Image 5" />
      </div>
      <div className="col-md-6">
        <img src={image6} className="img-fluid w-100" alt="Image 6" />
      </div>
    </div>
  </div>
  
);
  
}

export default Imagegrid