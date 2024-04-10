import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ResetPw = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePassword = useCallback(() => {
    if (formData.password !== formData.confirmPassword) {
      // If passwords don't match, display an alert and return
      alert("Passwords do not match. Please re-enter the passwords.");
      return;
    }

    // Retrieve existing user data from sessionStorage
    const userDataString = window.sessionStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      // Update password only
      const updatedUserData = { ...userData, password: formData.password };
      // Store updated user data back into sessionStorage
      window.sessionStorage.setItem("userData", JSON.stringify(updatedUserData));
      // Navigate to confirm password change page
      navigate("/confirm-pw-change");
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
      <div className="w-[244px] absolute !m-[0] top-[118px] left-[25px] text-xl font-semibold inline-block h-[29px] shrink-0 z-[0]">
        Set a new password
      </div>
      <div className="w-[338px] absolute !m-[0] top-[227px] left-[calc(50%_-_170px)] rounded-xl bg-gray-100 box-border h-[45px] z-[1] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[227px] absolute !m-[0] top-[235px] left-[37px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[2]"
        placeholder="Enter your new Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[337px] absolute !m-[0] top-[445px] left-[29px] h-[59px] z-[3]"
        onClick={handleUpdatePassword}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-xl bg-lightgreen w-[337px] h-[59px] cursor-pointer"
        />
        <b className="absolute top-[16px] left-[calc(50%_-_77.5px)] text-base inline-block font-poppins text-colors-neutral-white text-left w-[178px] h-7">
          <p className="m-0">Update Password</p>
        </b>
      </button>
      <img
        className="w-[42px] absolute !m-[0] top-[26px] left-[16px] h-[35px] object-contain cursor-pointer z-[4]"
        alt=""
        src="/back-button4.svg"
        onClick={onBackButtonIconClick}
      />
      <div className="w-[95px] absolute !m-[0] top-[198px] left-[25px] font-semibold inline-block h-[29px] shrink-0 z-[5]">
        Password
      </div>
      <div className="w-[338px] absolute !m-[0] top-[336px] left-[calc(50%_-_170px)] rounded-xl bg-gray-100 box-border h-[45px] z-[6] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[268px] absolute !m-[0] top-[344px] left-[37px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[7]"
        placeholder="Re-enter your new Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <div className="w-[173px] absolute !m-[0] top-[307px] left-[25px] font-semibold inline-block h-[29px] shrink-0 z-[8]">
        Confirm Password
      </div>
      <div className="w-[356px] absolute !m-[0] top-[159px] left-[25px] font-semibold font-inter text-silver-100 inline-block h-[29px] shrink-0 z-[9]">
        Create a new password.
      </div>
    </div>
  );
};

export default ResetPw;
