import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LogOutPopUp = ({ onClose }) => {
  const navigate = useNavigate();

  const onYesButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-[310px] h-[230.1px] max-w-full max-h-full overflow-auto text-center text-xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-9xl bg-deepskyblue-200" />
      <div className="absolute h-[15.6%] w-[67.74%] top-[13.91%] left-[16.13%] font-semibold inline-block">
        Are you sure you want to log out?
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[23.08%] w-[41.94%] top-[50.24%] right-[5.48%] bottom-[26.68%] left-[52.58%]"
        onClick={onYesButtonClick}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-510.svg"
        />
        <b className="absolute h-[77.4%] w-[82%] top-[8.29%] left-[6.69%] text-base inline-block font-poppins text-colors-neutral-white text-center">
          Save
        </b>
        <div className="absolute h-[57.63%] w-[58.54%] top-[21.09%] right-[19.15%] bottom-[21.28%] left-[22.31%]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-511.svg"
          />
          <b className="absolute h-[77.45%] w-[82%] top-[8.5%] left-[6.7%] text-base inline-block font-poppins text-colors-neutral-white text-center">
            YES
          </b>
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[23.08%] w-[41.94%] top-[50.24%] right-[51.94%] bottom-[26.68%] left-[6.13%]"
        onClick={onClose}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="/no-button.svg"
          onClick={onClose}
        />
        <b className="absolute h-[48.59%] w-[81.54%] top-[25.42%] left-[8.46%] text-base inline-block font-poppins text-colors-neutral-white text-center">
          NO
        </b>
      </button>
    </div>
  );
};

export default LogOutPopUp;
