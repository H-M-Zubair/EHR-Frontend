import axios from 'axios';

// Define the input interface
interface LoginInput {
    email: string;
    password: string;
}

// Define the response structure
interface LoginResponse {
    status: 'success' | 'error';
    message?: string;
    data?: any; // Adjust the type based on what your API returns
}

export const loginDoctor = async (input: LoginInput): Promise<LoginResponse> => {
    try {
        // Make the POST request to login the doctor
        const response = await axios.post("http://localhost:5000/api/login-doctor", input,{withCredentials: true});
        if (response.status === 200) {
            // Return a success response with any data returned by the API
            return {
                status: 'success',
                data: response.data
                
            };
        } else {
            // Handle other statuses if needed
            return {
                status: 'error',
                message: 'Unexpected response status'
            };
        }
    } catch (error) {
        // Handle network errors or server errors
        if (axios.isAxiosError(error)) {
            // Check if error response exists
            if (error.response) {
                // Server responded with a status code outside of 2xx range
                return {
                    status: 'error',
                    message: error.response.data.message || 'An error occurred during login'
                };
            } else {
                // Request was made but no response received
                return {
                    status: 'error',
                    message: 'Network error or no response received'
                };
            }
        } else {
            // Something else went wrong
            return {
                status: 'error',
                message: 'An unexpected error occurred'
            };
        }
    }
};


export const logoutUser =async()=>{
    try {
        const response = await axios.post("http://localhost:5000/api/logout-doctor",{},{withCredentials: true});
        if (response.status === 200) {
            return { success: true, message: response.data.message };
        }
        return { success: false, message: "Logout failed" };

    } catch (error) {
        
        return { success: false, message: "Logout failed" };
    }
}