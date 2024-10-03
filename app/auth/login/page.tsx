"use client";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import auth from "@/public/images/auth.png";
import { loginDoctor } from "@/lib/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/userContext";
import { useState } from "react";
import SpinnerDemo from "@/components/spinner";
export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

const initialValues = {
  email: "",
  password: "",
};
interface FormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});
export default function Dashboard() {
  const { setAuthUser } = useUser();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (values: FormData) => {
    try {
      setIsLoading(true);
      const response = await loginDoctor(values);

      if (response.status === "success") {
        toast.success("Login successful!");
        setAuthUser(response.data.doctor);

        router.push("/dashboard");
      } else {
        toast.error(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    }
  };
  return (
    <div className=" mt-32 justify-center items-center ">
      <div className="flex  py-12">
        <div className="mx-auto py-4 gap-6">
          <div className=" gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>

                <div className="mb-4">
                  {/* <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="/forgot-password"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div> */}
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="block w-full p-2 border border-gray-300 rounded"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full  text-white p-2 rounded"
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? <SpinnerDemo /> : "Login"}
                </Button>
              </Form>
            </Formik>

            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
