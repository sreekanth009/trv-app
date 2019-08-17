import React, { useState, useEffect } from "react";
import FilterSideBar from "../atoms/filter";
import HotelList from "../atoms/hotelList";

const url = 'http://localhost:3000/hotels';

const LandingPage = () => {
  const [hotelList, setHotelList] = useState([]);
  useEffect(() => {   
    fetch(url)
      .then((res) => res.json())
      .then((json) => setHotelList(json))
  },[]);

  return (
    <div className={'landing-page'}>
      <div className={'container'}>
        <div className="row">
          <div className="trv-col-xs-12 trv-col-sm-8 trv-col-md-3 trv-col-lg-3">
            <h2 className={'filter-heading'}>Filters</h2>
            <FilterSideBar />
          </div>
          <div className="trv-col-xs-12 trv-col-sm-8 trv-col-md-9 trv-col-lg-9">
            <div className="box">Hotels Near the venue</div>
            <HotelList hotelList={hotelList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;
