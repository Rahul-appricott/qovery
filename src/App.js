import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Image } from "react-bootstrap";

const AccountSetting = lazy(() => import("./Pages/Account/AccountSetting"));

// const Question = lazy(() => import("./Pages/Question/Question.js"));


// import { Question } from "./Pages/Question/Question";
const Success = lazy(() => import("./Pages/Question/Success"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const UploadImage  = lazy(() => import  ("./Pages/Profile-Picture/UploadImage"));
const UploadVideo  = lazy(() => import  ("./Pages/IntroVideo/UploadVideo"));
const UserInformation = lazy(() => import ("./Pages/Basic-Information/UserInformation"));
const PersonalInformation = lazy(() => import ("./Pages/Personal-Information/PersonalInformation"));
const Preference = lazy(() => import ("./Pages/User Preference/Preference"));
// const EditBasicInformation = lazy(() => import ("./Pages/Profile Basic Info/EditBasicInformation"));

const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const Question = lazy(() => import("./Pages/Question/Question.js"));
const Status = lazy(() => import("./Pages/Homepage/Status"));
const ShareProfilee = lazy(() => import("./Component/Pages/Homepage/ShareProfile"));
const TestPage = lazy(() => import("./Pages/TestPage/testPage"));
const VideoPage = lazy(() => import("./Component/Pages/Homepage/Video.js"));
const QuestionChoose = lazy(() => import("./Pages/Question/QuestionChoose"));
const QuestionBank = lazy(() => import("./Pages/QuestionBank/Questionbank.js"));
const QuestionScreen = lazy(() => import("./Pages/QuestionBank/QuestionScreen.js"));
const Notification = lazy(() => import("./Pages/Notification/Notification.js"));
const QuestionBankAnswer = lazy(() => import("./Pages/QuestionBank/QuestionBankAnswer.js"));
const Favorites = lazy(() => import("./Pages/MyFavorites/favorites.js"));
const Setting = lazy(() => import("./Pages/Setting/Setting.js"));
const PrivacyPolicy = lazy(() => import("./Pages/Privacy-Policy/PrivacyPolicy.js"));
const NotificationSetting = lazy(() => import("./Component/Pages/Notification/Notification.js"));
const HelpSupport = lazy(() => import("./Pages/Help-Support/HelpSupport.js"));
const ProfileBasicInformation = lazy(() => import("./Pages/Account/ProfileBasicInformation.js"));
const ShareQR = lazy(() => import("./Pages/Profile/ShareQR.js"));
const Message = lazy(() => import("./Pages/Messages/Message.js"));
const MessageDetail = lazy(() => import("./Pages/Message-Detail/MessageDetail.js"));

/*Landing Page*/
const LandingPage = lazy(() => import("./Pages/Landing-Page/LandingPage.js"));

const Analytics = lazy(() => import("./Pages/Analytis/Analytics"));
const ErrorPage = lazy(() => import("./Pages/404-Page/404Page"));

const App = () => ( 
  <Router>
    <Suspense
      fallback={
        <div>
          <Image src="" className="img-fluid" alt="" />
        </div>
      }
    >
      <Routes>
        <Route exact path="/user/:username" element={<Homepage />} />
      </Routes>
      <Routes>
        <Route exact path="/status" element={<Status />} />
      </Routes>
      <Routes>
        <Route exact path="/share-profile" element={<ShareProfilee />} />
      </Routes>
      <Routes>
        <Route exact path="/test-page" element={<TestPage />} />
      </Routes>
      <Routes>
        <Route exact path="/video-page" element={<VideoPage />} />
      </Routes>      
      <Routes>
        <Route exact path="/apply/date" element={<Question />} />
      </Routes>  
      <Routes>
        <Route exact path="/success" element={<Success />} />
      </Routes>
      <Routes>
        <Route exact path="/user/profile/images/upload" element={<UploadImage />} />
      </Routes>
      <Routes>
        <Route exact path="/user/profile/upload/video" element={<UploadVideo />} />
      </Routes>
      <Routes>
        <Route exact path="/user/profile/basic-information" element={<UserInformation />} />
      </Routes>
      <Routes>
        <Route exact path="/personalinformation" element={<PersonalInformation />} />
      </Routes>
      <Routes>
        <Route exact path="/preference" element={<Preference />} />
      </Routes>
      {/* <Routes>
        <Route exact path="/editbasicinformation" element={<EditBasicInformation />} />
      </Routes> */}
      <Routes>
        <Route exact path="/questionChoose" element={<QuestionChoose />} />
      </Routes>
      <Routes>
        <Route exact path="/account-setting" element={<AccountSetting />} />
      </Routes>
      <Routes>
        <Route exact path="/profile-basic-information" element={<ProfileBasicInformation />} />
      </Routes>
      <Routes>
        <Route exact path="/help-support" element={<HelpSupport />} />
      </Routes>
      <Routes>
        <Route exact path="/notification-setting" element={<NotificationSetting />} />
      </Routes>
      <Routes>
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Routes>
        <Route exact path="/setting" element={<Setting />} />
      </Routes>
      <Routes>
        <Route exact path="/favorite" element={<Favorites />} />
      </Routes>
      <Routes>
        <Route exact path="/question-bank-answer" element={<QuestionBankAnswer />} />
      </Routes>
      <Routes>
        <Route exact path="/notification" element={<Notification />} />
      </Routes>
      <Routes>
        <Route exact path="/question-bank" element={<QuestionBank />} />
      </Routes>
      <Routes>
        <Route exact path="/profile/:username" element={<Profile />} />
      </Routes>
      <Routes>
        <Route exact path="/question-screen" element={<QuestionScreen />} />
      </Routes>
      <Routes>
        <Route exact path="/shareQR" element={<ShareQR />} />
      </Routes>
      <Routes>
        <Route exact path="/message" element={<Message />} />
      </Routes>
      <Routes>
        <Route exact path="/message-detail" element={<MessageDetail />} />
      </Routes>

      <Routes>
        <Route exact path="/landing-page" element={<LandingPage />} />
      </Routes>

      <Routes>
        <Route exact path="/analytics" element={<Analytics />} />
      </Routes>
      <Routes>
        <Route exact path="/error-page" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  </Router>  

);  


export default App;

