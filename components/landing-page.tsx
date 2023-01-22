import React from "react";
import LandingPageStyle from "./landing-page.module.sass";
const LandingPage: React.FC = () => {
  return (
    <div className={LandingPageStyle.landingContainer}>
      <h1 className={LandingPageStyle.welcomeText}>Welcome to My Game</h1>
      <div className={LandingPageStyle.formContainer}>
        <form className={LandingPageStyle.form}>
          <h2 className={LandingPageStyle.formTitle}>Login</h2>
          <label className={LandingPageStyle.formLabel}>
            Email
            <input
              type="email"
              className={LandingPageStyle.formInput}
              required
            />
          </label>
          <label className={LandingPageStyle.formLabel}>
            Password
            <input
              type="password"
              className={LandingPageStyle.formInput}
              required
            />
          </label>
          <button type="submit" className={LandingPageStyle.formButton}>
            Login
          </button>
        </form>
        <form className={LandingPageStyle.form}>
          <h2 className={LandingPageStyle.formTitle}>Register</h2>
          <label className={LandingPageStyle.formLabel}>
            Email
            <input
              type="email"
              className={LandingPageStyle.formInput}
              required
            />
          </label>
          <label className={LandingPageStyle.formLabel}>
            Password
            <input
              type="password"
              className={LandingPageStyle.formInput}
              required
            />
          </label>
          <label className={LandingPageStyle.formLabel}>
            Confirm Password
            <input
              type="password"
              className={LandingPageStyle.formInput}
              required
            />
          </label>
          <button type="submit" className={LandingPageStyle.formButton}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
