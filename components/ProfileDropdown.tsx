
"use client"
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { CircleUser } from 'lucide-react';
import { useUser } from '../app/userContext';
import { logoutUser } from '@/lib/auth';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const ProfileDropdown = () => {
    const router = useRouter();
  const { setAuthUser } = useUser(); // Ensure useUser is correctly imported and returns the expected value

  const handleLogout = async () => {
    console.log('function is called');
    const response = await logoutUser();

    if (response.success) {
      setAuthUser(null);
      // Redirect to login page or home page
      toast.success("Logout successful");
      router.push('/auth/login');
    } else {
      console.error(response.message);
      // Optionally show an error message to the user
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full  border-2">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <button onClick={handleLogout}>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
