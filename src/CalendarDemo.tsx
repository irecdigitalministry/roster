import React from 'react';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';

import './CalendarDemo.scss';

export default function CalendarDemo(): React.ReactElement {
  const calendarHeaders = {
    center: 'title',
    left: 'prev,next today',
    right: 'resourceTimelineMonth,dayGridMonth,timeGridWeek,timeGridDay,listWeek',
  };

  const resources = [
    { id: 'preacher_10', service: '10:00AM', title: 'Preacher', eventColor: 'red' },
    { id: 'audio_10', service: '10:00AM', title: 'Audio', eventColor: 'blue' },
    { id: 'liturgist_10', service: '10:00AM', title: 'Liturgist', eventColor: 'green' },
    { id: 'singer_10', service: '10:00AM', title: 'Singer', eventColor: 'green' },
    { id: 'pianist_10', service: '10:00AM', title: 'Pianist', eventColor: 'orange' },
    { id: 'organist_10', service: '10:00AM', title: 'Organist', eventColor: 'orange' },
    { id: 'usher_10', service: '10:00AM', title: 'Usher', eventColor: 'blue' },
    { id: 'collector_10', service: '10:00AM', title: 'Collector', eventColor: 'red' },

    { id: 'preacher_16', service: '16:00PM', title: 'Preacher', eventColor: 'red' },
    { id: 'audio_16', service: '16:00PM', title: 'Audio', eventColor: 'blue' },
    { id: 'liturgist_16', service: '16:00PM', title: 'Liturgist', eventColor: 'green' },
    { id: 'singer_16', service: '16:00PM', title: 'Singer', eventColor: 'green' },
    { id: 'pianist_16', service: '16:00PM', title: 'Pianist', eventColor: 'orange' },
    { id: 'organist_16', service: '16:00PM', title: 'Organist', eventColor: 'orange' },
    { id: 'usher_16', service: '16:00PM', title: 'Usher', eventColor: 'blue' },
    { id: 'collector_16', service: '16:00PM', title: 'Collector', eventColor: 'red' },
  ];

  const events = [
    { id: '1', resourceId: 'preacher_10', start: '2019-09-08T10:00:00', title: 'Budi' },
    { id: '2', resourceId: 'audio_10', start: '2019-09-08T10:00:00', title: 'Nico' },
    { id: '3', resourceId: 'liturgist_10', start: '2019-09-08T10:00:00', title: 'Judah' },
    { id: '4', resourceId: 'singer_10', start: '2019-09-08T10:00:00', title: 'Rick' },
  ];

  const customViews = {
    resourceTimelineMonth: {
      buttonText: 'service',
      displayEventTime: false,
      type: 'resourceTimelineMonth',
    },
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        defaultView="dayGridMonth"
        header={calendarHeaders}
        plugins={[ interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin, resourceTimelinePlugin ]}
        resources={resources}
        events={events}
        schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
        resourceLabelText="Service"
        resourceGroupField="service"
        views={customViews}
        height="parent"
      />
    </div>
  );
}
