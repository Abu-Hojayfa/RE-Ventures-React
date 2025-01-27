import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const { first_name, last_name, email, password, confirmPassword } = formData;

    // Client-side validation for password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsModalOpen(true);
      return;
    }

    // Prepare data to send to the backend (first_name, last_name, email, password)
    const data = { first_name, last_name, email, password };

    try {
      const response = await axios.post("http://localhost:8080/signup", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log("User signed up successfully:");
        navigate("/"); // Redirect to home page on successful signup
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
              Create Account
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 items-center justify-end">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-base-content"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="input input-bordered w-full rounded-lg"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-base-content"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="input input-bordered w-full rounded-lg"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
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
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-base-content"
                >
                  Confirm your password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="input input-bordered w-full rounded-lg"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full text-white bg-[#1563DF] text-lg rounded-lg"
              >
                Create account
              </button>
              <div className="text-sm font-medium text-base-content">
                Already have an account?{" "}
                <Link to="/signin" className="text-primary hover:underline">
                  Sign In
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
