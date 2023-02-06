import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Layout>
      <div className="welcome">
        <section className="app__flex">
          <article className="column-flex modal">
            <div>
              <h1>Welcome to HomeTech</h1>
              <p className="p-text-2">
                We protect your credentials from any form of shoulder surfing
                attacks
              </p>
            </div>
            <div className="modal-btn column-flex">
              <Link to="/register">
                <button className="primary-btn">Register</button>
              </Link>

              <button className="secondary-btn">Sign in</button>
            </div>
            <div className="modal-footer app__flex-2">
              <p>Privacy and Policy</p>
              <p>FAQ</p>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Welcome;
