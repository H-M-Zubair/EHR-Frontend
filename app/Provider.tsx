"use client"
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./userContext";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import {QueryClient ,QueryClientProvider } from "@tanstack/react-query"
export default function Provider({ children }: { children: React.ReactNode }) {

  const queryClient=new QueryClient();
  return (
    <main>
      {/* <ThemeProvider> */}
      <QueryClientProvider client={queryClient} >
        <UserProvider>
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </UserProvider>
        </QueryClientProvider>
      {/* </ThemeProvider> */}
    </main>
  );
}
