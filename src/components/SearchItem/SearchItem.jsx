import './searchItem.css';

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/118509791.webp?k=50fd677f143f5d4e3ef3077e9a8acceb2fb333ba18239869984756ac8c6892f1&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Appartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free ariport taxi</span>
        <span className="siSubtitle">
          Studio appartment with air conditioning
        </span>
        <span className="siFeature">
          Entire Studio + 1 bathroom + 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCancelOpSubtitle">
          You cancel later, so lock in this great price today
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>4.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Include Taxes and fees</span>
          <div>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
