import { useCallback } from "react";

const ExcercisePopUp = ({ onClose }) => {
  const onSaveButtonClick = useCallback(() => {
    // Please sync "refined plan page 2" to the project
  }, []);

  return (
    <div className="w-[302px] h-[291px] max-w-full max-h-full overflow-auto text-left text-base text-colors-neutral-white font-inter">
      <div className="absolute h-full w-[87.75%] top-[0%] right-[12.25%] bottom-[0%] left-[0%] rounded-3xs bg-black shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border border-[1px] border-solid border-colors-neutral-white" />
      <img
        className="absolute h-[7.22%] w-[21.36%] top-[57.73%] right-[34.27%] bottom-[35.05%] left-[44.37%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/icon-plus.svg"
      />
      <img
        className="absolute h-[7.22%] w-[21.36%] top-[35.05%] right-[34.6%] bottom-[57.73%] left-[44.04%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/icon-plus.svg"
      />
      <div
        className="absolute h-[9.38%] w-[25.2%] top-[87.29%] right-[69.17%] bottom-[3.33%] left-[5.63%] cursor-pointer text-center font-poppins"
        onClick={onClose}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-5.svg"
        />
        <b className="absolute h-[77.29%] w-[82%] top-[8.42%] left-[6.7%] inline-block">
          Cancel
        </b>
      </div>
      <div className="absolute h-[6.87%] w-[6.62%] top-[57.39%] right-[31.46%] bottom-[35.74%] left-[61.92%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-gainsboro-200 box-border border-[2px] border-solid border-colors-neutral-white" />
        <div className="absolute h-[8%] w-[52%] top-[46%] right-[24%] bottom-[46%] left-[24%] rounded-12xs bg-colors-neutral-white" />
        <div className="absolute h-[8%] w-[52%] top-[24%] right-[-6%] bottom-[68%] left-[54%] rounded-12xs bg-colors-neutral-white [transform:_rotate(90deg)] [transform-origin:0_0]" />
      </div>
      <img
        className="absolute h-[6.87%] w-[6.62%] top-[35.05%] right-[31.46%] bottom-[58.08%] left-[61.92%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/icon-plus.svg"
      />
      <img
        className="absolute h-[8.93%] w-[13.58%] top-[74.23%] right-[81.79%] bottom-[16.84%] left-[4.64%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/time-minutes-box.svg"
      />
      <img
        className="absolute h-[8.93%] w-[13.58%] top-[74.23%] right-[61.92%] bottom-[16.84%] left-[24.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/time-minutes-box.svg"
      />
      <img
        className="absolute h-[10.31%] w-[40.07%] top-[54.3%] right-[55.3%] bottom-[35.4%] left-[4.64%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/repitition-box.svg"
      />
      <div className="absolute h-[29.9%] w-[77.48%] top-[14.09%] right-[18.21%] bottom-[56.01%] left-[4.3%]">
        <img
          className="absolute h-[34.48%] w-full top-[0%] right-[0%] bottom-[65.52%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/excercise-name.svg"
        />
        <img
          className="absolute h-[33.33%] w-[51.88%] top-[66.67%] right-[48.12%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-6.svg"
        />
      </div>
      <div className="absolute h-[5.15%] w-[47.35%] top-[7.22%] left-[4.3%] inline-block">
        <p className="m-0">Exercise Name:</p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute h-[5.15%] w-[34.11%] top-[47.42%] left-[4.3%] inline-block">
        Repetitions:
      </div>
      <div className="absolute h-[5.5%] w-[34.11%] top-[27.49%] left-[4.3%] inline-block">
        <p className="m-0">Sets:</p>
        <p className="m-0">&nbsp;</p>
      </div>
      <input
        className="[border:none] [outline:none] font-poppins text-base bg-[transparent] absolute h-[7.56%] w-[33.44%] top-[35.05%] left-[5.96%] text-dimgray-200 text-left inline-block mix-blend-normal"
        placeholder="Type Here"
        type="text"
      />
      <input
        className="[border:none] [outline:none] font-poppins text-base bg-[transparent] absolute h-[7.56%] w-[72.52%] top-[15.12%] left-[5.63%] text-dimgray-200 text-left inline-block mix-blend-normal"
        placeholder="Press Here to Type"
        type="text"
      />
      <input
        className="[border:none] [outline:none] font-poppins text-base bg-[transparent] absolute h-[7.56%] w-[33.44%] top-[55.33%] left-[5.96%] text-dimgray-200 text-left inline-block mix-blend-normal"
        placeholder="Type Here"
        type="text"
      />
      <div className="absolute h-[5.84%] w-[20.53%] top-[66.67%] left-[4.3%] inline-block">
        Time:
      </div>
      <div className="absolute h-[8.59%] w-[29.47%] top-[35.74%] left-[70.53%] text-mini inline-block">
        Sets
      </div>
      <div className="absolute h-[11%] w-[27.81%] top-[57.39%] left-[70.53%] inline-block">
        Reps
      </div>
      <div className="absolute h-[5.84%] w-[3.64%] top-[75.6%] left-[20.86%] text-xs inline-block">
        :
      </div>
      <input
        className="[border:none] [outline:none] font-inter text-xs bg-[transparent] absolute h-[5.5%] w-[7.95%] top-[75.95%] left-[7.62%] text-dimgray-700 text-left inline-block"
        placeholder="min"
        type="text"
      />
      <input
        className="[border:none] [outline:none] font-inter text-xs bg-[transparent] absolute h-[5.5%] w-[7.62%] top-[75.95%] left-[27.48%] text-dimgray-700 text-left inline-block"
        placeholder="sec"
        type="text"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[9.38%] w-[25.2%] top-[86.49%] right-[17.22%] bottom-[4.12%] left-[57.58%]"
        onClick={onSaveButtonClick}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-5.svg"
        />
        <b className="absolute h-[77.29%] w-[82%] top-[8.42%] left-[6.7%] text-base inline-block font-poppins text-colors-neutral-white text-center">
          Save
        </b>
      </button>
    </div>
  );
};

export default ExcercisePopUp;
