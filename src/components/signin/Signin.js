import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null); // State to manage error messages
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Prepare data to send to the backend (email, password)
    const data = { email, password };

    try {
      const response = await axios.post("http://localhost:8080/signin", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("User signed in successfully:");
        navigate("/"); // Redirect to home page on successful sign-in
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        setError(error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        setError("No response received from the server.");
      } else {
        // Something else happened while setting up the request
        setError("An error occurred while setting up the request.");
      }
      setIsModalOpen(true); // Show the modal with the error message
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center px-6 mx-auto mb-10">
        <a
          href="/"
          className="justify-center pb-2 items-center mb-8 text-2xl font-semibold lg:mb-10"
        >
          {/* <img src={logo} className="mr-4 h-36" alt="Logo" /> */}
        </a>
        {/* Card */}
        <div className="p-10 pt-0 w-full max-w-lg bg-base-100 rounded-2xl shadow-xl shadow-gray-300">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-base-content">
              Sign In
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-base-content"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input input-bordered w-full rounded-lg"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-base-content"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full rounded-lg"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full text-white bg-[#1563DF] text-lg rounded-lg"
              >
                Sign In
              </button>
              <div className="text-sm font-medium text-base-content">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog id="error_modal" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Error</h3>
            <p className="py-4">{error}</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
