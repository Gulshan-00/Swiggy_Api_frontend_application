import React from 'react';
import { MIND_URL } from '../utils/constants';

const ResMindCard = (props) => {

     const {resMindData}=props;

  return (
    <div className='res-mind'>
        <img className='mind-img' src={MIND_URL + resMindData.imageId} alt="" />
       
    </div>
  )
}

export default ResMindCard;