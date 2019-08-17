import React from "react";
import { withRouter } from 'react-router-dom';

class HotelList extends React.Component {
  handleClick = (id) => {
    const redirectUrl = `/details-page/${id}/`;
    this.props.history.push(redirectUrl);
  }

  render() {
    const {
      hotelList
    } = this.props;

    return (
      <div className={'hotel-list-block'}>
        <div className={'hotel-list'}>
          {
            hotelList.map((item, i) => {
              return (
                <div key={i} className={'hotel-card'} id={item.id}>
                  <div className="row">
                    <div className="trv-col-xs-12 trv-col-md-6 trv-col-lg-3">
                      <div className={'image-block'}>
                        <img src={item.images[0]} alt={'name'} />
                      </div>
                    </div>
                    <div className="trv-col-xs-12 trv-col-md-6 trv-col-lg-6">
                      <div className={'hotel-detail-block'}>
                        <h3>{item.name}</h3>
                        <p className={'distance-to-venue'}><span className={'fa fa-map-marker'}></span>{`${item.rating.toFixed(1)} km to venue`}</p>
                        <p className={'price'}>{`Price Range: ${item.price_category}`}</p>
                      </div>
                    </div>
                    <div className="trv-col-xs-12 trv-col-md-6 trv-col-lg-3">
                      <div className={'hotel-booking-block'}>
                        <p className={'rating'}>{`${item.rating.toFixed(1)}${'/5'}`}</p>
                        <div className={'booking-btn'}>
                          <button className={'view-details'} onClick={this.handleClick.bind(this, item.id)}>View Details</button>
                          <button className={'book-now'}>Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default (withRouter(HotelList));
