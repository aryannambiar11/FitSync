import PortalPopup from "../components/PortalPopup";
import ExcercisePopUp from "../components/ExcercisePopUp";
import { useState, useCallback } from "react";

const BurpeesPopup = ({ onClose }) => {

  const [isExcercisePopUpOpen, setExcercisePopUpOpen] = useState(false);

  const openExcercisePopUp = useCallback(() => {
    setExcercisePopUpOpen(true);
  }, []);

  const closeExercisePopUp = useCallback(() => {
    setExcercisePopUpOpen(false);
    onClose();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute center w-[359px] h-[387px] max-w-full max-h-full overflow-auto text-left text-13xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-9xl bg-dimgray-400" />
      <div className="absolute h-[13.95%] w-[44.85%] top-[4.65%] left-[7.52%] inline-block">
        Burpees
      </div>
      <div className="absolute h-[29.72%] w-[88.86%] top-[47.8%] right-[5.29%] bottom-[22.48%] left-[5.85%] bg-gainsboro-100" />
      <div className="absolute h-[26.1%] w-[84.12%] top-[48.84%] left-[8.64%] text-sm text-black inline-block">
        Burpees are often used in high-intensity interval training workouts.
        They are effective for improving cardiovascular endurance, strength, and
        overall conditioning.
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[12.66%] w-[55.99%] top-[82.43%] right-[22.84%] bottom-[4.91%] left-[21.17%]"
        onClick={openExcercisePopUp}
      >
        <button className="cursor-pointer [border:none] p-0 bg-deepskyblue-200 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs" />
        <b
          className="absolute h-[51.02%] w-[68.16%] top-[24.49%] left-[22.89%] text-base inline-block font-poppins text-colors-neutral-white text-left cursor-pointer"
          onClick={openExcercisePopUp}
        >
          ADD TO PLAN
        </b>
      </button>
      <img
        className="absolute h-[38.5%] w-[61.56%] top-[9.3%] right-[18.11%] bottom-[52.2%] left-[20.33%] rounded max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-75@2x.png"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[23px] left-[306px] w-[26px] h-[26.1px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] w-[26px] h-[26.1px]"
          alt=""
          src="/group-1.svg"
        />
      </button>
    </div>

    {isExcercisePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExercisePopUp}
        >
          <ExcercisePopUp onClose={closeExercisePopUp} recommendedExerciseName="Burpees" />
        </PortalPopup>
      )}
      
    </div>
  );
};

export default BurpeesPopup;
