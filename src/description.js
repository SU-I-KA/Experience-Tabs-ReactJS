import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa';

const description = ({duties})=>{
    return(
        <div className='desc'>
            {
                duties.map((duty, index)=>{
                    return(
                        <div key={index} className='duty'>
                            <FaAngleDoubleRight className='quote'/>
                            <p>{duty}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default description;