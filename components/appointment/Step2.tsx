"use client";

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData } from '@/lib/zodSchema/FormSchemas'; // Import the form data type

const Step2 = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();

  return (
    <div className="h-screen p-4">
    <h2 className="text-base md:text-xl text-black font-semibold text-center mb-4">Assessment 1</h2>
  
    <div className="mb-6">
      <h3 className="text-base md:text-md text-black font-semibold mb-2">Trauma History & Daily Routine</h3>
  
      <div className="mb-4">
        <label htmlFor="traumaHistory" className="block text-sm md:text-base font-medium text-gray-700">Any history of trauma?</label>
        <textarea
          id="traumaHistory"
          {...register('step2.traumaHistory')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
          rows={2}
        />
        {errors.step2?.traumaHistory && <p className="text-red-500 text-sm">{errors.step2.traumaHistory.message}</p>}
      </div>
  
      <div className="mb-4">
        <label htmlFor="dailyRoutine" className="block text-sm md:text-base font-medium text-gray-700">Daily Routine (What do you eat daily?)</label>
        <textarea
          id="dailyRoutine"
          {...register('step2.dailyRoutine')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
          rows={2}
        />
        {errors.step2?.dailyRoutine && <p className="text-red-500 text-sm">{errors.step2.dailyRoutine.message}</p>}
      </div>
  
      <div className="mb-4">
        <label htmlFor="reasonForVisit" className="block text-sm md:text-base font-medium text-gray-700">Reason for Visit</label>
        <textarea
          id="reasonForVisit"
          {...register('step2.reasonForVisit')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
          rows={2}
        />
        {errors.step2?.reasonForVisit && <p className="text-red-500 text-sm">{errors.step2.reasonForVisit.message}</p>}
      </div>
    </div>
  
    <div className="mb-6">
      <h3 className="text-base md:text-md text-black font-semibold mb-2">Medical History & Additional Information</h3>
  
      <div className="mb-4">
        <label htmlFor="surgicalHistory" className="block text-sm md:text-base font-medium text-gray-700">Surgical History</label>
        <textarea
          id="surgicalHistory"
          {...register('step2.surgicalHistory')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
          rows={2}
        />
        {errors.step2?.surgicalHistory && <p className="text-red-500 text-sm">{errors.step2.surgicalHistory.message}</p>}
      </div>
  
      <div className="mb-4">
        <label htmlFor="familyMedicalHistory" className="block text-sm md:text-base font-medium text-gray-700">Family Medical History</label>
        <textarea
          id="familyMedicalHistory"
          {...register('step2.familyMedicalHistory')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
          rows={2}
        />
        {errors.step2?.familyMedicalHistory && <p className="text-red-500 text-sm">{errors.step2.familyMedicalHistory.message}</p>}
      </div>
  
      <div className="mb-4">
        <label htmlFor="currentPainLevel" className="block text-sm md:text-base font-medium text-gray-700">Current Pain Level (1-10)</label>
        <input
          type="number"
          id="currentPainLevel"
          {...register('step2.currentPainLevel', { valueAsNumber: true })}
          min="1"
          max="10"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
        />
        {errors.step2?.currentPainLevel && <p className="text-red-500 text-sm">{errors.step2.currentPainLevel.message}</p>}
      </div>
  
      <div className="mb-4">
        <label htmlFor="sleepPatterns" className="block text-sm md:text-base font-medium text-gray-700">Sleep Patterns (hours per night, quality)</label>
        <textarea
          id="sleepPatterns"
          {...register('step2.sleepPatterns')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
          rows={2}
        />
        {errors.step2?.sleepPatterns && <p className="text-red-500 text-sm">{errors.step2.sleepPatterns.message}</p>}
      </div>
  
      <div className="mb-4">
        <label htmlFor="stressLevels" className="block text-sm md:text-base font-medium text-gray-700">Stress Levels (1-10)</label>
        <input
          type="number"
          id="stressLevels"
          {...register('step2.stressLevels', { valueAsNumber: true })}
          min="1"
          max="10"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
        />
        {errors.step2?.stressLevels && <p className="text-red-500 text-sm">{errors.step2.stressLevels.message}</p>}
      </div>
    </div>
  </div>
  
  
  
  
  );
};

export default Step2;
