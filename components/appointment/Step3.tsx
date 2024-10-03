"use client"

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData } from '@/lib/zodSchema/FormSchemas'; // Import the form data type


const Step3 = () => {
  const { register, formState: { errors } } = useFormContext<FormData>(); // Use form methods

  return (
    <div>
       <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
       <h2 className="text-base md:text-xl text-black font-semibold text-center mb-4">Assessment 2</h2>
       <>
        <div className="mb-4">
          <label htmlFor="clientDateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            id="clientDateOfBirth"
            {...register('step3.clientDateOfBirth')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.step3?.clientDateOfBirth && <p className="text-red-600 text-sm">{errors.step3.clientDateOfBirth.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="clientAddress" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="clientAddress"
            {...register('step3.clientAddress')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Family Medical History */}
        <fieldset className="mb-4 border border-gray-300 rounded-md p-4">
          <legend className="text-lg font-semibold text-gray-700">Family Medical History</legend>
          
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="hasDiabetes"
              {...register('step3.familyMedicalHistory.hasDiabetes')}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="hasDiabetes" className="ml-2 text-sm text-gray-700">Diabetes</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="hasHeartDisease"
              {...register('step3.familyMedicalHistory.hasHeartDisease')}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="hasHeartDisease" className="ml-2 text-sm text-gray-700">Heart Disease</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="hasCancer"
              {...register('step3.familyMedicalHistory.hasCancer')}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="hasCancer" className="ml-2 text-sm text-gray-700">Cancer</label>
          </div>

          <div className="mb-4">
            <label htmlFor="familyMemberDetails" className="block text-sm font-medium text-gray-700">Family Member Details</label>
            <textarea
              id="familyMemberDetails"
              {...register('step3.familyMedicalHistory.familyMemberDetails')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={3}
            />
          </div>
        </fieldset>

        {/* Recent Health Checks */}
        <fieldset className="mb-4 border border-gray-300 rounded-md p-4">
          <legend className="text-lg font-semibold text-gray-700">Recent Health Checks</legend>

          <div className="mb-4">
            <label htmlFor="lastPhysicalExamDate" className="block text-sm font-medium text-gray-700">Last Physical Exam Date</label>
            <input
              type="date"
              id="lastPhysicalExamDate"
              {...register('step3.recentHealthChecks.lastPhysicalExamDate')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="cholesterolLevels" className="block text-sm font-medium text-gray-700">Cholesterol Levels</label>
            <input
              type="text"
              id="cholesterolLevels"
              {...register('step3.recentHealthChecks.cholesterolLevels')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-700">Blood Pressure</label>
            <input
              type="text"
              id="bloodPressure"
              {...register('step3.recentHealthChecks.bloodPressure')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </fieldset>

        {/* Mental Health */}
        <fieldset className="mb-4 border border-gray-300 rounded-md p-4">
          <legend className="text-lg font-semibold text-gray-700">Mental Health</legend>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="anxiety"
              {...register('step3.mentalHealth.anxiety')}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="anxiety" className="ml-2 text-sm text-gray-700">Anxiety</label>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="depression"
              {...register('step3.mentalHealth.depression')}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label htmlFor="depression" className="ml-2 text-sm text-gray-700">Depression</label>
          </div>

          <div className="mb-4">
            <label htmlFor="recentStressors" className="block text-sm font-medium text-gray-700">Recent Stressors</label>
            <textarea
              id="recentStressors"
              {...register('step3.mentalHealth.recentStressors')}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={3}
            />
          </div>
        </fieldset>

        {/* Goals */}
        <div className="mb-4">
          <label htmlFor="goals" className="block text-sm font-medium text-gray-700">Health Goals</label>
          <textarea
            id="goals"
            {...register('step3.goals')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={3}
          />
        </div>

        {/* Concerns */}
        <div className="mb-4">
          <label htmlFor="concerns" className="block text-sm font-medium text-gray-700">Concerns</label>
          <textarea
            id="concerns"
            {...register('step3.concerns')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows={3}
          />
        </div>

    
      </>
    </div>
    </div>
  );
};

export default Step3;
