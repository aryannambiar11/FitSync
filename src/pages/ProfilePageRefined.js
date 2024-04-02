import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePageRefined = () => {
  const navigate = useNavigate();

  const onUpdateButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="w-full relative h-[844px] text-left text-xl text-colors-neutral-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0.26%] bottom-[0%] left-[-0.26%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
      <img
        className="absolute h-[4.27%] w-[10.51%] top-[8.53%] right-[3.85%] bottom-[87.2%] left-[85.64%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/pencil3@2x.png"
      />
      <div className="absolute h-[4.5%] w-[24.36%] top-[63.39%] left-[7.69%] font-medium inline-block">
        Units:
      </div>
      <div className="absolute h-[5.81%] w-[38.72%] top-[70.38%] left-[7.69%] font-medium inline-block">
        Push Notifications:
      </div>
      <div className="absolute h-[4.5%] w-[33.33%] top-[63.63%] right-[20.51%] bottom-[31.87%] left-[46.15%]">
        <div className="absolute h-[78.95%] w-[23.08%] top-[0%] right-[76.92%] bottom-[21.05%] left-[0%] rounded-[50%] bg-gainsboro-100" />
        <input
          className="cursor-pointer m-0 absolute h-[68.42%] w-1/5 top-[5.26%] right-[78.46%] bottom-[26.32%] left-[1.54%] rounded-[50%] bg-black"
          type="radio"
          name="units"
        />
        <div className="absolute h-full w-[73.08%] top-[0%] left-[26.92%] font-medium inline-block">
          lbs
        </div>
      </div>
      <div className="absolute h-[4.5%] w-[33.33%] top-[73.93%] right-[20%] bottom-[21.56%] left-[46.67%]">
        <div className="absolute h-[78.95%] w-[23.08%] top-[0%] right-[76.92%] bottom-[21.05%] left-[0%] rounded-[50%] bg-gainsboro-100" />
        <input
          className="cursor-pointer m-0 absolute h-[68.42%] w-1/5 top-[5.26%] right-[78.46%] bottom-[26.32%] left-[1.54%] rounded-[50%] bg-black"
          type="radio"
          name="push"
        />
        <div className="absolute h-full w-[73.08%] top-[0%] left-[26.92%] font-medium inline-block">
          No
        </div>
      </div>
      <div className="absolute h-[4.5%] w-[33.33%] top-[63.39%] right-[-5.64%] bottom-[32.11%] left-[72.31%]">
        <div className="absolute h-[78.95%] w-[23.08%] top-[0%] right-[76.92%] bottom-[21.05%] left-[0%] rounded-[50%] bg-gainsboro-100" />
        <input
          className="cursor-pointer m-0 absolute h-[68.42%] w-1/5 top-[5.26%] right-[78.46%] bottom-[26.32%] left-[1.54%] rounded-[50%] bg-black"
          type="radio"
          name="units"
        />
        <div className="absolute h-full w-[73.08%] top-[0%] left-[26.92%] font-medium inline-block">
          kgs
        </div>
      </div>
      <div className="absolute h-[4.5%] w-[33.33%] top-[73.93%] right-[-5.64%] bottom-[21.56%] left-[72.31%]">
        <div className="absolute h-[78.95%] w-[23.08%] top-[0%] right-[76.92%] bottom-[21.05%] left-[0%] rounded-[50%] bg-gainsboro-100" />
        <input
          className="cursor-pointer m-0 absolute h-[68.42%] w-1/5 top-[5.26%] right-[78.46%] bottom-[26.32%] left-[1.54%] rounded-[50%] bg-black"
          type="radio"
          name="push"
        />
        <div className="absolute h-full w-[73.08%] top-[0%] left-[26.92%] font-medium inline-block">
          Yes
        </div>
      </div>
      <div
        className="absolute h-[5.45%] w-[57.44%] top-[86.85%] right-[21.28%] bottom-[7.7%] left-[21.28%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer text-center text-3xl"
        onClick={onUpdateButtonContainerClick}
      >
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-59.svg"
        />
        <b className="absolute h-[75.43%] w-[49.64%] top-[13.26%] left-[26.88%] inline-block">
          Sign Out
        </b>
      </div>
      <img
        className="absolute h-[10.9%] w-[22.56%] top-[9.95%] right-[36.41%] bottom-[79.15%] left-[41.03%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/profile-page-button2@2x.png"
      />
      <div className="absolute h-[28.44%] w-[86.41%] top-[26.07%] right-[6.92%] bottom-[45.5%] left-[6.67%] text-sm">
        <div className="absolute h-[18.17%] w-full top-[10.46%] right-[0%] bottom-[71.38%] left-[0%] rounded-lg bg-silver-300 box-border border-[1px] border-solid border-darkgray" />
        <div className="absolute h-[18.17%] w-full top-[44.63%] right-[0%] bottom-[37.21%] left-[0%] rounded-lg bg-silver-300 box-border border-[1px] border-solid border-darkgray" />
        <div className="absolute h-[18.17%] w-full top-[81.83%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-silver-300 box-border border-[1px] border-solid border-darkgray" />
        <div className="absolute h-[9.54%] w-[22.97%] top-[0%] left-[0%] font-medium inline-block">
          Name
        </div>
        <div className="absolute h-[9.54%] w-[12.26%] top-[34.17%] left-[0%] font-medium inline-block">{`Email `}</div>
        <div className="absolute h-[9.54%] w-[21.69%] top-[71.38%] left-[0%] font-medium inline-block">
          Password
        </div>
      </div>
      <img
        className="absolute h-[4.15%] w-[10.77%] top-[6.4%] right-[85.13%] bottom-[89.45%] left-[4.1%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
        alt=""
        src="/back-button4.svg"
        onClick={onBackButtonIconClick}
      />
      <img
        className="absolute h-[7.23%] w-[52.82%] top-[1.3%] right-[20.26%] bottom-[91.47%] left-[26.92%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo-main-screen@2x.png"
      />
      <img
        className="absolute h-[0.12%] w-[84.87%] top-[82.58%] right-[6.41%] bottom-[17.3%] left-[8.72%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
      />
    </div>
  );
};

export default ProfilePageRefined;
