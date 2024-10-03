"use client";

import axios from 'axios';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the IDoctor interface according to the API response
interface IDoctor {
  _id: string;
  email: string;
  password: string; // Consider if you really need this in the client-side state
  createdAt: string;
  __v: number;
}

interface IUserContext {
  authUser: IDoctor | null;
  setAuthUser: React.Dispatch<React.SetStateAction<IDoctor | null>>;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const useUser = (): IUserContext => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// UserProvider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authUser, setAuthUser] = useState<IDoctor | null>(null);

  useEffect(() => {
    // Attempt to fetch the authenticated user from the server when the component mounts
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/doctor', { withCredentials: true });

        console.log(response)
        if (response.data && response.data.doctor) {
          setAuthUser(response.data.doctor);
        } else {
          console.log('No user data found');
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </UserContext.Provider>
  );
};
