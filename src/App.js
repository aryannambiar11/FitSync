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
import EditProfilePage from "./pages/EditProfilePage";
import HomePage from "./pages/HomePage";
import TrackPage from "./pages/TrackPage";
import ForgotPw from "./pages/ForgotPw";
import WrongPw from "./pages/WrongPw";
import ResetPw from "./pages/ResetPw";
import ConfirmPwChange from "./pages/ConfirmPwChange";
import SignUpPage from "./pages/SignUpPage";
import RefinedPlanPage1Before from "./pages/RefinedPlanPage1Before";
import GoalPageRefined from "./pages/GoalPageRefined";
import WorkoutPageChecklist from "./pages/WorkoutPageChecklist";
import ProfilePageRefined from "./pages/ProfilePageRefined";

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
      case "/edit-profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/edit-profile-page1":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/track-page":
        title = "";
        metaDescription = "";
        break;
      case "/forgot-pw":
        title = "";
        metaDescription = "";
        break;
      case "/wrong-pw":
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
      <Route path="/edit-profile-page" element={<ProfilePageRefined1 />} />
      <Route path="/edit-profile-page1" element={<EditProfilePage />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="/track-page" element={<TrackPage />} />
      <Route path="/forgot-pw" element={<ForgotPw />} />
      <Route path="/wrong-pw" element={<WrongPw />} />
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
    </Routes>
  );
}
export default App;
