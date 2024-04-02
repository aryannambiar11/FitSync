import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import GoalPageRefinedIdea from "./pages/GoalPageRefinedIdea";
import ProfilePageChangePic from "./pages/ProfilePageChangePic";
import ProfilePageRefined1 from "./pages/ProfilePageRefined1";
import TrackPage from "./pages/TrackPage";
import GoalWeightPage from "./pages/GoalWeightPage";
import WrongPw from "./pages/WrongPw";
import HomePage from "./pages/HomePage";
import ForgotPw from "./pages/ForgotPw";
import ResetPw from "./pages/ResetPw";
import ConfirmPwChange from "./pages/ConfirmPwChange";
import SignUpPage from "./pages/SignUpPage";
import RefinedPlanPage1Before from "./pages/RefinedPlanPage1Before";
import GoalPageRefined from "./pages/GoalPageRefined";
import WorkoutPageChecklist from "./pages/WorkoutPageChecklist";
import ProfilePageRefined from "./pages/ProfilePageRefined";
import EditProfilePage from "./pages/EditProfilePage";
import TrackPage1 from "./pages/TrackPage1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/goal-page-refined-idea":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page-change-pic":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile-page1":
        title = "";
        metaDescription = "";
        break;
      case "/track-page1":
        title = "";
        metaDescription = "";
        break;
      case "/goalweight-page":
        title = "";
        metaDescription = "";
        break;
      case "/wrong-pw":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-pw":
        title = "";
        metaDescription = "";
        break;
      case "/reset-pw":
        title = "";
        metaDescription = "";
        break;
      case "/confirm-pw-change":
        title = "";
        metaDescription = "";
        break;
      case "/log-in-page":
        title = "";
        metaDescription = "";
        break;
      case "/refined-plan-page-1-before":
        title = "";
        metaDescription = "";
        break;
      case "/goal-page-refined":
        title = "";
        metaDescription = "";
        break;
      case "/workout-page-checklist":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page-refined":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/track-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogInPage />} />
      <Route path="/goal-page-refined-idea" element={<GoalPageRefinedIdea />} />
      <Route
        path="/profile-page-change-pic"
        element={<ProfilePageChangePic />}
      />
      <Route path="/edit-profile-page1" element={<ProfilePageRefined1 />} />
      <Route path="/track-page1" element={<TrackPage />} />
      <Route path="/goalweight-page" element={<GoalWeightPage />} />
      <Route path="/wrong-pw" element={<WrongPw />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/forgot-pw" element={<ForgotPw />} />
      <Route path="/reset-pw" element={<ResetPw />} />
      <Route path="/confirm-pw-change" element={<ConfirmPwChange />} />
      <Route path="/log-in-page" element={<SignUpPage />} />
      <Route
        path="/refined-plan-page-1-before"
        element={<RefinedPlanPage1Before />}
      />
      <Route path="/goal-page-refined" element={<GoalPageRefined />} />
      <Route
        path="/workout-page-checklist"
        element={<WorkoutPageChecklist />}
      />
      <Route path="/profile-page-refined" element={<ProfilePageRefined />} />
      <Route path="/edit-profile-page" element={<EditProfilePage />} />
      <Route path="/track-page" element={<TrackPage1 />} />
    </Routes>
  );
}
export default App;
