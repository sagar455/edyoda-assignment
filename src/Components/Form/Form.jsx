import React, { useState } from "react";
import "./Form.css";
import formData from "./FormData";
import alertTimer from "../../assets/Icons/timer-alert.svg";
import razorPay from "../../assets/Icons/razorPay.svg";

const Form = () => {
  const [radioChecked, setRadioChecked] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const [calculatedAmount,setCalculatedAmount] = useState(0);

  const handleInputClick = (item) => {
    console.log(item);
    setCalculatedAmount(()=>item.subscription-item.price)
    setClickedItem(item);
    setRadioChecked(true);
  };

  const handleRadioChange = (e) => {
    setRadioChecked(e.target.checked);
  };

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
      </div>
      <div className="input-container">
        {formData.map((item) => {
          return (
            <div className="container">
              {item.expired ? (
                <p className="badge badge-expired">offer expired</p>
              ) : (
                ""
              )}
              {item.recommended ? (
                <p className="badge badge-recommended">recommended</p>
              ) : (
                ""
              )}
              <input
                type="text"
                className={
                  clickedItem?.id === item.id
                    ? "plan-field-selected"
                    : "plan-field"
                }
                readOnly
                disabled={item.disabled}
                onClick={() => handleInputClick(item)}
              />
              <label class="input-label" id="label1">
                <input
                  className="round-checkbox"
                  type="radio"
                  checked={
                    item.disabled
                      ? "true"
                      : clickedItem?.id === item.id
                      ? { radioChecked }
                      : ""
                  }
                  onChange={handleRadioChange}
                />
                {item.months} Months Subscription
              </label>
              <div className="pricing-container">
                <p className="pricing">
                  Total&nbsp;&nbsp;&nbsp;{" "}
                  <span className="plan-price"> ₹{item.price}</span>
                </p>
                <p className="monthly-pricing">₹{item.monthly} /mo</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="separator"></div>
      <div className="summary-container">
        {clickedItem === null ? (
          ""
        ) : (
          <>
            <div className="text-container">
              <p>
                Subscription Fee <span>₹{clickedItem?.subscription}</span>
              </p>
            </div>
            <div className="alert">
              <p className="alert-text">
                Limited Time <span>- ₹{calculatedAmount}</span>
              </p>
              <p className="alert-validity">
                <img src={alertTimer} alt="alert" />
                offer valid till August 2023
              </p>
            </div>{" "}
            <div className="text-container">
              <p>
                Total (Incl of 18% GST) <span>₹{clickedItem?.price}</span>
              </p>
            </div>
          </>
        )}
      </div>

      <div className="button-container">
        <button className="btn cancel-btn">CANCEL</button>
        <button className="btn proceed-btn">PROCEED TO PAY</button>
      </div>
      <div className="icon-container">
        <img src={razorPay} alt="" />
      </div>
    </div>
  );
};

export default Form;
