"use client"
import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData } from '@/lib/zodSchema/FormSchemas'; // Import the form data type
import CountryList from "country-list-with-dial-code-and-flag";
const Step1: React.FC = () => {
  const { register, setValue, formState: { errors } } = useFormContext<FormData>(); // Use form methods with type

  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  // Generate hourly options
  const generateHourlyOptions = (): string[] => {
    const options: string[] = [];
    for (let i = 0; i < 24; i++) {
      const hour = i.toString().padStart(2, '0');
      options.push(`${hour}:00`);
    }
    return options;
  };

  // Handle time selection
  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const time = event.target.value;
    setSelectedTime(time);
    calculateEndTime(time, selectedDuration);
    setValue('step1.time', time); // Update form state
  };

  // Handle duration selection
  const handleDurationChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const duration = event.target.value;
    setSelectedDuration(duration);
    calculateEndTime(selectedTime, duration);
    setValue('step1.duration', duration); // Update form state
  };

  // Calculate end time based on selected time and duration
  const calculateEndTime = (startTime: string, duration: string): void => {
    if (startTime && duration) {
      const [hours, minutes] = startTime.split(':').map(Number);
      const durationMinutes = parseInt(duration, 10);
      const endMinutes = minutes + durationMinutes;
      const endHours = hours + Math.floor(endMinutes / 60);
      const finalMinutes = endMinutes % 60;
      setEndTime(`${endHours.toString().padStart(2, '0')}:${finalMinutes.toString().padStart(2, '0')}`);
    } else {
      setEndTime('');
    }
  };

  useEffect(() => {
    calculateEndTime(selectedTime, selectedDuration);
  }, [selectedTime, selectedDuration]);

  return (
    <div className="p-4 max-w-2xl mx-auto"> {/* Container with padding and max-width */}
    <h2 className="text-2xl md:text-xl font-semibold mb-4">Personal Details</h2>
  
    <div className="relative mb-6">
      <label htmlFor="name" className="text-gray-500 text-sm md:text-base">
        Name: <span className="text-red-600">*</span>
      </label>
      <input
        type="text"
        {...register('step1.name')}
        id="name"
        className="block w-full px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 bg-gray-100 rounded-md focus:ring-blue-500 focus:outline-none"
        placeholder=" "
      />
      {errors.step1?.name && <p className="text-red-600 text-sm">{errors.step1.name?.message}</p>}
    </div>
  
    <div className="grid gap-4 md:gap-6 md:grid-cols-2"> {/* Use grid layout for larger screens */}
      <div className="relative mb-6">
        <label htmlFor="country" className="text-gray-500 text-sm md:text-base">
          Country: <span className="text-red-600">*</span>
        </label>
        <select
          {...register('step1.country')}
          id="country"
          className="block w-full px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 bg-gray-100 rounded-md focus:ring-blue-500 focus:outline-none"
        >
          <option value="" disabled>Select a country</option>
          {CountryList.getAll().map((country, index) => (
            <option key={`${country.code}-${index}`} value={country.code}>
              {country.flag} {country.name} ({country.dialCode})
            </option>
          ))}
        </select>
        {errors.step1?.country && <p className="text-red-600 text-sm">{errors.step1.country.message}</p>}
      </div>
  
      <div className="relative mb-6">
        <label htmlFor="phone" className="text-gray-500 text-sm md:text-base">
          Phone number: <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          {...register('step1.phone')}
          id="phone"
          className="block w-full px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 bg-gray-100 rounded-md focus:ring-blue-500 focus:outline-none"
          placeholder=" "
        />
        {errors.step1?.phone && <p className="text-red-600 text-sm">{errors.step1.phone.message}</p>}
      </div>
    </div>
  
    <div className="grid gap-4 md:gap-6 md:grid-cols-2"> {/* Second grid for other fields */}
      <div className="relative mb-6">
        <label htmlFor="date" className="text-gray-500 text-sm md:text-base">
          Date: <span className="text-red-600">*</span>
        </label>
        <input
          type="date"
          {...register('step1.date')}
          id="date"
          className="block w-full px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 bg-gray-100 rounded-md focus:ring-blue-500 focus:outline-none"
        />
        {errors.step1?.date && <p className="text-red-600 text-sm">{errors.step1.date.message}</p>}
      </div>
  
      <div className="relative mb-6">
        <label htmlFor="time" className="text-gray-500 text-sm md:text-base">
          Time: <span className="text-red-600">*</span>
        </label>
        <select
          {...register('step1.time')}
          id="time"
          className="block w-full px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 bg-gray-100 rounded-md focus:ring-blue-500 focus:outline-none"
          onChange={handleTimeChange}
        >
          <option value="" disabled>Select an hour</option>
          {generateHourlyOptions().map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        {errors.step1?.time && <p className="text-red-600 text-sm">{errors.step1.time.message}</p>}
      </div>
  
      <div className="relative mb-6">
        <label htmlFor="duration" className="text-gray-500 text-sm md:text-base">
          Duration: <span className="text-red-600">*</span>
        </label>
        <select
          {...register('step1.duration')}
          id="duration"
          className="block w-full px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 bg-gray-100 rounded-md focus:ring-blue-500 focus:outline-none"
          onChange={handleDurationChange}
        >
          <option value="" disabled>Select duration</option>
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="45">45 minutes</option>
          <option value="60">60 minutes</option>
        </select>
        {errors.step1?.duration && <p className="text-red-600 text-sm">{errors.step1.duration.message}</p>}
      </div>
    </div>
  
    {selectedTime && selectedDuration && (
      <div className="relative mb-6">
        <label htmlFor="endTime" className="text-gray-500 text-sm md:text-base">
          End Time:
        </label>
        <input
          type="text"
          id="endTime"
          value={`${selectedTime} - ${endTime}`}
          readOnly
          className="block w-full px-4 py-2 md:py-3 text-sm md:text-base text-gray-900 bg-gray-100 rounded-md focus:ring-blue-500 focus:outline-none"
        />
      </div>
    )}
  </div>
  
  
  
  );
};

export default Step1;
