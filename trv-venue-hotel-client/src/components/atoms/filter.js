import React from "react";

const FilterSideBar = () => {
  return (
    <div className={'filter-block'}>
      <div className={'filter-column star-rating'}>
        <p>Hotel Start Rating</p>
        <ul>
          <li>
            <input type={'checkBox'} />
            <label>5 Star</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>4 Star</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>3 Star</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>2 Star</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>1 Star</label>
          </li>
        </ul>
      </div>
      <div className={'filter-column price-filter'}>
        <p>Price Per Nigth</p>
        <ul>
          <li>
            <input type={'checkBox'} />
            <label>Low</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>Medium</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>High</label>
          </li>
        </ul>
      </div>
      <div className={'filter-column distance-filter'}>
        <p>Distance To Venue</p>
        <ul>
          <li>
            <input type={'checkBox'} />
            <label>Nearby venue</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>3 km</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>5 km</label>
          </li>
        </ul>
      </div>
      <div className={'filter-column amenities-filter'}>
        <p>Amenities</p>
        <ul>
          <li>
            <input type={'checkBox'} />
            <label>Free parking</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>Free wifi</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>restaurant</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>Gym</label>
          </li>
          <li>
            <input type={'checkBox'} />
            <label>Spa</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterSideBar;
