import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup
} from 'mdb-react-ui-kit';

function Navbar() {
    const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);

    return (
      <>
        <MDBNavbar expand='lg' dark bgColor='black'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              type='button'
              data-target='#navbarTogglerDemo03'
              aria-controls='navbarTogglerDemo03'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href='#' className='mx-4'>
            <img
              src='https://static-00.iconduck.com/assets.00/apple-icon-831x1024-suvunx6x.png'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>
            <MDBCollapse navbar open={openNavNoTogglerThird}>
              <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' href='#' className='mx-4'>
                   Store
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>Mac</MDBNavbarLink>
                </MDBNavbarItem> 
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>iPad</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>iPhone</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>Watch</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>AirPods</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>TV & Home</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page'className='mx-4' href='#'>Only on Apple</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>Accessories</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>Support</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink active aria-current='page' className='mx-4' href='#'>
                  <i class="fa-solid fa-bag-shopping"></i>
                  </MDBNavbarLink>
                </MDBNavbarItem>

                {/* <MDBNavbarItem>
                  <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                    Disabled
                  </MDBNavbarLink>
                </MDBNavbarItem> */}
              </MDBNavbarNav>
              {/* <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
                <MDBBtn outline>Search</MDBBtn>
              </MDBInputGroup> */}
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </>
    );
}

export default Navbar;
