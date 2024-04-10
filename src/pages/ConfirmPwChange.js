import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmPwChange = () => {
  const navigate = useNavigate();

  const onSignInButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-black h-[844px] overflow-hidden text-center text-13xl text-colors-neutral-white font-poppins">
      <div className="absolute top-[181px] left-[121px] rounded-sm h-[133px] flex flex-col items-start justify-start gap-[10px]">
        <div className="w-[147px] relative rounded-[50%] bg-gainsboro-100 h-[133px] z-[0]" />
        <img
          className="w-[78px] absolute !m-[0] top-[27px] left-[35px] rounded-sm h-[78px] z-[1]"
          alt=""
          src="/star-1.svg"
        />
      </div>
      <div className="absolute top-[332px] right-[0px] font-semibold inline-block w-[390px] h-[41px]">
        <p className="m-0">Successful</p>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[402px] left-[26px] w-[337px] h-[59px]"
        onClick={onSignInButtonClick}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-xl bg-deepskyblue-300 w-[337px] h-[59px] cursor-pointer"
          onClick={onRectangleClick}
        />
        <b className="absolute top-[15px] left-[calc(50%_-_20.5px)] text-base inline-block font-poppins text-colors-neutral-white text-left w-[60px] h-[29px]">
          <p className="m-0">Log In</p>
        </b>
      </button>
      <img
        className="absolute top-[290px] left-[99px] rounded-10xs w-[33.3px] h-[32.6px]"
        alt=""
        src="/star-3.svg"
      />
      <img
        className="absolute top-[290px] left-[256px] rounded-10xs w-[33.3px] h-[32.6px]"
        alt=""
        src="/star-3.svg"
      />
      <img
        className="absolute top-[249px] left-[64px] rounded-10xs w-[52px] h-[46px]"
        alt=""
        src="/star-5.svg"
      />
      <img
        className="absolute top-[247px] left-[273px] rounded-10xs w-[52px] h-[46px]"
        alt=""
        src="/star-5.svg"
      />
    </div>
  );
};

export default ConfirmPwChange;
