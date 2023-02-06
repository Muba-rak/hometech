import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Fullname from "../images/fullname.svg";
import sms from "../images/sms.svg";
import eye from "../images/eye-slash.svg";

const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <Layout>
      <div className="register">
        <main className="app__flex main reg">
          <article className="column-flex modal">
            <h1 style={{ marginBottom: "8px" }} className="head-text">
              Create an Account
            </h1>
            <p style={{ marginBottom: "15px" }} className="p-text-2">
              Fill in your details below to create an
              <br />
              account with us
            </p>
            <div
              style={{ marginBottom: "10px" }}
              className="progress app__flex-2"
            >
              <p className="filled">1</p>
              <p className="dense">2</p>
              <p className="dense">3</p>
            </div>
            <div className="modal-input">
              <input type="text" placeholder="Full name" />
              <img src={Fullname} width={24} height={24} alt="fullname" />
            </div>
            <div className="modal-input">
              <input type="email" placeholder="Email address" />
              <img src={sms} width={24} height={24} alt="email" />
            </div>
            <div className="modal-input">
              <input type="password" placeholder="Password" />
              <img src={eye} width={24} height={24} alt="email" />
            </div>
            <div
              style={{ marginTop: "20px", marginBottom: "2px" }}
              className="modal-btn column-flex"
            >
              <button className="primary-btn">
                {loading ? "Signing up..." : "Next"}
              </button>
            </div>
            <p className="p-text">
              Already have an account{" "}
              <span
                style={{
                  color: "#0076A7",
                  fontWeight: "700",
                  fontSize: "16px",
                }}
              >
                Sign In
              </span>
            </p>
            <div className="modal-footer app__flex-2">
              <p>Privacy and Policy</p>
              <p>FAQ</p>
            </div>
          </article>
        </main>
      </div>
    </Layout>
  );
};

export default Registration;
