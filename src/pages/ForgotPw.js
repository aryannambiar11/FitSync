import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPw = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResetPassword = useCallback(() => {
    // Retrieve user data from sessionStorage
    const userDataString = window.sessionStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      // Check if email matches stored data
      if (formData.email === userData.email) {
        // Navigate to reset password page if email is correct
        navigate("/reset-pw");
      } else {
        // Handle incorrect email
        alert("Invalid email. Please enter the correct email.");
      }
    } else {
      // Handle no user data found
      alert("No user data found. Please sign up first.");
    }
  }, [formData, navigate]);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-black h-[844px] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] text-left text-base text-colors-neutral-white font-poppins">
      <div className="w-[197px] absolute !m-[0] top-[117px] left-[25px] text-xl font-semibold inline-block h-[29px] shrink-0 z-[0]">
        Forgot password
      </div>
      <div className="w-[334px] absolute !m-[0] top-[242px] left-[calc(50%_-_167px)] rounded-xl bg-gray-100 box-border h-[45px] z-[1] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[216px] absolute !m-[0] top-[250px] left-[48px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[2]"
        placeholder="Enter your email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <div className="w-[337px] absolute !m-[0] top-[323px] left-[25px] h-[59px] z-[3]">
        <div
          className="absolute top-[0px] left-[0px] rounded-xl bg-deepskyblue-300 w-[337px] h-[59px] cursor-pointer"
          onClick={handleResetPassword}
        />
        <b className="absolute top-[15px] left-[calc(50%_-_37.5px)] inline-block w-[95px] h-[29px]">
          Continue
        </b>
      </div>
      <img
        className="w-[42px] absolute !m-[0] top-[33px] left-[25px] h-[35px] object-contain cursor-pointer z-[4]"
        alt=""
        src="/back-button4.svg"
        onClick={onBackButtonIconClick}
      />
      <div className="w-[95px] absolute !m-[0] top-[201px] left-[28px] font-semibold inline-block h-[29px] shrink-0 z-[5]">
        Your Email
      </div>
      <div className="w-[356px] absolute !m-[0] top-[160px] left-[25px] font-semibold font-inter text-silver-100 inline-block h-[29px] shrink-0 z-[6]">
        Please enter your email to reset the password
      </div>
    </div>
  );
};

export default ForgotPw;
