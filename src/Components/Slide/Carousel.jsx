import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import image from '../../Assests/Tv Plus Galleryg.png';
import image2 from '../../Assests/apple.jpg';
import image3 from '../../Assests/dynamic.png';
function Carousel() {
  return (
    <div>
         <MDBCarousel showControls showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src={image2} className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src={image} className='d-block w-100' alt='2' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src={image3} className='d-block w-100' alt='.3.' />
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Carousel