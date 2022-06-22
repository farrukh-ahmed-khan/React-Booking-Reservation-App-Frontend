import { useState } from 'react';
import { faCalendarDays, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


const Header = ({ type }) => {
  const[destination, setDestination] = useState("");
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();

  const handleOption = (name, opration) => {
    setOptions({
      ...options,
      [name]: opration === 'i' ? options[name] + 1 : options[name] - 1,
    });
  };
  const handleSearch = () => {
    navigate("/hotels", {state: {destination, date, options}});
  }

  return (
    <div className="header">
      <div className={type === "list"? "headerContainer listMode" : "headerCntainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        {type !== 'list' && (
          <>
            <h1 className="headerTitle">
              A Life time of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get Rewarded for our Travels - Unlock Instant savings of 10% on
              Hotels, Flights, Car Rentals, Attractions, Airport Taxis with
              booking
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, 'MM/dd/yyyy')}`} to{' '}
                  {`${format(date[0].endDate, 'MM/dd/yyyy')}`}{' '}
                </span>
                {open && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faUser} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => {
                    setOpenOptions(!openOptions);
                  }}
                >{`${options.adult} adults . ${options.children} childrens. ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult === 1}
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption('adult', 'd');
                          }}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption('adult', 'i');
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children === 0}
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption('children', 'd');
                          }}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption('children', 'i');
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room === 1}
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption('room', 'd');
                          }}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => {
                            handleOption('room', 'i');
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
