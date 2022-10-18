import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import './style.css';

const Loading = () => {
  return (
    <div className='container__loading'>
      <BeatLoader />
    </div>
  )
}

export default Loading
