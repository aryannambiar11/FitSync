import {useState, useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import CreatePlanButton from "../components/CreatePlanButton";


const HomePage = () => {
  const navigate = useNavigate();
  const [userGoalData, setUserGoalData] = useState({});
  let goal = userGoalData.goal
  let dailyGoal = userGoalData.dailyGoal
  let unit = "";


  useEffect(() => {
    const storedUserGoalData = sessionStorage.getItem("userGoalData");
    if (storedUserGoalData) {
      setUserGoalData(JSON.parse(storedUserGoalData));
    }
  }, []);

  const [userOptionData, setUserOptionData] = useState({});

 
    const storedUnits = localStorage.getItem("units");
    let currentUnit = "";
    const previousUnit = localStorage.getItem("previousUnit");

    // Check if there's a stored unit preference
    if (storedUnits === "kgs" || storedUnits === "lbs") {
      currentUnit = storedUnits;
    } else {
      // Default to lbs if no preference is found
      currentUnit = "lbs";
    }


    if (currentUnit === "kgs") {
      unit = " kg";
    } else {
      unit = " lbs";
    }

    if (currentUnit !== previousUnit) {
      // Retrieve userGoalData from sessionStorage
      const storedItem = sessionStorage.getItem("userGoalData");
      let userGoalData = {};
    
      if (storedItem) {
        userGoalData = JSON.parse(storedItem);

      }
    
      if (unit === " kg") {
        // Update the goal property in userGoalData
        userGoalData.goal = (parseFloat(userGoalData.goal) * 0.453592).toFixed(1); // Convert lbs to kg


      } else {
        // Update the goal property in userGoalData
        userGoalData.goal = (parseFloat(userGoalData.goal) * 2.20462).toFixed(1); // Convert kg to lbs



      }
    
      // Stringify the updated userGoalData and store it back into sessionStorage
      sessionStorage.setItem("userGoalData", JSON.stringify(userGoalData));
    
    }

    let option = ""
    if (userOptionData != "Lose " && userOptionData != "Gain " && userOptionData != "Maintain ") {
      option  = ""; 
      goal = "";
      unit = "";
    }
    else {
      option = userOptionData;
    }

    // Store the initial value of unit in previousUnits
     localStorage.setItem("previousUnit", storedUnits);

  useEffect(() => {
    const storedUserOptionData = sessionStorage.getItem("option");
    if (storedUserOptionData) {
      setUserOptionData(storedUserOptionData);

    }
  }, []);

  const onWorkOutButtonClick = useCallback(() => {
    navigate("/workout-page-checklist");
  }, [navigate]);

  const onTrackWeightButtonClick = useCallback(() => {
    navigate("/track-page");
  }, [navigate]);

  const onProfileButtonImageClick = useCallback(() => {
    navigate("/profile-page-refined");
  }, [navigate]);

  const onEditButtonContainerClick = useCallback(() => {
    navigate("/goal-page-refined");
  }, [navigate]);


  return (
    <div className="w-full relative h-[844px] text-center text-xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[6.87%] w-[86.41%] top-[68.13%] right-[7.18%] bottom-[25%] left-[6.41%]"
        onClick={onWorkOutButtonClick}
      >
        <img
          className="absolute h-[98.28%] w-full top-[0%] right-[0%] bottom-[1.72%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-561.svg"
        />
        <b className="absolute h-[74.14%] w-[67.39%] top-[25.86%] left-[22.55%] text-xl inline-block font-poppins text-colors-neutral-white text-center">
          START WORKOUT
        </b>
        <div className="absolute h-[41.38%] w-[10.98%] top-[25.86%] right-[76.85%] bottom-[32.76%] left-[12.17%]">
          <img
            className="absolute h-[70.83%] w-[18.92%] top-[16.67%] right-[81.08%] bottom-[12.5%] left-[0%] rounded-10xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-631.svg"
          />
          <div className="absolute h-[70.83%] w-[18.92%] top-[16.67%] right-[0%] bottom-[12.5%] left-[81.08%] rounded-10xs bg-colors-neutral-white" />
          <div className="absolute h-full w-[16.22%] top-[0%] right-[75.68%] bottom-[0%] left-[8.11%] rounded-10xs bg-colors-neutral-white" />
          <div className="absolute h-full w-[16.22%] top-[0%] right-[10.81%] bottom-[0%] left-[72.97%] rounded-10xs bg-colors-neutral-white" />
          <div className="absolute h-[20.83%] w-[62.16%] top-[41.67%] right-[18.92%] bottom-[37.5%] left-[18.92%] bg-colors-neutral-white" />
        </div>
      </button>
      <div
        className="absolute h-[6.75%] w-[86.41%] top-[88.39%] right-[7.18%] bottom-[4.86%] left-[6.41%] cursor-pointer"
        onClick={onTrackWeightButtonClick}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-561.svg"
        />
        <b className="absolute h-[75.44%] w-[67.39%] top-[24.56%] left-[20.18%] inline-block">
          TRACK PROGRESS
        </b>
        <img
          className="absolute h-[68.42%] w-[10.68%] top-[15.79%] right-[80.42%] bottom-[15.79%] left-[8.9%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/track-weight-icon.svg"
        />
      </div>
      <CreatePlanButton />
      <img
        className="absolute h-[6.75%] w-[13.59%] top-[1.3%] right-[4.1%] bottom-[91.94%] left-[82.31%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt=""
        src="/profile-button@2x.png"
        onClick={onProfileButtonImageClick}
      />
      <div className="absolute h-[2.73%] w-[36.15%] top-[11.14%] left-[10.77%] text-left inline-block">
        Goals:
      </div>
      <div className="absolute h-[10.19%] w-[78.46%] top-[15.17%] right-[10.77%] bottom-[74.64%] left-[10.77%] text-left">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-64.svg"
        />
        <div className="absolute top-[48px] left-[9px] inline-block w-[400px] h-[30px]">{`Daily Goal: `}{dailyGoal}</div>
        <div className="absolute top-[11px] left-[9px] inline-block w-[400px] h-[30px]">{`Overall Goal: `}{option+goal+unit}</div>
      </div>
      <div
        className="absolute h-[3.44%] w-[18.46%] top-[10.66%] right-[10.77%] bottom-[85.9%] left-[70.77%] cursor-pointer text-black"
        onClick={onEditButtonContainerClick}
      >
        <div className="absolute h-[91.72%] w-full top-[8.28%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-deepskyblue-200" />
        <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
          EDIT
        </div>
      </div>
      <img
        className="absolute h-[7.23%] w-[52.82%] top-[1.3%] right-[24.62%] bottom-[91.47%] left-[22.56%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo-main-screen@2x.png"
      />
      <div className="absolute h-[36.97%] w-[83.33%] top-[29.27%] right-[9.49%] bottom-[33.77%] left-[7.18%] text-2xs text-colors-neutral-gray-3 font-abeezee">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_16px_16px_rgba(50,_50,_71,_0.08),_0px_24px_32px_rgba(50,_50,_71,_0.08)]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-black" />
          <img
            className="absolute h-[60.32%] w-[80.62%] top-[20.8%] right-[5.85%] bottom-[18.88%] left-[13.54%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/graph-lines.svg"
          />
          <div className="absolute h-[16.7%] w-[82.46%] top-[42.95%] right-[5.23%] bottom-[40.35%] left-[12.31%]">
            <div className="absolute h-[27.06%] w-[5.22%] top-[72.94%] right-[0%] bottom-[0%] left-[94.78%] rounded-6xs bg-deepskyblue-200 shadow-[0px_2px_2px_rgba(50,_50,_71,_0.06),_0px_2px_4px_rgba(50,_50,_71,_0.06)] box-border border-[2px] border-solid border-colors-neutral-white" />
            <div className="absolute h-[27.06%] w-[5.22%] top-[71.02%] right-[20.52%] bottom-[1.92%] left-[74.25%] rounded-6xs bg-deepskyblue-200 shadow-[0px_2px_2px_rgba(50,_50,_71,_0.06),_0px_2px_4px_rgba(50,_50,_71,_0.06)] box-border border-[2px] border-solid border-colors-neutral-white" />
            <div className="absolute h-[27.06%] w-[5.22%] top-[42.23%] right-[39.18%] bottom-[30.71%] left-[55.6%] rounded-6xs bg-deepskyblue-200 shadow-[0px_2px_2px_rgba(50,_50,_71,_0.06),_0px_2px_4px_rgba(50,_50,_71,_0.06)] box-border border-[2px] border-solid border-colors-neutral-white" />
            <div className="absolute h-[27.06%] w-[5.22%] top-[32.63%] right-[56.72%] bottom-[40.31%] left-[38.06%] rounded-6xs bg-deepskyblue-200 shadow-[0px_2px_2px_rgba(50,_50,_71,_0.06),_0px_2px_4px_rgba(50,_50,_71,_0.06)] box-border border-[2px] border-solid border-colors-neutral-white" />
            <div className="absolute h-[27.06%] w-[5.22%] top-[28.79%] right-[75%] bottom-[44.15%] left-[19.78%] rounded-6xs bg-deepskyblue-200 shadow-[0px_2px_2px_rgba(50,_50,_71,_0.06),_0px_2px_4px_rgba(50,_50,_71,_0.06)] box-border border-[2px] border-solid border-colors-neutral-white" />
            <div className="absolute h-[27.06%] w-[5.22%] top-[0%] right-[94.78%] bottom-[72.94%] left-[2%] rounded-6xs bg-deepskyblue-200 shadow-[0px_2px_2px_rgba(50,_50,_71,_0.06),_0px_2px_4px_rgba(50,_50,_71,_0.06)] box-border border-[2px] border-solid border-colors-neutral-white" />
          </div>
          <div className="absolute h-[10.67%] w-[81.35%] top-[86.44%] right-[6.34%] bottom-[2.88%] left-[12.31%]">
            <div className="absolute h-[39.34%] w-[6.81%] top-[0%] left-[74.39%] leading-[13px] inline-block">
              Fri
            </div>
            <div className="absolute h-[39.04%] w-[10.21%] top-[0.9%] left-[53.71%] leading-[13px] inline-block">
              Thu
            </div>
            <div className="absolute h-[39.34%] w-[8.7%] top-[0%] left-[36.84%] leading-[13px] inline-block">
              Wed
            </div>
            <div className="absolute h-[39.04%] w-[13.24%] top-[60.96%] left-[44.25%] leading-[13px] inline-block">
              Week
            </div>
            <div className="absolute h-[39.34%] w-[8.7%] top-[0%] left-[18.42%] leading-[13px] inline-block">
              Tues
            </div>
            <div className="absolute h-[39.34%] w-[7.56%] top-[0%] left-[92.44%] leading-[13px] inline-block">
              Sat
            </div>
            <div className="absolute h-[39.34%] w-[8.7%] top-[0%] left-[0%] leading-[13px] inline-block">
              Mon
            </div>
          </div>
          <div className="absolute h-[63.56%] w-[6.15%] top-[19.04%] right-[88.62%] bottom-[17.4%] left-[5.23%] text-right">
            <div className="absolute h-[6.61%] w-full top-[93.39%] left-[0%] leading-[13px] inline-block">
              150
            </div>
            <div className="absolute h-[6.61%] w-full top-[74.58%] left-[0%] leading-[13px] inline-block">
              155
            </div>
            <div className="absolute h-[6.61%] w-full top-[55.82%] left-[0%] leading-[13px] inline-block">
              160
            </div>
            <div className="absolute h-[6.61%] w-full top-[37.07%] left-[0%] leading-[13px] inline-block">
              165
            </div>
            <div className="absolute h-[6.61%] w-full top-[18.26%] left-[0%] leading-[13px] inline-block">
              170
            </div>
            <div className="absolute h-[6.61%] w-full top-[0%] left-[0%] leading-[13px] inline-block">
              175
            </div>
          </div>
          <img
            className="absolute h-[3.85%] w-[12.43%] top-[45.83%] right-[71.14%] bottom-[50.32%] left-[16.43%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/line-15.svg"
          />
          <div className="absolute h-[0.64%] w-[11.38%] top-[50.32%] right-[56%] bottom-[49.04%] left-[32.62%] box-border border-t-[2px] border-solid border-deepskyblue-200" />
          <div className="absolute h-[0.64%] w-[13.23%] top-[57.05%] right-[9.23%] bottom-[42.31%] left-[77.54%] box-border border-t-[2px] border-solid border-deepskyblue-200" />
          <div className="absolute h-[0.64%] w-[11.8%] top-[50.5%] right-[23.23%] bottom-[42.31%] left-[46.54%] box-border border-t-[2px] border-solid border-deepskyblue-200" />
          <img
            className="absolute h-[23.62%] w-[40.62%] top-[41.89%] right-[26.46%] bottom-[34.49%] left-[32.92%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/line-17.svg"
          />
          <div className="absolute h-[4.17%] w-[21.85%] top-[55.77%] left-[-0.92%] leading-[13px] inline-block [transform:_rotate(-90deg)] [transform-origin:0_0] opacity-[0.9]">
            Weight (lbs)
          </div>
        </div>

      </div>
      <div className="absolute h-[2.73%] w-[36.15%] top-[27.84%] left-[10.77%] text-left inline-block">
        Progress:
      </div>
      <div className="absolute h-[0.24%] w-[86.15%] top-[86.97%] right-[7.69%] bottom-[12.8%] left-[6.15%] box-border border-t-[2px] border-solid border-dimgray-300" />
      <div className="absolute h-[0.24%] w-[86.15%] top-[76.66%] right-[7.18%] bottom-[23.1%] left-[6.67%] box-border border-t-[2px] border-solid border-dimgray-300" />
    </div>
  );
};

export default HomePage;
