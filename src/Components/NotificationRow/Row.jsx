import React from 'react';
import './row.css'

const Row = ({data}) => {
    const {name, notific, img, postName, note, gamePost, read, time}=data
    return (
        <div className={read? 'seen' : 'row'}>
         
            <img src={img} alt="" />
            <div className='notify-body'>
                <p><span className="name">{name}</span> <span className="notific">{notific? notific: ''}</span> <span className="post">{postName? postName: ''}</span> <span className="game">{gamePost? gamePost:''}</span> {read? <div className='red-dot'></div>: ''}</p>
                <span className='time'>{time}</span>
                {
                    note? <p className='note'>{note}</p>:''
                }
            </div>
         
        </div>
    );
};

export default Row;