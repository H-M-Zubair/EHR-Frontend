export  const fetchUserAndPatientForms = async (slug: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/get-patients-form-by-patientId/${slug}`,
        { withCredentials: true }
      );
      setUser(response.data.user);
      setPatientForms(response.data.patientForms);
    } catch (error) {
      console.error("Error fetching user and patient forms:", error);
    }
  };