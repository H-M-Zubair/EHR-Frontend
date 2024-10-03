import  DatePickerForm  from '@/components/ScheduledMeetings/DatePicker'
import SchedulingMeeting from '@/components/ScheduledMeetings/SchedulingMeeting'
import React from 'react'

const Page = () => {
  return (
    <div>
        <h1 className="text-lg font-semibold md:text-2xl">Scheduled Meetings</h1>
       <SchedulingMeeting/>
    </div>
  )
}

export default Page