import React from 'react';
import useNotification from '../../Hooks/Notification';
import Row from '../NotificationRow/Row';
import './Container.css'
const Container = () => {
    const [notifications , setNotifications, loading]=useNotification()
   const read=notifications.filter(data=>data.read===true )
   
   const handleButton=()=>{
 const updated=notifications.map(data=>{
    if(data.read){
        data.read=!data.read
    }
    return data
 })
 console.log(updated.length)
 setNotifications(updated)
   }
    return (
        <div className='container'>
            <header>
                <h3>Notifications <span>{read.length}</span></h3>
                <p onClick={handleButton}>Mark all as read</p>
            </header>
           <div className="nContainer">
           {
                notifications.map(data=>(<Row key={data.id} data={data} ></Row>))
                
            }
           </div>
        </div>
    );
};

export default Container;