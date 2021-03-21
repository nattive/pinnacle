import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./signup.scss";
import PHEPSI from "../../Assets/img/elements/494640-PHEPSI-490.jpg";
import SignUpCard from "./SignUpCard";
import bio from "../../Assets/img/elements/bio.jpg";
import registration from "../../Assets/img/elements/494640-PHEPSI-490.jpg";
function SignUp(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [user, setUser] = useState({});
  const [Facebook, setFacebook] = useState("");
  const [Twitter, setTwitter] = useState("");
  const [Instagra, setInstagram] = useState("");
  const [YouTube, setYouTube] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");
  const [about, setAbout] = useState("");
  const [isPO_tutor, setIsPO_tutor] = useState(true);
  const [isCotF_tutor, setIsCotF_tutor] = useState(false);
  const [image, setImage] = useState("");
  const [files, setFiles] = useState("");
  const feilds = [
    {
      name: "name",
      placeholder: "e.g John Doe",
      label: "Your full name",
      helperText: "Your student have to call you by a name, right?",
      onChange: () => {},
      component: "input",
    },
    {
      label: "email",
      placeholder: "e.g example@xyz.vom",
      helperText:
        "*Required. Ensure you mail is functional, you will recieve all notifications concerning your account.",
      component: "input",
      type: "email",
      placeholder: "Email Address",
    },
    {
      type: "password",
      placeholder: "Password",
      component: "input",
      label: "password",
    },
    {
      type: "password",
      placeholder: "Confirm Password",
      component: "input",
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
    {
      name: "isPO_tutor",
      label: "Pinnacle Ulearn Tutor",
      type: "checkBox",
      component: "checkBox",
      helpText:
        "Do you want to create materials for a pinnacle Ulearn students",
      onChange: () => setIsPO_tutor(!isPO_tutor),
    },
    {
      name: "isCotF_tutor",
      component: "input",
      type: "checkBox",
      label: "Pinnacle Career of the future tutor",
      input: "checkBox",
      helpText:
        "Do you want to create materials for a pinnacle Career of The future students",
      placeholder: "Do you want to be a tutor for the career of the future?",
      onChange: (e, c) => setIsCotF_tutor(c),
    },
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
      <div className="col-xs-12 col-md-8 mx-auto card card-body">
        <div className="row teacher-signup-body">
          <div className="col-xs-12  col-md-6 d-none d-md-block">
            <img src={image} alt="" className="w-100" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="p-4 text-center mx-auto">
              <h3 className="teacher-title">
                Great choice! Now let's get started
              </h3>

              <div className="my-auto mx-4">
                {props.user?.id ? (
                  <a
                    href="#"
                    onClick={() => {
                      setUser(props.user);
                      setActiveIndex(2);
                    }}
                  >
                    <h4>continue as</h4>
                    <p className="text-muted">{props.user?.name}</p>
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
      <div className="col-xs-12 col-md-8 mx-auto  p-3">
        <h3 className="teacher-title">{props.headerText}</h3>
        <div className="row teacher-signup-body">
          <div className="col-xs-12  col-md-6 d-none d-md-block">
            <img src={props.image} alt="" className="w-100" />
          </div>
          <div className="col-xs-12 col-md-6 teacher-signup-card">
            <div className="p-4">
              <SignUpCard formFields={props.feilds} />
              <div className="float-right mt-4">
                <button onClick={props.onNext} className="teacher-btn">
                  Next
                </button>
              </div>
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
            onNext={() => setActiveIndex(2)}
            onBack={() => setActiveIndex(0)}
            headerText="Great choice! Now let's get started"
          />
        );
      case 2:
          return (
            <BasicCard
              image={bio}
              feilds={tutorFeilds}
              onNext={() => setActiveIndex(1)}
              onBack={() => setActiveIndex(3)}
              headerText="Tell us some basic information about you"
            />
          );
      case 3:
         return (
           <BasicCard
             image={bio}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
