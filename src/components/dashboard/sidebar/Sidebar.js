import React, { useState, useEffect } from "react";
import logo from "../../../assests/logos/image.png";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaHeart, FaRegSquarePlus } from "react-icons/fa6";
import {
  MdAddchart,
  MdLogout,
  MdContactMail,
  MdOutlineMessage,
  MdOutlineEditCalendar,
} from "react-icons/md";
import axios from "axios";
import "../common.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
const [activeTab, setActiveTab] = useState("dashboard");
const [name, setName] = useState("");
const [email, setEmail] = useState("");

useEffect(() => {
    getImages();
}, []);

  // List of menu items
  const menuItems = [
    { label: "Dashboard", icon: MdAddchart, path: "/dashboard" },
    { label: "Profile", icon: CgProfile, path: "/dashboard/profile" },
    { label: "Reviews", icon: MdContactMail, path: "/dashboard/reviews" },
    {
      label: "My Properties",
      icon: MdOutlineEditCalendar,
      path: "/dashboard/my-properties",
    },
    { label: "My Favorites", icon: FaHeart, path: "/dashboard/my-favorites" },
    { label: "Messages", icon: MdOutlineMessage, path: "/dashboard/messages" },
    {
      label: "Add Property",
      icon: FaRegSquarePlus,
      path: "/dashboard/add-property",
    },
    { label: "Logout", icon: MdLogout, path: "/logout" },
  ];

const getImages = () => {
    try {
      axios
        .get("http://localhost:8080" + "/users/getUserById/1", {
          // headers: {
          //   Authorization: "JWT " + token
          // }
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            setName(response.data[0].name);
            setEmail(response.data[0].email);
            // setImageList(response.data);
            // this.props.history.push('/');
            //setLoaderStatus(false);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response && error.response.status === 401) {
            console.log(error.response.status);
            // this.setState({ serverError: true });
          }
          //setLoaderStatus(false);
        });
    } catch (error) {
      //console.log(error.response);
    }
};

  return (
    <div>
      <div
        className={`fixed inset-0 z-20 bg-black opacity-50 lg:hidden ${
          isOpen ? "" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`dashBoardSideNav inset-y-0 left-0 z-30 w-64 bg-[#161E2D] min-h-full transform lg:translate-x-0 lg:static ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center pt-5 pb-2 border-b border-gray-500">
          <img src={logo} alt="logo" className="w-20 " />
          <span className="text-xl font-semibold text-white mx-2">
            RE Ventures
          </span>
        </div>

        {/* Profile Section */}
        <p className="text-gray-400 text-sm pt-5 px-6 pb-3">Profile</p>
        <div className="flex items-center gap-4 pb-5 border-b border-gray-500">
          <CgProfile className="text-4xl text-white ml-6" />
          <div>
            <h4 className="text-white"> {name} </h4>
            <p className="text-gray-400 text-sm">{email}</p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-10">
          <p className="text-gray-400 text-sm px-6 pb-3">Menu</p>

          {menuItems.map((item) => {
            const isActive = activeTab === item.label.toLowerCase();

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`group px-6 py-2 mt-4 flex items-center gap-2 rounded-lg ${
                  isActive
                    ? "bg-[#1563DF] text-white font-semibold"
                    : "text-white hover:bg-[#1563DF] hover:text-white"
                }`}
                onClick={() => setActiveTab(item.label.toLowerCase())}
              >
                <item.icon
                  className={`text-lg transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 group-hover:text-white"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
