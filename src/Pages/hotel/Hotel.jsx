import { useState } from 'react';
import './hotel.css';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const Photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/66167852.jpg?k=de6c06caabf134912d345bbe13788ba54459500562b41aceab6859bb0c359664&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301838834.jpg?k=c59dfc6b72ec15ae343f68b5c55e4e5e6186f1da35ffe3aa0bec9fe510cbe4b2&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/66341801.jpg?k=c7ae9f15faebf3b3c1a49c1a1bb0bd0b6d1347a34c71083cbde464156b7bb543&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/66167868.jpg?k=e936d011a9bcef721dc55de14f52d07c6603542452bb996c01fd15655327f27e&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301838801.jpg?k=dd42f33973d84295892dc5457ea1be84d8f80a43cbca056783884d4fca6023ca&o=&hp=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/66167854.jpg?k=99fd2186b91ba80eeb1ec06d18c8622638cf8c8607b068609bfc9b173d898e5e&o=&hp=1',
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => {
                setOpen(false);
              }}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => {
                handleMove("l");
              }}
            />
            <div className="sliderWrapper">
              <img src={Photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => {
                handleMove("r");
              }}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 120 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500 meter from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $140 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {Photos.map((Photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={Photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Set in a historic building, the Vincci Centrum is a boutique
                hotel located 300 m from Gran Via and a 10-minute walk from the
                famous Puerta del Sol. Rooms have a flat-screen TV and free
                WiFi. The Vincci maintains its original façade and features a
                welcoming and sophisticated décor. Its stylish and comfortable
                bedrooms have air conditioning, a mini-bar and a private
                bathroom with a hairdryer. triangle of Madrid, consisted of by
                the Prado, Thyssen, and Reina Sofia Museums. The hotel is less
                than 0.6 mi from Retiro Park and Madrid’s Atocha Train Station
                is a 20-minute walk from the hotel. Barajas Airport is around
                7.5 mi away. Private parking is available for an additional cost
                at a location nearby. Shops, bars and restaurants can be found
                in the surrounding Chueca and Gran Vía districts. The
                Thyssen-Bornemisza, Prado and Reina Sofía museums are within 20
                minutes' walk of the hotel. This is our guests' favorite part of
                Madrid, according to independent reviews. Couples in particular
                like the location – they rated it 9.5 for a two-person trip.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Located in the heart of Madrid, this hotel has an excellent
                location score of 9 Want a great night's sleep? This hotel was
                highly-rated for its very comfy beds.
              </span>
              <h2>
                <b>$945</b>(1 night)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
