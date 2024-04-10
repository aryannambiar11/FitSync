import { useState, useCallback } from "react";
import UpdateProfilePicturePopUp from "../components/UpdateProfilePicturePopUp";
import PortalPopup from "../components/PortalPopup";
import UpdateProfilePopUp from "../components/UpdateProfilePopUp";
import { useNavigate } from "react-router-dom";

const ProfilePageRefined1 = () => {
  const [isUpdateProfilePicturePopUpOpen, setUpdateProfilePicturePopUpOpen] =
    useState(false);
  const [isUpdateProfilePopUpOpen, setUpdateProfilePopUpOpen] = useState(false);
  const navigate = useNavigate();

  const onChangePasswordClick = useCallback(() => {
    navigate("/reset-pw");
  }, [navigate]);

  const openUpdateProfilePicturePopUp = useCallback(() => {
    setUpdateProfilePicturePopUpOpen(true);
  }, []);

  const closeUpdateProfilePicturePopUp = useCallback(() => {
    setUpdateProfilePicturePopUpOpen(false);
  }, []);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const openUpdateProfilePopUp = useCallback(() => {
    setUpdateProfilePopUpOpen(true);
  }, []);

  const closeUpdateProfilePopUp = useCallback(() => {
    setUpdateProfilePopUpOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative h-[835px] text-left text-xl text-colors-neutral-white font-poppins">
        <div className="absolute h-full w-full top-[-16.59%] right-[7.96%] bottom-[16.59%] left-[-7.96%] bg-black box-border border-[1px] border-solid border-black" />
        <img
          className="absolute h-[4.26%] w-[10.52%] top-[3.56%] right-[2.83%] bottom-[92.18%] left-[86.66%] max-w-full overflow-hidden max-h-full object-cover hidden"
          alt=""
          src="/pencil2@2x.png"
        />
        <div className="absolute h-[4.5%] w-[24.35%] top-[48.57%] left-[-0.76%] font-medium inline-block">
          Units:
        </div>
        <div className="absolute h-[5.81%] w-[38.72%] top-[55.57%] left-[-0.76%] font-medium inline-block">
          Push Notifications:
        </div>
        <div className="absolute h-[4.5%] w-[32.95%] top-[48.81%] right-[29.36%] bottom-[46.68%] left-[37.69%]">
          <div className="absolute h-[78.99%] w-[23.34%] top-[0%] right-[76.66%] bottom-[21.01%] left-[0%] rounded-[50%] bg-gainsboro-100" />
          <input
            className="cursor-pointer m-0 absolute h-[68.35%] w-[20.21%] top-[5.32%] right-[78.23%] bottom-[26.33%] left-[1.57%] rounded-[50%] bg-black"
            type="radio"
            name="units"
          />
          <div className="absolute h-full w-[73.9%] top-[0%] left-[26.1%] font-medium inline-block">
            lbs
          </div>
        </div>
        <div className="absolute h-[4.5%] w-[32.95%] top-[59.13%] right-[28.85%] bottom-[36.37%] left-[38.21%]">
          <div className="absolute h-[78.99%] w-[23.34%] top-[0%] right-[76.66%] bottom-[21.01%] left-[0%] rounded-[50%] bg-gainsboro-100" />
          <input
            className="cursor-pointer m-0 absolute h-[68.35%] w-[20.21%] top-[5.32%] right-[78.23%] bottom-[26.33%] left-[1.57%] rounded-[50%] bg-black"
            type="radio"
            name="push"
          />
          <div className="absolute h-full w-[73.9%] top-[0%] left-[26.1%] font-medium inline-block">
            No
          </div>
        </div>
        <div className="absolute h-[4.5%] w-[32.95%] top-[48.57%] right-[3.19%] bottom-[46.92%] left-[63.86%]">
          <div className="absolute h-[78.99%] w-[23.34%] top-[0%] right-[76.66%] bottom-[21.01%] left-[0%] rounded-[50%] bg-gainsboro-100" />
          <input
            className="cursor-pointer m-0 absolute h-[68.35%] w-[20.21%] top-[5.32%] right-[78.23%] bottom-[26.33%] left-[1.57%] rounded-[50%] bg-black"
            type="radio"
            name="units"
          />
          <div className="absolute h-full w-[73.9%] top-[0%] left-[26.1%] font-medium inline-block">
            kgs
          </div>
        </div>
        <div className="absolute h-[4.5%] w-[32.95%] top-[59.13%] right-[3.19%] bottom-[36.37%] left-[63.86%]">
          <div className="absolute h-[78.99%] w-[23.34%] top-[0%] right-[76.66%] bottom-[21.01%] left-[0%] rounded-[50%] bg-gainsboro-100" />
          <input
            className="cursor-pointer m-0 absolute h-[68.35%] w-[20.21%] top-[5.32%] right-[78.23%] bottom-[26.33%] left-[1.57%] rounded-[50%] bg-black"
            type="radio"
            name="push"
          />
          <div className="absolute h-full w-[73.9%] top-[0%] left-[26.1%] font-medium inline-block">
            Yes
          </div>
        </div>
        <div className="absolute h-[5.45%] w-[57.44%] top-[71.8%] right-[29.21%] bottom-[22.75%] left-[13.34%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] text-center text-3xl">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-54.svg"
          />
          <b className="absolute h-[75.38%] w-[49.62%] top-[10.77%] left-[24.12%] inline-block">
            Sign Out
          </b>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[347px] left-[-5px] text-base font-semibold font-poppins text-deepskyblue-100 text-left inline-block w-[148px] h-[25px]"
          onClick={onChangePasswordClick}
        >
          Change Password
        </button>
        <img
          className="absolute h-[10.9%] w-[22.56%] top-[-4.38%] right-[44.37%] bottom-[93.49%] left-[33.07%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/profile-page-button1@2x.png"
        />
        <div
          className="absolute top-[7.46%] left-[32.31%] text-xs text-deepskyblue-200 cursor-pointer"
          onClick={openUpdateProfilePicturePopUp}
        >
          Change Picture
        </div>
        <div className="absolute top-[97.9px] left-[-5.2px] w-[351.7px] h-[237.4px] text-sm">
          <div className="absolute top-[24.8px] left-[0px] w-[351.7px] h-[43.2px] text-xl text-dimgray-300">
            <div className="absolute top-[8.2px] left-[14.2px] font-medium inline-block w-[297px] h-[29px]">
              Press Here to Type
            </div>
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-silver-300 box-border border-[1px] border-solid border-darkgray" />
          </div>
          <div className="absolute top-[105.9px] left-[0px] w-[351.7px] h-[43.2px] text-xl text-dimgray-300">
            <div className="absolute top-[10.1px] left-[14.2px] font-medium inline-block w-[297px] h-[29px]">
              Press Here to Type
            </div>
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-silver-300 box-border border-[1px] border-solid border-darkgray" />
          </div>
          <div className="absolute h-[18.2%] w-full top-[81.84%] right-[0%] bottom-[-0.04%] left-[0%] rounded-lg bg-silver-300 box-border border-[1px] border-solid border-darkgray" />
          <div className="absolute h-[9.56%] w-[22.95%] top-[0%] left-[0%] font-medium inline-block">
            Name
          </div>
          <div className="absolute h-[9.56%] w-[12.25%] top-[34.16%] left-[0%] font-medium inline-block">{`Email `}</div>
          <div className="absolute h-[9.56%] w-[21.69%] top-[71.36%] left-[0%] font-medium inline-block">
            Password
          </div>
        </div>
        <img
          className="absolute h-[4.14%] w-[10.76%] top-[-9.95%] right-[90.52%] bottom-[105.81%] left-[-1.28%] max-w-full overflow-hidden max-h-full object-contain cursor-pointer"
          alt=""
          src="/back-button3.svg"
          onClick={onBackButtonIconClick}
        />
        <img
          className="absolute h-[7.22%] w-[52.83%] top-[-13.03%] right-[28.21%] bottom-[105.81%] left-[18.97%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/logo-profile-page@2x.png"
        />
        <img
          className="absolute h-[0.12%] w-[81.33%] top-[68.25%] right-[17.91%] bottom-[31.63%] left-[0.76%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
        />
        <div
          className="absolute h-[3.56%] w-[22.56%] top-[-4.38%] right-[13.1%] bottom-[100.83%] left-[64.35%] cursor-pointer text-center text-base"
          onClick={openUpdateProfilePopUp}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-55.svg"
          />
          <b className="absolute h-[77.44%] w-[82.03%] top-[8.42%] left-[6.64%] inline-block">
            Save
          </b>
        </div>
      </div>
      {isUpdateProfilePicturePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUpdateProfilePicturePopUp}
        >
          <UpdateProfilePicturePopUp onClose={closeUpdateProfilePicturePopUp} />
        </PortalPopup>
      )}
      {isUpdateProfilePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUpdateProfilePopUp}
        >
          <UpdateProfilePopUp onClose={closeUpdateProfilePopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProfilePageRefined1;
