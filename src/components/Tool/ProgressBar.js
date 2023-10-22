import React from 'react';

export default function ProgressBar(props) {
  return (
    <div
      className="completeBar"
      style={{
        width: '23vw',
        height: '5vh',
        color: 'white',
        background: '#E9F8F9',
        borderRadius: '0 2vmin 2vmin 0 /0 5vmin 5vmin 0',
        borderLeft: '5px solid #181823',
        boxShadow: '1px 1px 5vmin #aaa',
      }}
    >
      <div
        className="progressBar"
        style={{
          width: 'calc( 2vw + ' + props.percent / (100 / 23) + 'vw)',
          height: '5vh',
          color: 'white',
          background: '#537fe7',
          borderRadius: '0 2vmin 2vmin 0 /0 5vmin 5vmin 0',
          paddingLeft: '1vmin',
        }}
      >
        {props.percent}%
      </div>
    </div>
  );
}
