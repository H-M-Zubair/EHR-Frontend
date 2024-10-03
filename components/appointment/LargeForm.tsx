"use client";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormData, mapFormData, schema } from "@/lib/zodSchema/FormSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { toast } from "react-hot-toast";
import { getFormById, updateFormData } from "@/lib/Fetcher/FetchUserForms"; // Adjust import if necessary
import { Button } from "../ui/button";

// Interface for props
interface LargeFormProps {
  formId: string;
}

const LargeForm = ({ formId }: LargeFormProps) => {
  // Initialize useForm with Zod schema
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur", // Validate onBlur
  });

  const { reset, handleSubmit, trigger } = methods;
  const [step, setStep] = useState(1);

  // Fetch form data on component mount
  useEffect(() => {
    const fetchFormData = async (formId: string) => {
      try {
        // Fetch form data from the API
        const  patientForms  = await getFormById(formId); // Destructure correctly to get 'patientForm'
        
        console.log("Fetched patientForm:", patientForms);
        
        if (patientForms) {
          const formData = mapFormData(patientForms.patientForm); // Pass 'patientForm' into 'mapFormData'
          reset(formData); // Pre-populate the form fields with the mapped data
        } else {
          toast.error("No form data available.");
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
        toast.error("Error fetching form data.");
      }
    };

    // Ensure formId exists before fetching
    if (formId) {
      fetchFormData(formId);
    }
  }, [reset, formId]); // Reset and refetch form data if formId changes

  // Form submission handler
  const onSubmit = async (data: FormData) => {
    console.log("Submitted Data:", data);
    try {
      const response =await updateFormData(data,formId);
     if (response && response.success === true) {
       toast.success(response.message);
     }
    } catch (error) {
      toast.error("Error updating form data.");
    }

  };

  // Step validation logic
  const validateStep = async () => {
    if (step === 1) {
      return await trigger("step1");
    }
    if (step === 2) {
      return await trigger("step2");
    }
    if (step === 3) {
      return await trigger("step3");
    }
    return false;
  };

  // Move to next step if valid
  const nextStep = async () => {
    const isValid = await validateStep();
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  // Go to previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // Render the current step component
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return null;
    }
  };

  // Render the form with steps
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderStep()} {/* Render current step */}
        <div className="flex justify-end gap-2 mt-4">
          {step > 1 && (
            <Button type="button" onClick={prevStep}>
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit">
              Submit
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default LargeForm;
