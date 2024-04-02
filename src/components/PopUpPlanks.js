const PopUpPlanks = ({ onClose }) => {
  return (
    <div className="w-[359px] h-[387px] max-w-full max-h-full overflow-auto text-left text-13xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-9xl bg-dimgray-400" />
      <img
        className="absolute h-[7.24%] w-[7.8%] top-[7.24%] right-[7.24%] bottom-[85.53%] left-[84.96%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/cross-button.svg"
        onClick={onClose}
      />
      <div className="absolute h-[13.95%] w-[44.85%] top-[8.01%] left-[5.29%] inline-block">
        Planks
      </div>
      <img
        className="absolute h-[38.24%] w-[82.73%] top-[10.85%] right-[9.75%] bottom-[50.9%] left-[7.52%] rounded-[21px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/plank-photo@2x.png"
      />
      <div className="absolute h-[29.72%] w-[88.86%] top-[47.55%] right-[5.29%] bottom-[22.74%] left-[5.85%] bg-gainsboro-100" />
      <div className="absolute h-[29.2%] w-[84.68%] top-[49.1%] left-[7.8%] text-sm text-black inline-block">
        Plank exercises are a core-strengthening exercise that primarily targets
        the muscles in your abdomen, lower back, and shoulders.
      </div>
      <div
        className="absolute h-[12.66%] w-[64.07%] top-[81.65%] right-[18.38%] bottom-[5.68%] left-[17.55%] cursor-pointer text-base"
        onClick={onClose}
      >
        <div
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-deepskyblue-200 cursor-pointer"
          onClick={onClose}
        />
        <b className="absolute h-[57.14%] w-[58.7%] top-[22.45%] left-[27.39%] inline-block">
          ADD TO PLAN
        </b>
      </div>
    </div>
  );
};

export default PopUpPlanks;
