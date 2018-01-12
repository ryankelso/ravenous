import React from 'react';
import './BusinessList.css';
import Business from './../Business/Business.js';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          // outside of the scope of the lesson, I added the index argument and
          // key={index} to eliminate a console warning https://reactjs.org/docs/lists-and-keys.html#keys
          this.props.businesses.map((business) => <Business key={business.id} business={business}/>)
        }
      </div>
    );
  }
}

export default BusinessList;
