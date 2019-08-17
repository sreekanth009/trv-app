import React from "react";

const url = 'http://localhost:3000/hotels';

class DetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      hotelDetails: [],
    }
  }

  componentDidMount() {
    const hotelUrl = window.location.href;
    const uniqueId = hotelUrl.split('/')[4];

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const hotelDetails = json.filter((item) => {
          return item.id === uniqueId;
        })[0];
        this.setState({
          hotelDetails
        })
        return hotelDetails;
      });
  }

  render() {
    const {
      hotelDetails
    } = this.state;

    const roomTypes = hotelDetails.room_type;

    const list = roomTypes && roomTypes.map((item) => {
      return (
        <li key={item.id}>
          <img src={item.img} alt={item.name} className={'trv-col-lg-2'} />
          <p className={'trv-col-lg-2 hotel-type-name'}>{item.name}</p>
          <p className={'trv-col-lg-3 hotel-type-name'}>{item.description}</p>
          <p className={'trv-col-lg-1 hotel-price'}><span>{`$ ${item.price_in_usd}`}</span></p>
        </li>
      )
    });

    return (
      <div className={'details-page'}>
        <div className={'container'}>
          <div className="row">
            <div className="trv-col-xs-12 trv-col-sm-8 trv-col-md-3 trv-col-lg-7 hotel-gallery">
              <img src={hotelDetails.images} alt={hotelDetails.id} />
              <h3 title={hotelDetails.name} className={'hotel-name'}>{hotelDetails.name}</h3>
              <p className={'hotel-desc'}>{hotelDetails.description}</p>
            </div>
          </div>
          <div className="row">
            <div className="trv-col-xs-12 trv-col-sm-10 trv-col-md-9 trv-col-lg-9 room-types">
              <h3>Types of rooms:</h3>
              <ul>
                {list}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsPage;
