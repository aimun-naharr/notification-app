import { useState } from "react";

import "./App.css";
import useNotification from "./Hooks/Notification";


function App() {
 const [notifications, loading]=useNotification()
console.log(notifications)
  return (
    <div className="App">
      <h1>hello from noti</h1>
    </div>
  );
}

export default App;
