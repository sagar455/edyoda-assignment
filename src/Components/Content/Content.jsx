import React from "react";
import "./Content.css";
import live from "../../assets/Icons/live.svg";
import noAds from "../../assets/Icons/no-ads.svg";
import play from "../../assets/Icons/play-course.svg";
import timer from "../../assets/Icons/timer.svg";
import alertTimer from "../../assets/Icons/timer-alert.svg";
import scholar from "../../assets/Icons/scholar.svg";
import razorPay from "../../assets/Icons/razorPay.svg";

const Content = () => {
  return (
    <>
      <div className="header">
        <p className="header-text">Access curated courses worth</p>
        <p className="header-text"> ₹ 18,500 <span className="strike-off-text"></span> at just <span class="highlight"> ₹ 99 </span> per year! </p>
      </div>
      <div className="pointers">
        <div className="pointer1">
            <img src={play} alt="play" />
            <p><span className="highlight">100+</span> Job relevant courses </p>
        </div>
        <div className="pointer2">
            <img src={timer} alt="timer" />
            <p> <span className="highlight">20,000+</span> Hours of content</p>
        </div>
        <div className="pointer3">
            <img src={live} alt="live classes" />
            <p> <span className="highlight">Exclusive</span> webinar access</p>
        </div>
        <div className="pointer4">
            <img src={scholar} alt="scholar" />
            <p>Scholarship worth <span className="highlight">₹94,500</span>  </p>
        </div>
        <div className="pointer5">
            <img src={noAds} alt="no-ads" />
            <p> <span className="highlight">Ad Free</span> learning experience </p>
        </div>
      </div>

    </>
  );
};

export default Content;
