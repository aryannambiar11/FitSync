const NameTemplatePopup = ({ onClose }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute center w-[336px] h-[185px] max-w-full max-h-full overflow-auto text-left text-base text-colors-neutral-white font-inter">
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-black box-border w-[336px] h-[185px] border-[1px] border-solid border-colors-neutral-white" />
      <div className="absolute top-[20.4px] left-[17.1px] inline-block w-[247.8px] h-[43.1px]">
        Name Workout Template:
      </div>
      <div className="absolute top-[63.5px] left-[17.1px] bg-black box-border w-[299.2px] h-[43.1px] border-[1px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-inter text-base bg-[transparent] absolute top-[75.1px] left-[26.3px] text-dimgray-200 text-left inline-block w-[254.6px] h-[25.2px]"
        placeholder="Press Here to Type"
        type="text"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[20px] left-[290px] w-[26px] h-[26px]"
        onClick={onClose}
      >
        <img
          className="absolute top-[0px] left-[0px] w-[26px] h-[26px]"
          alt=""
          src="/group-11.svg"
        />
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[24.11%] w-[55.06%] top-[66.49%] right-[22.92%] bottom-[9.41%] left-[22.02%]"
        onClick={onClose}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-58.svg"
        />
        <b className="absolute h-[75.11%] w-4/5 top-[13.23%] left-[8.81%] text-3xl inline-block font-poppins text-colors-neutral-white text-center">
          CONFIRM
        </b>
      </button>
    </div>
    </div>
  );
};

export default NameTemplatePopup;
