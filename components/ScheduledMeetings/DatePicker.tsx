"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';

const dateSchema = z.object({
  date: z
    .string()
    .refine(
      (val) => !isNaN(Date.parse(val)), 
      { message: "Invalid date format" }
    )
    // .refine(
    //   (val) => new Date(val) >= new Date(), 
    //   { message: "Date must be today or in the future" }
    // ),
});

// Define the TypeScript type for form data
type FormData = z.infer<typeof dateSchema>;

const DatePickerForm = () => {

    const[date, setDate] = React.useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(dateSchema), 
  });

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log('Selected Date:', data)

    setDate(data.date);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="relative mb-6">
            <label htmlFor="date" className="text-gray-500 text-sm md:text-base">
              Date: <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="date"
              {...register('date')} 
              className={`block w-[300px] px-4 hover:cursor-pointer py-2 md:py-3 text-sm md:text-base text-gray-900 bg-gray-100 rounded-md focus:ring-blue-500 focus:outline-none ${
                errors.date ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">
                {errors.date.message}
              </p>
            )}
          </div>

          <Button type="submit">Find Meeting</Button>
        </div>
      </form>
      <div>  {date}</div>
    </div>
  );
};

export default DatePickerForm;
