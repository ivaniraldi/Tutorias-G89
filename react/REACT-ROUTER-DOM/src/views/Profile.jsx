import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Profile() {

  const { user } = useContext(GlobalContext);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card profile-card w-100">
          <div className="card-body text-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="User Profile"
              className="rounded-circle profile-img mb-3"
            />
            <h3 className="card-title mb-2">{user.username}</h3>
            <p className="card-text text-muted mb-3">Web Developer</p>
            <div className="social-icons mb-4">
              <a href="#" className="me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
