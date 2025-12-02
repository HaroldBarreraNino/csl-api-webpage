import React from 'react';
import "./ToolTipGif.css";

const ToolTipGif = ({ gifUrl, position }) => {

  if(!gifUrl) return null;

  return  (
    <div className='tooltip-gif' style={{ top: position.top, left: position.left}}>
      <img src={gifUrl} alt='GIF Translation' />
    </div>
  );
}

export default ToolTipGif;
