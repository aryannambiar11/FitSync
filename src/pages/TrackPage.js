import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TrackPage = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="w-full relative h-[844px] text-left text-13xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-[69.89%] top-[0%] right-[30.11%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
      <div
        className="absolute h-[5.28%] w-[33.15%] top-[68.6%] right-[50.72%] bottom-[26.11%] left-[16.13%] cursor-pointer text-center text-3xl"
        onClick={onLoginButtonContainerClick}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-5.svg"
        />
        <b className="absolute h-[75.11%] w-4/5 top-[13.23%] left-[8.81%] inline-block">
          CONFIRM
        </b>
      </div>
      <img
        className="absolute h-[4.15%] w-[7.53%] top-[4.38%] right-[89.61%] bottom-[91.47%] left-[2.87%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
        alt=""
        src="/back-button.svg"
        onClick={onBackButtonIconClick}
      />
      <div className="absolute h-[4.98%] w-[58.06%] top-[15.88%] left-[5.91%] inline-block">
        Today’s Weight:
      </div>
      <div className="absolute h-[4.98%] w-[45.52%] top-[33.41%] left-[5.91%] flex items-center">
        Did you meet today’s goal?
      </div>
      <div className="absolute h-[4.98%] w-[45.52%] top-[44.79%] left-[19.18%] flex items-center">
        No
      </div>
      <div className="absolute h-[4.98%] w-[45.52%] top-[44.79%] left-[50.9%] flex items-center">
        Yes
      </div>
      <img
        className="absolute h-[7.23%] w-[36.92%] top-[2.13%] right-[45.52%] bottom-[90.64%] left-[17.56%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo-main-screen@2x.png"
      />
      <input
        className="[outline:none] font-poppins text-xl bg-silver-300 absolute h-[6.28%] w-[53.94%] top-[22.16%] right-[39.78%] bottom-[71.56%] left-[6.27%] rounded-lg box-border pt-2.5 px-[7px] pb-[11px] text-dimgray-500 border-[1px] border-solid border-darkgray"
        placeholder="Press Here to Type"
        type="text"
      />
      <input
        className="cursor-pointer m-0 absolute h-[5.57%] w-[8.42%] top-[44.43%] right-[83.87%] bottom-[50%] left-[7.71%] rounded-[50%] bg-black box-border border-[3px] border-solid border-colors-neutral-white"
        type="radio"
        name="todaygoal"
      />
      <input
        className="cursor-pointer m-0 absolute h-[5.57%] w-[8.42%] top-[44.43%] right-[51.25%] bottom-[50%] left-[40.32%] rounded-[50%] bg-black box-border border-[3px] border-solid border-colors-neutral-white"
        type="radio"
        name="todaygoal"
      />
    </div>
  );
};

export default TrackPage;
