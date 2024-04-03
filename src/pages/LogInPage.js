import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    // Retrieve user data from sessionStorage
    const userDataString = window.sessionStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      // Check if email and password match stored data
      if (formData.email === userData.email && formData.password === userData.password) {
        // Navigate to home page if login is successful
        navigate("/home-page");
      } else {
        // Handle incorrect credentials
        alert("Invalid email or password");
      }
    } else {
      // Handle no user data found
      alert("No user data found. Please sign up first.");
    }
  }, [formData, navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/log-in-page");
  }, [navigate]);

  const onForgotPasswordTextClick = useCallback(() => {
    navigate("/forgot-pw");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-17xl bg-black h-[844px] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] text-left text-base text-colors-neutral-white font-poppins">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[101px] shrink-0 object-cover z-[0]"
        alt=""
        src="/logo@2x.png"
      />
      <div
        className="w-[92px] absolute !m-[0] top-[125px] left-[226px] text-xl text-gray-300 text-right inline-block h-[31px] shrink-0 cursor-pointer z-[1]"
        onClick={onSignUpTextClick}
      >
        Sign-Up
      </div>
      <div className="w-[95px] absolute !m-[0] top-[227px] left-[33px] font-semibold inline-block h-[29px] shrink-0 z-[2]">
        Your Email
      </div>
      <div className="w-[121px] absolute !m-[0] top-[164.5px] left-[47.5px] box-border h-[3px] z-[3] border-t-[3px] border-solid border-colors-neutral-white" />
      <div className="w-[62px] absolute !m-[0] top-[125px] left-[76px] text-xl text-deepskyblue-100 text-right inline-block h-[26px] shrink-0 z-[4]">
        Log in
      </div>
      <div className="w-[313px] absolute !m-[0] top-[256px] left-[calc(50%_-_157px)] rounded-xl bg-gray-100 box-border h-[45px] z-[5] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[157px] absolute !m-[0] top-[264px] left-[50px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[6]"
        placeholder="Enter your email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <div className="w-[95px] absolute !m-[0] top-[340px] left-[33px] font-semibold inline-block h-[29px] shrink-0 z-[7]">
        Password
      </div>
      <div className="w-[313px] absolute !m-[0] top-[369px] left-[calc(50%_-_157px)] rounded-xl bg-gray-100 box-border h-[45px] z-[8] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[216px] absolute !m-[0] top-[377px] left-[50px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[9]"
        placeholder="Enter your password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <div
        className="w-[180px] absolute !m-[0] top-[420px] left-[210px] font-semibold text-deepskyblue-100 inline-block h-[29px] shrink-0 cursor-pointer z-[10]"
        onClick={onForgotPasswordTextClick}
      >
        Forgot Password?
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[337px] absolute !m-[0] top-[464px] left-[27px] h-[59px] z-[11]"
        onClick={handleSubmit}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-xl w-[337px] h-[59px] cursor-pointer"
          alt=""
          src="/rectangle-70.svg"
        />
        <b className="absolute top-[15px] left-[calc(50%_-_27.5px)] text-base inline-block font-poppins text-colors-neutral-white text-left w-[95px] h-[29px]">
          Log In
        </b>
      </button>
    </div>
  );
};

export default LogInPage;
