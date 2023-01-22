import React from "react";
import "../CSS/MyAccount.css";
import { NotAllowedIcon, CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

const MyAccount = () => {
  return (
    <>
      <div className="motherBox">
        <div className="child1">
          <div>
            <img
              className="avatar"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
            />
          </div>
          <div className="userD">
            <h2>Name</h2>
            <h3>Phone Number</h3>
            <h3>Email</h3>
          </div>
          <div className="profile">
            <h3>
              <NotAllowedIcon style={{ color: "red" }} /> Profile Document
            </h3>
            <h3>
              <CheckCircleIcon style={{ color: "green" }} /> Mobile Number
            </h3>
          </div>
          <div className="profile2">
            <h3>
              <StarIcon style={{ color: "goldenrod" }} /> Credits
            </h3>
            <h3>My Bookings</h3>
            <h3>My Account</h3>
          </div>
        </div>

        <div className="child2">
          <div>
            <h1
              style={{
                textAlign: "center",
                fontSize: "25px",
                borderBottom: "1px solid",
                height: "50px",
              }}
            >
              MY ACCOUNT
            </h1>
          </div>

          <div className="card1">
            <div
              style={{
                fontSize: "18px",
                borderBottom: "1px solid",
                paddingBottom: "10px",
                paddingTop: "20px",
              }}
            >
              Account Details
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <p>Email</p>
              <p>email@gmail.com</p>
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <p>Mobile*</p>
              <input
                style={{ border: "1px solid" }}
                type="text"
                value="8768525491"
              />
            </div>
          </div>

          <div className="card2">
            <div
              style={{
                fontSize: "18px",
                borderBottom: "1px solid",
                paddingBottom: "10px",
                paddingTop: "20px",
              }}
            >
              Personal Details
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <p>Name</p>
              <p>Name Something</p>
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <p>Gender</p>
              <select name="" id="">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>
          <div className="card2">
            <div
              style={{
                fontSize: "18px",
                borderBottom: "1px solid",
                paddingBottom: "10px",
                paddingTop: "20px",
              }}
            >
              Location Details
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <p>Please share your current city for optimized experience</p>
            </div>
            <div style={{ display: "flex", gap: "100px" }}>
              <p>City</p>
              <select name="" id="">
                <option value="">Kolkata</option>
                <option value="">Bangalore</option>
              </select>
            </div>
          </div>
          <div className="update">Update</div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;