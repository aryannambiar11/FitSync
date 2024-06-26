import { useState, useCallback, useEffect } from "react";
import UpdateProfilePopUp from "../components/UpdateProfilePopUp";
import PortalPopup from "../components/PortalPopup";
import UpdateProfilePicturePopUp from "../components/UpdateProfilePicturePopUp";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
  const [isUpdateProfilePopUpOpen, setUpdateProfilePopUpOpen] = useState(false);
  const [isChangePhotoPopUpOpen, setChangePhotoPopUpOpen] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [units, setUnits] = useState('lbs');
  const [pushNotifications, setPushNotifications] = useState('No');

  const openUpdateProfilePopUp = useCallback(() => {
    setUpdateProfilePopUpOpen(true);
  }, []);

  const closeUpdateProfilePopUp = useCallback(() => {
    setUpdateProfilePopUpOpen(false);
  }, []);

  const onBackButtonIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const openChangePhotoPopUp = useCallback(() => {
    setChangePhotoPopUpOpen(true);
  }, []);

  const closeChangePhotoPopUp = useCallback(() => {
    setChangePhotoPopUpOpen(false);
  }, []);

  const onChangePasswordClick = useCallback(() => {
    navigate("/reset-pw");
  }, [navigate]);

  const handleFullNameChange = useCallback((event) => {
    setFullName(event.target.value);
  }, []);

  const handleSaveButtonClick = () => {
    openUpdateProfilePopUp();
  };

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);


  useEffect(() => {
    const userDataString = window.sessionStorage.getItem("userData");
    if (userDataString) {
      const userDataObj = JSON.parse(userDataString);
      setUserData(userDataObj);
    }

    const storedUnits = localStorage.getItem("units");
    if (storedUnits) {
      setUnits(storedUnits);
    }

    const storedPushNotifications = localStorage.getItem("pushNotifications");
    if (storedPushNotifications) {
      setPushNotifications(storedPushNotifications);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("units", units);
  }, [units]);

  useEffect(() => {
    localStorage.setItem("pushNotifications", pushNotifications);
  }, [pushNotifications]);

  const handleYesButtonClick = () => {
    // Splitting full name into first name and last name
    const [firstName, lastName] = fullName.split(" ");

    // Update sessionStorage
    const updatedUserData = {
      ...userData,
      firstName,
      lastName,
      email,
    };
    setUserData(updatedUserData);
    window.sessionStorage.setItem("userData", JSON.stringify(updatedUserData));

    closeUpdateProfilePopUp();

    navigate("/profile-page-refined");
  };

  return (
    <>
      <div className="w-full relative h-[844px] text-left text-xl text-colors-neutral-white font-poppins">
        <div className="absolute h-full w-full top-[0%] right-[0.26%] bottom-[0%] left-[-0.26%] bg-black box-border border-[1px] border-solid border-black" />
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
            checked={units === 'lbs'}
            onChange={() => setUnits('lbs')}
            defaultChecked
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
            checked={pushNotifications === 'No'}
            onChange={() => setPushNotifications('No')}
            defaultChecked
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
            checked={units === 'kgs'}
            onChange={() => setUnits('kgs')}
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
            checked={pushNotifications === 'Yes'}
            onChange={() => setPushNotifications('Yes')}
          />
          <div className="absolute h-full w-[73.08%] top-[0%] left-[26.92%] font-medium inline-block">
            Yes
          </div>
        </div>
        <div
          className="absolute h-[5.45%] w-[57.44%] top-[86.85%] right-[21.28%] bottom-[7.7%] left-[21.28%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer text-center text-3xl"
          onClick={handleSaveButtonClick}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-514.svg"
          />
          <b className="absolute h-[75.43%] w-[49.64%] top-[13.26%] left-[26.88%] inline-block">
            Save
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
          <div className="absolute h-[9.54%] w-[40.00%] top-[87.38%] left-[2.50%] font-medium inline-block">
            {userData.password ? '***'.repeat(userData.password.length) : ''}
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
        <div
          className="absolute top-[22.27%] left-[41.28%] text-xs text-deepskyblue-200 cursor-pointer"
          onClick={openChangePhotoPopUp}
        >
          Change Picture
        </div>
        <input
          className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] absolute top-[253px] left-[37px] text-dimgray-300 text-left inline-block w-[297px] h-[29px]"
          placeholder="Press Here to Type"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <input
          className="[border:none] [outline:none] font-medium font-poppins text-xl bg-[transparent] absolute top-[335px] left-[37px] text-dimgray-300 text-left inline-block w-[297px] h-[29px]"
          placeholder="Press Here to Type"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[467px] left-[25px] text-base font-semibold font-poppins text-deepskyblue-100 text-left inline-block w-[148px] h-[25px]"
          onClick={onChangePasswordClick}
        >
          Change Password
        </button>
      </div>
      {isUpdateProfilePopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUpdateProfilePopUp}
        >
          <UpdateProfilePopUp
            fullName={fullName}
            email={email} 
            onClose={closeUpdateProfilePopUp}
            onYesButtonClick={handleYesButtonClick} 
          />
        </PortalPopup>
      )}
      {isChangePhotoPopUpOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangePhotoPopUp}
        >
          <UpdateProfilePicturePopUp onClose={closeChangePhotoPopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default EditProfilePage;
