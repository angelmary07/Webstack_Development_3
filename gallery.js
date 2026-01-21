// src/pages/Gallery.js
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

function Gallery() {
  // You can replace these URLs with your own images:
  // Option 1: Put images in public/images/ and use /images/your-image.png
  // Option 2: Import from src/assets/ → import img1 from '../assets/img1.png';
  const images = [
    {
      src: 'https://g5-assets-cld-res.cloudinary.com/image/upload/x_0,y_33,h_902,w_1600,c_crop/q_auto,f_auto,fl_lossy,c_fill,g_center,h_406,w_720/v1764090854/g5/g5-c-iqbdwwmq-oakland-management-multifamily-client/g5-cl-1gq08ywlkh-cedarbrooke-apartments-of-auburn-hills/services/AuburnGate-BlogImage1_uombfw.jpg',
      alt: 'Clubhouse Community Mixer',
      caption: 'Clubhouse Community Mixer',
    },
    {
      src: 'https://media.istockphoto.com/id/966953350/photo/family-celebration-or-a-barbecue-party-outside-in-the-backyard.jpg?s=612x612&w=0&k=20&c=47YowyFTB4eEKx3GIYqBYXS8MrU8EZbxIevtRbZnoUU=',
      alt: 'Outdoor Family Gathering',
      caption: 'Outdoor Family Gathering',
    },
    {
      src: 'https://www.ironcompany.com/media/magefan_blog/multi-housing-fitness-center-gym-equipment-flooring-min.jpg',
      alt: 'Fitness Center Activity',
      caption: 'Fitness Center Activity',
    },
    {
      src: 'https://fpdcc.com/wp-content/uploads/2018/09/whealan-pool-aug12.jpg',
      alt: 'Kids Pool Fun',
      caption: 'Kids Pool Fun',
    },
    {
      src: 'https://img.peerspace.com/image/upload/c_crop,g_custom/g_auto,c_fill,q_auto,f_auto,fl_progressive,w_650,ar_5:4/ch5ibqjcrrfgw40mkucz',
      alt: 'Celebration Night',
      caption: 'Celebration Night',
    },
  ];

  return (
    <>
      {/* <Navbar />  ← Use your shared Navbar component */}

      <div style={{ background: 'linear-gradient(120deg, #fbe9cf 0%, #ffd47e 100%)', minHeight: '100vh' }}>
        <h1 className="gallery-title">Elite Community Gallery</h1>
        <p className="gallery-caption">
          Swipe through highlights and memories from our vibrant community life.
        </p>

        <Container className="carousel-box" style={{ maxWidth: '1080px', padding: '44px 26px 54px' }}>
          <Carousel
            id="eliteCarousel"
            indicators
            controls
            touch
            interval={5000} // auto-slide every 5s
            className="carousel slide shadow-lg"
            style={{ borderRadius: '18px', overflow: 'hidden' }}
          >
            {images.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={item.src}
                  alt={item.alt}
                  style={{
                    objectFit: 'cover',
                    height: '550px',
                    borderRadius: '22px',
                    boxShadow: '0 8px 32px #e3881d22',
                  }}
                />
                <Carousel.Caption className="d-none d-md-block">
                  <h5
                    style={{
                      color: '#e3881d',
                      background: '#fffbe6d4',
                      padding: '10px 26px',
                      borderRadius: '16px',
                      display: 'inline-block',
                    }}
                  >
                    {item.caption}
                  </h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>

      {/* <Footer />  ← Use your shared Footer component */}
    </>
  );
}

export default Gallery;