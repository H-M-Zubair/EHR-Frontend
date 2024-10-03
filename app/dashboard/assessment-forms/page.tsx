"use client";
import { getAssessmentForms } from '@/lib/Fetcher/FetchUserForms'; // Fetching function
import { FormData } from '@/lib/zodSchema/FormSchemas'; // Assuming this matches your form data shape
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Page: React.FC = () => {
  // Using React Query to fetch the forms directly without state management
  const { data, error, isLoading, isFetching } = useQuery<any, Error>({
    queryKey: ['assessmentForms'],
    queryFn: getAssessmentForms,
  });

  // Handling loading state
  if (isLoading) {
    return <div>Loading assessment forms...</div>;
  }

  // Handling error state
  if (error) {
    return <div>Error fetching assessment forms: {error.message}</div>;
  }

  const forms = data?.forms ?? [];

  return (
    <div>
      <div>
        <h1 className="text-lg font-semibold md:text-2xl">Assessment Forms</h1>
      </div>

      {/* Show a message if no forms are available */}
      {forms.length === 0 ? (
        <div>There are no assessment forms right now...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {/* Show the list of assessment forms */}
          {forms.map((form: FormData, index: number) => (
            <div key={index} className="border rounded-lg p-4 shadow-md flex ">
              <div className=''>
              <h2 className="text-lg"><span className='font-semibold' >Name:</span><span>{form.step1.name}</span></h2>
              <h3 className="text-gray-500"><span className='font-semibold' >Country:</span>{form.step1.country}</h3>
              <h3 className="text-gray-500"><span className='font-semibold' >Scheduling Date:</span>{form.step1.date}</h3>
              <h3 className="text-gray-500"><span className='font-semibold' >Time:</span>{form.step1.time}</h3>

              </div>
            </div>
          ))}
        </div>
      )}

      {isFetching && <div>Refreshing data...</div>}
    </div>
  );
};

export default Page;
