import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import './signup.scss'
import SignUpCard from "./SignUpCard";
import image from '../../Assets/img/elements/bio.jpg'
import registration from '../../Assets/img/elements/494640-PHEPSI-490.jpg'
function SignUp(props) {
  const [activeIndex, setActiveIndex] = useState(0)


  const ChooseAccount = () => (
    <div className="row mb-3">
      <div className="col-xs-12 col-md-8 mx-auto card card-body">
        <h3 className="teacher-title">Great choice! Now let's get started</h3>
        <div className="row teacher-signup-body">
          <div className="col-xs-12  col-md-6 d-none d-md-block">
            <img src={image} alt="" className="w-100" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="p-4 text-center mx-auto">
              <div className="my-auto mx-4">
                {
                  props.user ?.id ? <>
                    <h4>continue as</h4>
                    <p className="text-muted">Son Name</p>
                    <p className="my-4">Or</p>
                  </> : null
                }
                <div className="text-center">
                  <h6 className="lead">Create a new account</h6>
                  <button onClick={() => setActiveIndex(1)} className="teacher-btn">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BasicCard = () => (
    <div className="row mb-3">
      <div className="col-xs-12 col-md-8 mx-auto  p-3">
        <h3 className="teacher-title">Great choice! Now let's get started</h3>
        <div className="row teacher-signup-body">
          <div className="col-xs-12  col-md-6 d-none d-md-block">
            <img src={registration} alt="" className="w-100" />
          </div>
          <div className="col-xs-12 col-md-6 teacher-signup-card">
            <div className="p-4">
              <SignUpCard formFields={feilds} />
              <div className="float-right mt-4">
                <button className="teacher-btn">Next</button>
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
        return <ChooseAccount />
      case 1:
        return <BasicCard />
      default:
        break;
    }
  }

  const feilds = [
    {
      name: 'name',
      placeholder: 'e.g John Doe',
      label: 'Your full name',
      helperText: 'Your student have to call you by a name, right?',
      onChange: () => { },
      component: 'input'
    },
    {
      label: "email",
      placeholder: 'e.g example@xyz.vom',
      helperText: '*Required. Ensure you mail is functional, you will recieve all notifications concerning your account.',
      component: 'input',
      type: "email",
      placeholder: "Email Address",
    },
    {
      type: "password",
      placeholder: "Password",
      component: 'input',
      label: "password",
    },
    {
      type: "password",
      placeholder: "Confirm Password",
      component: 'input',
      label: "Confirm Password",
    },
  ]
  return (
    <>
      <div className="container-fluid mt-5">
        <ViewContainer />
        <div className="float-right">
          <button className="teacher-btn">Next</button>
        </div>
      </div>
    </>
  )

}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
