import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router";
import { IoMdHome } from "react-icons/io";
import { TiMessage } from "react-icons/ti";
import { IoPeopleOutline, IoSettingsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <h2 className="navHeading">
            Ch<span className="text-[#4E4E4E]">att.</span>
          </h2>
          <div className="navLink">
            <ul>
              <li>
                <NavLink to="/">
                  <IoMdHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/chat">
                  <TiMessage />
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink to="/group">
                  <IoPeopleOutline />
                  Group
                </NavLink>
              </li>
              <li>
                <NavLink to="/friends">
                  <BsPerson />
                  Friends
                </NavLink>
              </li>
              <li>
                <NavLink to="/people">
                  <FaBars />
                  People
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile">
          <div className="profileNameAndImage">
            <img src="/images/ProfilePicture.png" alt="Profile picture" />
            <div className="name">
              <h3>Paula Mora</h3>
              <h4>Edit Profile</h4>
            </div>
          </div>
          <div className="settingsIcon">
            <IoSettingsOutline />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
