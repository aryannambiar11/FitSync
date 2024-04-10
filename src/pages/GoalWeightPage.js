import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GoalWeightPage = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="w-full relative h-[894px] text-left text-13xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black box-border border-[1px] border-solid border-black" />
      <div
        className="absolute h-[5.29%] w-[47.43%] top-[68.6%] right-[29.51%] bottom-[26.11%] left-[23.06%] cursor-pointer text-center text-3xl"
        onClick={onLoginButtonContainerClick}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-56.svg"
        />
        <b className="absolute h-[75.05%] w-[80.01%] top-[13.11%] left-[8.8%] inline-block">
          CONFIRM
        </b>
      </div>
      <img
        className="absolute h-[4.15%] w-[10.76%] top-[4.38%] right-[85.14%] bottom-[91.47%] left-[4.1%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
        alt=""
        src="/back-button5.svg"
        onClick={onBackButtonIconClick}
      />
      <div className="absolute h-[4.98%] w-[83.06%] top-[15.87%] left-[8.47%] inline-block">
        Today’s Weight:
      </div>
      <div className="absolute h-[4.98%] w-[65.11%] top-[33.41%] left-[8.47%] flex items-center">
        Did you meet today’s goal?
      </div>
      <div className="absolute h-[4.98%] w-[65.11%] top-[44.79%] left-[27.43%] flex items-center">
        No
      </div>
      <div className="absolute h-[5.03%] w-[14.72%] top-[44.74%] left-[72.86%] flex items-center">
        Yes
      </div>
      <img
        className="absolute h-[7.23%] w-[52.81%] top-[2.14%] right-[22.07%] bottom-[90.64%] left-[25.11%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo-profile-page1@2x.png"
      />
      <input
        className="[outline:none] font-poppins text-xl bg-silver-300 absolute h-[6.28%] w-[77.18%] top-[22.16%] right-[13.85%] bottom-[71.57%] left-[8.97%] rounded-lg box-border pt-[10.600000000000136px] px-[7.399999999999864px] pb-[11.599999999999774px] text-dimgray-500 border-[1px] border-solid border-darkgray"
        placeholder="Press Here to Type"
        type="text"
      />
      <input
        className="cursor-pointer m-0 absolute h-[5.57%] w-[12.04%] top-[44.43%] right-[76.94%] bottom-[50%] left-[11.03%] rounded-[50%] bg-black box-border border-[3px] border-solid border-colors-neutral-white"
        type="radio"
        name="todaygoal"
      />
      <input
        className="cursor-pointer m-0 absolute h-[5.57%] w-[12.04%] top-[44.43%] right-[30.28%] bottom-[50%] left-[57.68%] rounded-[50%] bg-black box-border border-[3px] border-solid border-colors-neutral-white"
        type="radio"
        name="todaygoal"
      />
    </div>
  );
};

export default GoalWeightPage;
