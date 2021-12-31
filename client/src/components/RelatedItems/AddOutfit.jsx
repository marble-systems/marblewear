import React from 'react';
import addIcone from './images/addIcone.png';

function AddOutfit(props) {
  return (
    <div className="card border-dark" style={{width: '20em', margin: '1em'}}>
      <img className="card-img-top" src={addIcone} style={{width: 'auto', height: '20vw', objectFit: 'cover'}} alt="Product image"></img>
      <div className="card-body">
        <h5 className="card-title">Add to Outfit</h5>
      </div>
    </div>
  );
}

export default AddOutfit;