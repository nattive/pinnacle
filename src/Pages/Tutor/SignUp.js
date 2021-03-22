import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./signup.scss";
import { GrInProgress, GrIndicator } from 'react-icons/gr'
import image1 from "../../Assets/img/elements/494640-PHEPSI-490.jpg";
import SignUpCard from "./SignUpCard";
import bio from "../../Assets/img/elements/bio.jpg";
import socialMediaImage from "../../Assets/img/elements/social media.jpg";
import registration from "../../Assets/img/elements/494640-PHEPSI-490.jpg";
import { BsBoxArrowLeft } from "react-icons/bs";
import { register } from '../../Actions/registerAction'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
function SignUp(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [user, setUser] = useState({});
  const [Facebook, setFacebook] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [Instagra, setInstagram] = useState("");
  const [YouTube, setYouTube] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [accountType, setAccountType] = useState("");
  const [about, setAbout] = useState("");
  const [isPO_tutor, setIsPO_tutor] = useState(true);
  const [isCotF_tutor, setIsCotF_tutor] = useState(false);
  const [image, setImage] = useState("");
  const [files, setFiles] = useState("");
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()
  const backBtn = useRef()
  const rightBtn = useRef()
  useEffect(() => {
    // activeIndex === 0 ? backBtn.current.a
  }, [activeIndex])
  const feilds = [
    {
      name: "name",
      value: name,
      placeholder: "e.g John Doe",
      label: "Your full name",
      helperText: "Your student have to call you by a name, right?",
      onChange: (e) => { setName(e.target.value) },
      component: "input",
    },
    {
      onChange: (e) => { setEmail(e.target.value) },
      label: "email",
      value: email,
      placeholder: "e.g example@xyz.vom",
      helperText:
        "*Required. Ensure you mail is functional, you will recieve all notifications concerning your account.",
      component: "input",
      type: "email",
      placeholder: "Email Address",
    },
    {
      component: 'accountType',
      label: 'Select account type',
      value: accountType,
      helperText:
      "*Required. Your choice here depends on why you want to signup on Pinnacle. choose either Pinnacle Ulearn or Career of the future, if you are siging up as a student, choose tutor if you are siging up to create contents, or other if you are signing up for other services offered on Pinnacle",
      onChange: (e) => {setAccountType(e.target.value)}
    },
    {
      onChange: (e) => { setEmail(e.target.value) },
      type: "password",
      placeholder: "Password",
      value: password,
      component: "input",
      label: "password",
      helperText:
        "*Required. Your password charaters must exceed 8 characters",

    },
   
    {
      onChange: (e) => { setPasswordConfirmation(e.target.value) },
      type: "password",
      placeholder: "Confirm Password",
      component: "input",
      value: passwordConfirmation,
      label: "Confirm Password",
    },
  ];

  const tutorFeilds = [
    {
      name: "about",
      component: "textarea",
      type: "text",
      component: "textarea",
      label: "Short Bio",
      helpText: "Write a short bio about you",
      onChange: (e) => setAbout(e.target.value),
    },
    // {
    //   name: "isPO_tutor",
    //   label: "Pinnacle Ulearn Tutor",
    //   type: "checkBox",
    //   component: "checkBox",
    //   helpText:
    //     "Do you want to create materials for a pinnacle Ulearn students",
    //   onChange: () => setIsPO_tutor(!isPO_tutor),
    // },
    // {
    //   name: "isCotF_tutor",
    //   component: "input",
    //   type: "checkBox",
    //   label: "Pinnacle Career of the future tutor",
    //   input: "checkBox",
    //   helpText:
    //     "Do you want to create materials for a pinnacle Career of The future students",
    //   placeholder: "Do you want to be a tutor for the career of the future?",
    //   onChange: (e, c) => setIsCotF_tutor(c),
    // },
    {
      name: "image",
      type: "file",
      component: "input",
      label: "Profile Picture",
      helpText: "Upload a profile image",
      error: "",
      onChange: (e) => setImage(e.target.value),
    },
    {
      name: files,
      type: "file",
      component: "input",
      label:
        "Upload your CV, Certification, any document that will help your application",
      helpText:
        "Upload your files, cv and any other document to enhance your application",
      error: null,
      onChange: (e) => setFiles(e.target.value),
    },
  ];

  const socialMedia = [
    {
      name: "facebook",
      label: "facebook",
      component: "input",
      type: "text",
      helpText: "Your facebook username",
      onChange: (e) => setFacebook(e.target.value),
      icon: "facebook",
      iconPosition: "left",
    },
    {
      name: "twitter",
      label: "twitter",
      component: "input",
      type: "text",
      helpText: "Your twitter handle",
      onChange: (e) => setTwitter(e.target.value),
      icon: "twitter",
    },
    {
      name: "instagram",
      component: "input",
      type: "text",
      helpText: "Your instagram account link",
      onChange: (e) => setInstagram(e.target.value),
      icon: "instagram",
    },
    {
      name: "youTube",
      label: "youTube",
      component: "input",
      type: "text",
      helpText: "Link to your youtube account",
      onChange: (e) => setYouTube(e.target.value),
      icon: "youtube",
    },
    {
      name: "linkedIn",
      label: "linkedIn",
      component: "input",
      type: "text",
      helpText: "your linkedIn ptofile link",
      icon: "linkedin",
      onChange: (e) => setLinkedIn(e.target.value),
      icon: "linkedin",
      iconPosition: "left",
    },
  ];

  const ChooseAccount = () => (
    <div className="row mb-3">
      <div className="col-xs-12 col-md-8 mx-auto p-4 ">
        <div className="row teacher-signup-body">
          <div className="col-xs-12  col-md-6 d-none d-md-block">
            <img style={{ height: '450px' }} src={image1} alt="" className="w-100" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="p-4 text-center mx-auto my-auto">
              <h3 className="teacher-title">
                Great choice! Now let's get started
              </h3>

              <div className="my-auto mx-4">
                {props.user ?.id ? (
                  <a
                    href="#"
                    onClick={() => {
                      setUser(props.user);
                      setActiveIndex(2);
                    }}
                  >
                    <h4>continue as</h4>
                    <p className="text-muted">{props.user ?.name}</p>
                    <p className="my-4">Or</p>
                  </a>
                ) : null}
                <div className="text-center">
                  <h6 className="lead">Create a new account</h6>
                  <button
                    onClick={() => setActiveIndex(1)}
                    className="teacher-btn"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BasicCard = (props) => (
    <div className="row mb-3">
      <div className="col-xs-12 col-md-8 mx-auto">
        <h3 className="teacher-title">{props.headerText}</h3>
        <div className="row teacher-signup-body  p-1">
          <div className="col-xs-12   col-md-6 d-none d-md-block">
            <img src={props.image} style={{ height: '450px' }} alt="" className="w-100" />
          </div>
          <div className="col-xs-12 col-md-6 light-blue-bg">
            <div className="teacher-signup-card">
              <SignUpCard formFields={props.feilds} />
            </div>
            <div className="mt-4 d-flex justify-content-between">
              <button onClick={props.onBack} disabled={activeIndex === 0} ref={backBtn} className="teacher-btn">
                <div className="d-flex align-content-center text-light">
                  <span ><FaAngleLeft style={{ fontSize: '20px' }} /></span>
                  Back
                </div>
              </button>

              <button onClick={props.onNext} disabled={props.loading} ref={rightBtn} className="teacher-btn">
                {
                  props.loading ? '...Loading' :
                    activeIndex === 3 ? 'Finish' : <div className="d-flex align-content-center text-light">
                      Next
                <span>
                        <FaAngleRight style={{ fontSize: '20px' }} /></span>
                    </div>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ViewContainer = () => {
    switch (activeIndex) {
      case 0:
        return <ChooseAccount />;
      case 1:
        return (
          <BasicCard
            image={registration}
            feilds={feilds}
            onNext={() => {
              const data = {
                name,
                email,
                password,
                passwordConfirmation,
                dispatchTo2: true
              }
              props.register(data)
            }}
            onBack={() => setActiveIndex(0)}
            headerText="Great choice! Now let's get started"
          />
        );
      case 2:
        return (
          <BasicCard
            image={bio}
            feilds={tutorFeilds}
            onBack={() => setActiveIndex(1)}
            onNext={() => setActiveIndex(3)}
            headerText="Tell us some basic information about you"
          />
        );
      case 3:
        return (
          <BasicCard
            image={socialMediaImage}
            feilds={socialMedia}
            onNext={() => setActiveIndex(3)}
            onBack={() => setActiveIndex(2)}
            headerText="How can your students connect with you"
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="container-fluid mt-5">
      <ViewContainer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  error: state.auth.error,
  loading: state.loading.authLoadingState,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
