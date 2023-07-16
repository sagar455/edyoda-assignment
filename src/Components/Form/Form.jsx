import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="progress-bar">
        <div className="stage">
          <button className="stage-btn">1</button>
          <span>Sign up</span>
        </div>
        <div className="stage">
          <button className="stage-btn">2</button>
          <span>Subscribe</span>
        </div>
      </div>
      <div className="form-header">
        <p>Select your subscription plan</p>
      </ div>
      <div className="input-container">
        <div className="plan-field">
          <input className="plan-field" type="radio" name="plan" checked="true" />
          <label for="plan1">12 Months Subscription </label>
        </div>
        <div className="plan-field">
          <input className="round-checkbox" type="checkbox" name="plan" />
          <label for="plan2">12 Months Subscription </label>
        </div>
        <div className="plan-field">
          <input className="round-checkbox" type="checkbox" name="plan" />
          <label for="plan3">6 Months Subscription </label>
        </div>
        <div className="plan-field">
          <input className="round-checkbox" type="checkbox" name="plan" />
          <label for="plan4">3 Months Subscription </label>
        </div>
      </div>
    </div>
  );
};

export default Form;
