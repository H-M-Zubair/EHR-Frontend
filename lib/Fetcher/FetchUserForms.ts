import axios from 'axios';
import {FormData} from '@/lib/zodSchema/FormSchemas';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

export const getUserAndPatientForms = async (slug:string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/get-patients-form-by-patientId/${slug}`,
      { withCredentials: true }
    );
    return {
      user: response.data.user,
      patientForms: response.data.patientForms,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error('Failed to fetch data');
  }
};
export const getFormById = async (id:string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/get-patient-form-by-formId/${id}`
      
    );

    console.log("Response Data: ",response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error('Failed to fetch data');
  }
};
export const updateFormData=async(data:FormData,formId:string)=>{
console.log(data)
    try {
        const response =await axios.post(`http://localhost:5000/api/update-form-data-by-form-id/${formId}`,data)
        if (response.status === 200) {
            return { success: true, message: response.data.message };
        }
    } catch (error) {
        return { success: false, message: "Failed to update form data" };
    }
}
export const deleteForm=async (formId:string)=>{
  try {
    const response =await axios.delete(`http://localhost:5000/api/delete-form-by-form-id/${formId}`)
    if(response.status===200){
      toast.success(response.data.message)
      
    }
    else if(response.status===400){
      toast.error(response.data.message)  }
     } catch (error) {
    toast.error(error instanceof Error ? error.message : "Failed to delete form")
  }
}
export const getAssessmentForms = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/get-assessment-forms");
    console.log(response)
    if (response.status === 200) {
      return response.data; 
    } else {
      throw new Error('Error fetching assessment forms: ' + response.statusText);
    }
  }catch (error) {
    if (error instanceof Error) {
      throw new Error('Error fetching assessment forms: ' + error.message);
    } else {
      throw new Error('Error fetching assessment forms: Unknown error');
    }
  }
};