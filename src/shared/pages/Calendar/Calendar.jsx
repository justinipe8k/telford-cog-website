import React from 'react';
import './Calendar.css';
import Page from "../../components/Page/Page";
import PageBanner from "../../components/Page/Components/PageBanner/PageBanner";
import PageTitle from "../../components/Page/Components/PageTitle/PageTitle";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list';


const Calendar = () =>
{
    return(<div>
    <Page name="calendar">
      <PageBanner>
        <PageTitle title="Calendar" />
      </PageBanner>
      <FullCalendar
        plugins={[ dayGridPlugin ,listPlugin]}
        initialView="dayGridMonth"
      />
    </Page>
    </div>)
}

export default Calendar;