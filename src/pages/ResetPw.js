import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ResetPw = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/confirm-pw-change");
  }, [navigate]);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative rounded-17xl bg-black h-[844px] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] text-left text-base text-colors-neutral-white font-poppins">
      <div className="w-[244px] absolute !m-[0] top-[118px] left-[25px] text-xl font-semibold inline-block h-[29px] shrink-0 z-[0]">
        Set a new password
      </div>
      <div className="w-[338px] absolute !m-[0] top-[227px] left-[calc(50%_-_170px)] rounded-xl bg-gray-100 box-border h-[45px] z-[1] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[227px] absolute !m-[0] top-[235px] left-[37px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[2]"
        placeholder="Enter your new Password "
        type="password"
      />
      <div
        className="w-[337px] absolute !m-[0] top-[445px] left-[17px] rounded-xl bg-lightgreen h-[59px] cursor-pointer z-[3]"
        onClick={onRectangle1Click}
      />
      <b className="w-[178px] absolute !m-[0] top-[461px] left-[calc(50%_-_75px)] inline-block h-7 shrink-0 z-[4]">
        <p className="m-0">Update Password</p>
      </b>
      <img
        className="w-[42px] absolute !m-[0] top-[26px] left-[16px] h-[35px] object-contain cursor-pointer z-[5]"
        alt=""
        src="/back-button.svg"
        onClick={onBackButtonIconClick}
      />
      <div className="w-[95px] absolute !m-[0] top-[198px] left-[25px] font-semibold inline-block h-[29px] shrink-0 z-[6]">
        Password
      </div>
      <div className="w-[338px] absolute !m-[0] top-[336px] left-[calc(50%_-_170px)] rounded-xl bg-gray-100 box-border h-[45px] z-[7] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[268px] absolute !m-[0] top-[344px] left-[37px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[8]"
        placeholder="Re-enter your new Password "
        type="password"
      />
      <div className="w-[173px] absolute !m-[0] top-[307px] left-[25px] font-semibold inline-block h-[29px] shrink-0 z-[9]">
        Confirm Password
      </div>
      <div className="w-[356px] absolute !m-[0] top-[159px] left-[25px] font-semibold font-inter text-silver-100 inline-block h-[29px] shrink-0 z-[10]">
        Create a new password.
      </div>
    </div>
  );
};

export default ResetPw;
