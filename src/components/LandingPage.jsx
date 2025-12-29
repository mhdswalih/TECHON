import axios from "axios";
import React, { useEffect } from "react";

const LandingPage = () => {
  const fetchDepartment = async () => {
    try {
      const response = await axios.get(
        "https://employee-react.onrender.com/emp/departments"
      );

    } catch (error) {
      console.error("API ERROR:", error.message);
    }
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  return <div>

    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
  </div>;
};

export default LandingPage;
