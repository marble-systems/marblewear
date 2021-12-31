import React from 'react';
import PropTypes from 'prop-types';

const characteristicScale = {
  Size: { min: 'Too small', mid: 'Perfect', max: 'Too large' },
  Width: { min: 'Too narrow', mid: 'Perfect', max: 'Too wide' },
  Comfort: { min: 'Uncomfortable', mid: 'Ok', max: 'Perfect' },
  Quality: { min: 'Poor', mid: 'What I expected', max: 'Perfect' },
  Length: { min: 'Too short', mid: 'Perfect', max: 'Too long' },
  Fit: { min: 'Too tight', mid: 'Perfect', max: 'Too long' }
};

const CharacteristicBar = ({ characteristic, value }) => {
  const percentage = Number(value) / 5 * 100;
  return (
    <div>
      <div>
        {characteristic}
      </div>
      <div style={{
        display: 'flex',
        height: '0.5em',
        width: '100%',
      }}>
        {Array(3).fill(0).map((el, idx) => {
          return (
            <div
              key={`bar-segment-${idx}`}
              style={{
                height: '90%',
                width: '30%',
                backgroundColor: 'gray',
                margin: 1
              }}
            />
          );
        })}
        <div style={{ display: 'flex', position: 'absolute', left: percentage, width: '10px' }}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M 12 20 L 2 4 L 22 4 L 12 20 Z" fill="black" />
          </svg>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.5em' }}>
        <div style={{ width: '45px' }}>{characteristicScale[characteristic]['min']}</div>
        <div style={{ width: '45px' }}>{characteristicScale[characteristic]['max']}</div>
      </div>

    </div>
  );
};

CharacteristicBar.propTypes = {
  characteristic: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default CharacteristicBar;
