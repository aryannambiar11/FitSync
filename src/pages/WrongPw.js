const WrongPw = () => {
  return (
    <div className="w-full relative bg-black h-[844px] overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] text-left text-base text-colors-neutral-white font-poppins">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[101px] shrink-0 object-cover z-[0]"
        alt=""
        src="/logo@2x.png"
      />
      <div className="w-[92px] absolute !m-[0] top-[125px] left-[226px] text-xl text-gray-300 text-right inline-block h-[31px] shrink-0 z-[1]">
        Sign Up
      </div>
      <div className="w-[95px] absolute !m-[0] top-[227px] left-[33px] font-semibold inline-block h-[29px] shrink-0 z-[2]">
        Your Email
      </div>
      <div className="w-[121px] absolute !m-[0] top-[164.5px] left-[47.5px] box-border h-[3px] z-[3] border-t-[3px] border-solid border-colors-neutral-white" />
      <div className="w-[62px] absolute !m-[0] top-[125px] left-[76px] text-xl text-deepskyblue-100 text-right inline-block h-[26px] shrink-0 z-[4]">
        Log in
      </div>
      <div className="w-[325px] absolute !m-[0] top-[256px] left-[calc(50%_-_157px)] rounded-xl bg-gray-100 box-border h-[45px] z-[5] border-[2px] border-solid border-colors-neutral-white" />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[277px] absolute !m-[0] top-[264px] left-[50px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[6]"
        placeholder="dingdong@cpscsucks.com"
        type="email"
      />
      <input
        className="[border:none] [outline:none] font-semibold font-poppins text-base bg-[transparent] w-[277px] absolute !m-[0] top-[379px] left-[50px] text-silver-200 text-left inline-block h-[29px] shrink-0 z-[7]"
        placeholder="dingdong@cpscsucks.com"
        type="email"
      />
      <div className="w-[95px] absolute !m-[0] top-[340px] left-[33px] font-semibold inline-block h-[29px] shrink-0 z-[8]">
        Password
      </div>
      <div className="w-[325px] absolute !m-[0] top-[369px] left-[calc(50%_-_157px)] rounded-xl bg-gray-100 box-border h-[45px] z-[9] border-[3px] border-solid border-red" />
      <div className="w-[180px] absolute !m-[0] top-[420px] left-[210px] font-semibold text-deepskyblue-100 inline-block h-[29px] shrink-0 z-[10]">
        Forgot Password?
      </div>
      <div className="w-[337px] absolute !m-[0] top-[471px] left-[26px] rounded-xl bg-deepskyblue-300 h-[59px] z-[11]" />
      <b className="w-[95px] absolute !m-[0] top-[486px] left-[calc(50%_-_37px)] inline-block h-[29px] shrink-0 z-[12]">
        Continue
      </b>
      <div className="w-[180px] absolute !m-[0] top-[420px] left-[33px] font-semibold text-deepskyblue-400 inline-block h-[29px] shrink-0 z-[13]">
        Wrong Password
      </div>
    </div>
  );
};

export default WrongPw;
