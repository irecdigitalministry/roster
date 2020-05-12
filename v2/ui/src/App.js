import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import './App.css';

import './main.scss' // webpack must be configured to do this


function handleDateClick(arg) { // bind with an arrow function
  alert(arg.dateStr)
}

function App() {


return (
    <div className="App">
        <FullCalendar dateClick = {handleDateClick} plugins = {[dayGridPlugin, interactionPlugin]}/>
    </div>
  );
}

export default App;
