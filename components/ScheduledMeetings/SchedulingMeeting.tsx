"use client";
import React from "react";
import DatePickerForm from "./DatePicker";
import MeetingCard from "./MeetingCard";
import { useQuery } from "@tanstack/react-query";
import { getAssessmentForms } from "@/lib/Fetcher/FetchUserForms";

const SchedulingMeeting = () => {
  const { isLoading, data, error, isFetching } = useQuery({
    queryKey: ["schedules"],
    queryFn: getAssessmentForms,
  });
  const forms = data?.forms ?? [];
  console.log(forms);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      <div className="md:flex justify-between min-h-[40vh]">
        <div className="md:w-1/2 border-r-2 p-4">
          <DatePickerForm />
        </div>
        <div className="md:w-1/2 flex items-center justify-center p-4">
          <h4 className="text-center">Date is not selected...</h4>
        </div>
      </div>
      <hr />
      <div>
        <h2 className="text-2xl font-semibold my-4">Upcoming Meetings</h2>
        {forms.length === 0 ? (
          <p className="mt-4">There are no scheduled meetings right now...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {forms.map((form: any, index: number) => (
              <div key={index}>
                <MeetingCard
                  name={form.step1.name}
                  meetingTime={form.step1.time}
                  meetingDate={form.step1.date}
                  phone={form.step1.phone}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <h2 className="text-2xl font-semibold my-4">Past Meetings</h2>
      </div>
    </div>
  );
};

export default SchedulingMeeting;
