import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "../ui/button";


interface Props {
  name: string;
  phone: string;
  meetingDate: string;
  meetingTime: string;
}
const MeetingCard = ({name, phone, meetingDate, meetingTime}:Props) => {
  return (
    <div>
      <Card className="max-w-sm my-4 ">
        <CardHeader>
          <CardTitle className="text-lg" >Patient Name: {name}</CardTitle>
          <CardDescription className="text-lg">Phone: {phone} </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">Scheduled At: </p>
          <p className="text-gray-500">Meeting Date: {meetingDate}</p>
          <p className="text-gray-500" >Meeting Time: {meetingTime}</p>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end gap-2">
            {" "}
            <Button  >Reschedule</Button>
            <Button variant={"secondary"}> View Details</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MeetingCard;
