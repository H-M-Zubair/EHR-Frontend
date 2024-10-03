import { z } from 'zod';

 export const schema = z.object({
    step1: z.object({
      name: z.string().min(1, "Your name is required"),
      country: z.string().nonempty("Country is required"),
      phone: z.string().min(1, "Phone number is required"),
      date: z.string().nonempty("Date is required"),
      time: z.string().nonempty("Time is required"),
      duration: z.string().nonempty("Duration is required"),
    }),
    step2: z.object({
      traumaHistory: z.string().optional(),
      dailyRoutine: z.string().optional(),
      reasonForVisit: z.string().optional(),
      surgicalHistory: z.string().optional(),
      familyMedicalHistory: z.string().optional(),
      currentPainLevel: z.number().min(1).max(10).optional(),
      sleepPatterns: z.string().optional(),
      stressLevels: z.number().min(1).max(10).optional(),
    }),
    step3: z.object({
      clientDateOfBirth: z.string().nonempty("Date of Birth is required"),
      clientAddress: z.string().optional(),
      familyMedicalHistory: z.object({
        hasDiabetes: z.boolean().optional(),
        hasHeartDisease: z.boolean().optional(),
        hasCancer: z.boolean().optional(),
        familyMemberDetails: z.string().optional(),
      }),
      recentHealthChecks: z.object({
        lastPhysicalExamDate: z.string().optional(),
        cholesterolLevels: z.string().optional(),
        bloodPressure: z.string().optional(),
      }),
      mentalHealth: z.object({
        anxiety: z.boolean().optional(),
        depression: z.boolean().optional(),
        recentStressors: z.string().optional(),
      }),
      goals: z.string().optional(),
      concerns: z.string().optional(),
    }),
  });
  
  export type FormData = z.infer<typeof schema>;


  //Pre Populate FormData 
  export const mapFormData = (apiData: any) => {
    console.log("function is called",apiData)
    return {
      step1: {
        name: apiData?.step1?.name || "",
        country: apiData?.step1?.country || "",
        phone: apiData?.step1?.phone || "",
        date: apiData?.step1?.date || "",
        time: apiData?.step1?.time || "",
        duration: apiData?.step1?.duration || "",
      },
      step2: {
        traumaHistory: apiData?.step2?.traumaHistory || "",
        dailyRoutine: apiData?.step2?.dailyRoutine || "",
        reasonForVisit: apiData?.step2?.reasonForVisit || "",
        surgicalHistory: apiData?.step2?.surgicalHistory || "",
        familyMedicalHistory: apiData?.step2?.familyMedicalHistory || "",
        currentPainLevel: apiData?.step2?.currentPainLevel || 0,
        sleepPatterns: apiData?.step2?.sleepPatterns || "",
        stressLevels: apiData?.step2?.stressLevels || 0,
      },
      step3: {
        clientDateOfBirth: apiData?.step3?.clientDateOfBirth || "",
        clientAddress: apiData?.step3?.clientAddress || "",
        familyMedicalHistory: {
          hasDiabetes: apiData?.step3?.familyMedicalHistory?.hasDiabetes || false,
          hasHeartDisease: apiData?.step3?.familyMedicalHistory?.hasHeartDisease || false,
          hasCancer: apiData?.step3?.familyMedicalHistory?.hasCancer || false,
          familyMemberDetails: apiData?.step3?.familyMedicalHistory?.familyMemberDetails || "",
        },
        recentHealthChecks: {
          lastPhysicalExamDate: apiData?.step3?.recentHealthChecks?.lastPhysicalExamDate || "",
          cholesterolLevels: apiData?.step3?.recentHealthChecks?.cholesterolLevels || "",
          bloodPressure: apiData?.step3?.recentHealthChecks?.bloodPressure || "",
        },
        mentalHealth: {
          anxiety: apiData?.step3?.mentalHealth?.anxiety || false,
          depression: apiData?.step3?.mentalHealth?.depression || false,
          recentStressors: apiData?.step3?.mentalHealth?.recentStressors || "",
        },
        goals: apiData?.step3?.goals || "",
        concerns: apiData?.step3?.concerns || "",
      },
    };
  };