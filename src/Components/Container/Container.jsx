import React from 'react';
import useNotification from '../../Hooks/Notification';
import Row from '../NotificationRow/Row';
import './Container.css'
const Container = () => {
    const [notifications, loading]=useNotification()
    console.log(notifications)
    return (
        <div className='container'>
            <header>
                <h3>Notifications <span>3</span></h3>
                <p>Mark all as read</p>
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