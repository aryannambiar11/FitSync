import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onLogInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/confirm-pw-change");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/confirm-pw-change");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-17xl bg-black h-[844px] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] text-left text-base text-colors-neutral-white font-poppins">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[101px] shrink-0 object-cover z-[0]"
        alt=""
        src="/logo@2x.png"
      />
      <div className="w-[92px] absolute !m-[0] top-[125px] left-[226px] text-xl text-deepskyblue-300 text-right inline-block h-[31px] shrink-0 z-[1]">
        Sign Up
      </div>
      <div className="w-[95px] absolute !m-[0] top-[227px] left-[33px] font-semibold inline-block h-[29px] shrink-0 z-[2]">
        First Name
      </div>
      <div className="w-[121px] absolute !m-[0] top-[166.5px] left-[215.5px] box-border h-[3px] z-[3] border-t-[3px] border-solid border-colors-neutral-white" />
      <div
        className="w-[62px] absolute !m-[0] top-[125px] left-[76px] text-xl text-dimgray-100 text-right inline-block h-[26px] shrink-0 cursor-pointer z-[4]"
        onClick={onLogInTextClick}
      >
        Log in
      </div>
      <div className="w-[313px] absolute !m-[0] top-[255px] left-[calc(50%_-_157px)] rounded-xl bg-gray-100 box-border h-[45px] z-[5] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-52 absolute !m-[0] top-[263px] left-[50px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[6]"
        placeholder="Enter your First Name"
        type="text"
      />
      <div className="w-[95px] absolute !m-[0] top-[327px] left-[33px] font-semibold inline-block h-[29px] shrink-0 z-[7]">
        Last Name
      </div>
      <div className="w-[313px] absolute !m-[0] top-[355px] left-[calc(50%_-_157px)] rounded-xl bg-gray-100 box-border h-[45px] z-[8] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[216px] absolute !m-[0] top-[363px] left-[50px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[9]"
        placeholder="Enter your Last Name"
        type="text"
      />
      <div className="w-[95px] absolute !m-[0] top-[527px] left-[38px] font-semibold inline-block h-[29px] shrink-0 z-[10]">
        Password
      </div>
      <div className="w-[313px] absolute !m-[0] top-[555px] left-[calc(50%_-_152px)] rounded-xl bg-gray-100 box-border h-[45px] z-[11] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[216px] absolute !m-[0] top-[563px] left-[56px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[12]"
        placeholder="Enter your password"
        type="password"
      />
      <div className="w-[95px] absolute !m-[0] top-[427px] left-[33px] font-semibold inline-block h-[29px] shrink-0 z-[13]">
        Email
      </div>
      <div className="w-[313px] absolute !m-[0] top-[455px] left-[calc(50%_-_157px)] rounded-xl bg-gray-100 box-border h-[45px] z-[14] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[216px] absolute !m-[0] top-[463px] left-[50px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[15]"
        placeholder="Enter your Email"
        type="email"
      />
      <div
        className="w-[337px] absolute !m-[0] top-[672px] left-[26px] h-[59px] cursor-pointer z-[16]"
        onClick={onGroupContainerClick}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-xl bg-deepskyblue-300 w-[337px] h-[59px] cursor-pointer"
          onClick={onRectangleClick}
        />
        <b className="absolute top-[15px] left-[calc(50%_-_31.5px)] inline-block w-[95px] h-[29px]">
          Sign up
        </b>
      </div>
    </div>
  );
};

export default SignUpPage;
