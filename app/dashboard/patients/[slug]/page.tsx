"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import { FaDownload, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LargeForm from "@/components/appointment/LargeForm";
import { getUserAndPatientForms, deleteForm } from "@/lib/Fetcher/FetchUserForms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [user, setUser] = useState<any>(null);
  const [patientForms, setPatientForms] = useState<any[]>([]);
  const { slug } = params;
  const router = useRouter();

  useEffect(() => {
    const fetchUserAndPatientForms = async (slug: string) => {
      try {
        const { user, patientForms } = await getUserAndPatientForms(slug);
        setUser(user);
        setPatientForms(patientForms);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUserAndPatientForms(slug);
  }, [slug]);

  const handleDelete = async (formId: string) => {
    try {
      await deleteForm(formId); // Call your delete API
      // Update the patientForms state to remove the deleted form
      setPatientForms((prevForms) => prevForms.filter((form) => form._id !== formId));
    } catch (error) {
      console.error("Error deleting form:", error);
    }
  };

  const generatePDF = (assessmentData: any, assessmentTitle: string) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`${assessmentTitle}`, 10, 10);
    doc.setFontSize(12);
    Object.keys(assessmentData).forEach((key, index) => {
      doc.text(`${key}: ${assessmentData[key] || ""}`, 10, 20 + index * 10);
    });
    return doc;
  };

  const handleDownloadPDF = (assessmentData: any, assessmentTitle: string) => {
    const doc = generatePDF(assessmentData, assessmentTitle);
    doc.save(`${assessmentTitle.toLowerCase().replace(" ", "-")}.pdf`);
  };

  const handleViewPDF = (assessmentData: any, assessmentTitle: string) => {
    const doc = generatePDF(assessmentData, assessmentTitle);
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
  };

  if (!user) {
    return <div>No registered user found.</div>;
  }

  return (
    <div>
      {/* Patient Details */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-lg font-semibold md:text-2xl my-4">Patient Details</h1>
        <div className="space-y-2">
          {[{ label: "First Name", value: user.firstName },
            { label: "Last Name", value: user.lastName },
            { label: "Email", value: user.email },
            { label: "Phone", value: user.phone },
            { label: "Address", value: user.address },
            { label: "Created At", value: new Date(user.createdAt).toLocaleDateString() }]
            .map((detail, index) => (
              <div className="flex justify-between" key={index}>
                <strong className="w-1/3">{detail.label}:</strong>
                <span className="w-2/3">{detail.value}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Accordion for Patient Forms */}
      <Accordion type="single" collapsible className="mt-4">
        {patientForms.map((forms, index) => (
          <AccordionItem key={index} value={`appointment-${index}`}>
            <AccordionTrigger className="font-semibold text-lg bg-gray-100 flex justify-between items-center rounded-md p-4">
              <div className="flex items-center space-x-2">
                <span>Appointment-{index + 1}</span>
                <span>({forms.step1.date})</span>
                <div className="flex justify-end gap-3">
                  {/* Edit Button */}
                  <Dialog>
                    <DialogTrigger onClick={(e) => e.stopPropagation()}>
                      <FiEdit3 className="hover:shadow-lg hover:scale-110 duration-200" size={20} />
                    </DialogTrigger>
                    <DialogContent
                      onClick={(e) => e.stopPropagation()} // Stop propagation within the dialog content as well
                      className="max-h-[90vh] overflow-y-auto p-4"
                    >
                      <DialogHeader>
                        <DialogDescription>
                          <LargeForm formId={forms._id} />
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>

                  <MdDeleteOutline
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(forms._id); // Call handleDelete on click
                    }}
                    className="hover:shadow-lg hover:scale-110 duration-200"
                    size={20}
                  />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-gray-100 p-2">
                {/* Assessment 1 */}
                <li className="flex items-center space-x-4 p-2">
                  <span className="text-lg">Assessment 1</span>
                  <GrView
                    className="hover:cursor-pointer"
                    size={20}
                    onClick={() => handleViewPDF(forms.step2, "Assessment 1")}
                  />
                  <FaDownload
                    className="hover:cursor-pointer"
                    size={20}
                    onClick={() => handleDownloadPDF(forms.step2, "Assessment 1")}
                  />
                </li>
                {/* Assessment 2 */}
                <li className="flex items-center space-x-4 p-2 ">
                  <span className="text-lg">Assessment 2</span>
                  <GrView
                    className="hover:cursor-pointer"
                    size={20}
                    onClick={() => handleViewPDF(forms.step3, "Assessment 2")}
                  />
                  <FaDownload
                    className="hover:cursor-pointer"
                    size={20}
                    onClick={() => handleDownloadPDF(forms.step3, "Assessment 2")}
                  />
                </li>
                <li className="flex items-center space-x-4 p-2 ">
                  <span className="text-lg">Meeting: {forms.step1?.time}</span>
                </li>
                <li className="flex items-center space-x-4 p-2 ">
                  <span className="text-lg">Date: {forms.step1?.date}</span>
                </li>
                {/* <span></span><span>{forms.step1?.time}</span> */}

              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
