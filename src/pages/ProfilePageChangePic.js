import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePageChangePic = () => {
  const navigate = useNavigate();

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div className="w-full relative h-[844px] text-left text-base text-colors-neutral-white font-poppins">
      <div className="absolute top-[-2px] left-[0px] w-[390px] h-[844px] text-xl">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-17xl bg-black box-border border-[1px] border-solid border-black" />
        <img
          className="absolute h-[4.27%] w-[10.51%] top-[5.81%] right-[2.82%] bottom-[89.93%] left-[86.67%] max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
          src="/pencil@2x.png"
        />
        <div className="absolute h-[4.5%] w-[24.36%] top-[58.53%] left-[8.46%] font-medium inline-block">
          Units:
        </div>
        <div className="absolute h-[5.81%] w-[38.72%] top-[65.52%] left-[8.46%] font-medium inline-block">
          Push Notifications:
        </div>
        <div className="absolute h-[4.5%] w-[33.33%] top-[58.77%] right-[19.74%] bottom-[36.73%] left-[46.92%]">
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
        <div className="absolute h-[4.5%] w-[33.33%] top-[69.08%] right-[19.23%] bottom-[26.42%] left-[47.44%]">
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
        <div className="absolute h-[4.5%] w-[33.33%] top-[58.53%] right-[-6.41%] bottom-[36.97%] left-[73.08%]">
          <div className="absolute h-[78.95%] w-[23.08%] top-[0%] right-[76.92%] bottom-[21.05%] left-[0%] rounded-[50%] bg-gainsboro-100" />
          <div className="absolute h-[68.42%] w-1/5 top-[5.26%] right-[78.46%] bottom-[26.32%] left-[1.54%] rounded-[50%] bg-black" />
          <div className="absolute h-full w-[73.08%] top-[0%] left-[26.92%] font-medium inline-block">
            kgs
          </div>
        </div>
        <div className="absolute h-[4.5%] w-[33.33%] top-[69.08%] right-[-6.41%] bottom-[26.42%] left-[73.08%]">
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
      </div>
      <div className="absolute top-[391px] left-[207px] font-semibold text-deepskyblue-100 inline-block w-[180px] h-[29px]">
        Change Password
      </div>
      <div className="absolute h-[3.23%] w-[19.51%] top-[9.95%] right-[6.9%] bottom-[86.81%] left-[73.59%] text-center">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-5.svg"
        />
        <b className="absolute h-[77.29%] w-[82%] top-[8.42%] left-[6.7%] inline-block">
          Save
        </b>
      </div>
      <div className="absolute h-[5.46%] w-[57.44%] top-[84.12%] right-[22.82%] bottom-[10.41%] left-[19.74%] text-center text-3xl">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-5.svg"
        />
        <b className="absolute h-[75.27%] w-4/5 top-[13.23%] left-[8.79%] inline-block">
          Update Profile
        </b>
      </div>
      <div className="absolute h-[5.45%] w-[57.44%] top-[91%] right-[22.82%] bottom-[3.55%] left-[19.74%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-center text-3xl">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-5.svg"
        />
        <b className="absolute h-[75.43%] w-[49.64%] top-[13.26%] left-[26.88%] inline-block">
          Sign Out
        </b>
      </div>
      <img
        className="absolute h-[10.9%] w-[22.56%] top-[9.95%] right-[36.41%] bottom-[79.15%] left-[41.03%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/profile-page-button@2x.png"
      />
      <div className="absolute top-[21.8%] left-[40.26%] text-xs">
        Change Picture
      </div>
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
        <input
          className="[border:none] [outline:none] font-poppins text-xs bg-[transparent] absolute h-[8.75%] w-[40.95%] top-[15.42%] left-[3.86%] text-colors-neutral-white text-left inline-block"
          placeholder="Alex Rodriguez"
          type="text"
        />
        <input
          className="[border:none] [outline:none] font-poppins text-xs bg-[transparent] absolute h-[8.17%] w-[49.67%] top-[49.17%] left-[3.77%] text-colors-neutral-white text-left inline-block"
          placeholder="alexrodriguez@gmail.com"
          type="email"
        />
        <div className="absolute h-[8.17%] w-[11.34%] top-[86.83%] left-[3.77%] text-xs inline-block">
          ******
        </div>
      </div>
      <img
        className="absolute h-[4.15%] w-[10.77%] top-[6.4%] right-[85.13%] bottom-[89.45%] left-[4.1%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
        alt=""
        src="/back-button.svg"
        onClick={onBackButtonIconClick}
      />
      <img
        className="absolute h-[7.23%] w-[52.82%] top-[1.3%] right-[20.26%] bottom-[91.47%] left-[26.92%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/logo-plan-page@2x.png"
      />
      <img
        className="absolute h-[0.12%] w-[84.87%] top-[82.58%] right-[6.41%] bottom-[17.3%] left-[8.72%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
      />
      <img
        className="absolute top-[200px] left-[143px] w-[250px] h-[136px] object-cover"
        alt=""
        src="/screen-shot-20240329-at-450-1@2x.png"
      />
    </div>
  );
};

export default ProfilePageChangePic;
