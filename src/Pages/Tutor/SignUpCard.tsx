import React, { InputHTMLAttributes } from 'react'
// import { connect } from "react-redux"
import './signup.scss'
import { BiHelpCircle } from 'react-icons/bi';
import {
  Button,
  CircularProgress,
  ButtonGroup,
  Snackbar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
enum componetType {
  Input = 'input',
  textarea = 'textarea',
  checkBox = 'checkBox',
  accountType = 'accountType'
}

interface Feild {
  value: string | number | string[] | undefined;
  label: "string | undefined";
  helperText?: "string | undefined";
  onChange: () => void;
  component: componetType;
  type?: "string";
  name?: "string";
  checkedValue?: boolean;
  placeholder?: "String | undefined";
}

interface SignUpCardProps {
  formFields: Feild[]
}

const TextArea = (props: Feild) =>
  <div className="col-12 mt-3">
    <label htmlFor={props.name} className="form-control-label">{props.label}</label>
    <div className="d-flex">
      <textarea name={props.name} onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder} className="form-control"
        cols={10} rows={3} />
      <p className="helper" title={props.helperText}><BiHelpCircle /> </p>
    </div>
  </div>


const TextInput = (props: Feild) => {
  return (
    <div className="col-12 mt-3">
      <label htmlFor={props.name} className="form-control-label">
        {props.label}
      </label>
      <div className="d-flex">
        <input
          name={props.name}
          autoComplete={props.name}
          type={props.type}
          onChange={() => props.onChange}
          placeholder={props.placeholder}
          className="form-control"
        />
        <p className="helper" title={props.helperText}>
          <BiHelpCircle />{" "}
        </p>
      </div>
    </div>
  );
}
const AccountType = (props: any) => {
  return (
    <div className="col-12 mt-3">
      <FormControl className="w-100">
      <label htmlFor={props.name} className="form-control-label">
      {props.label}
    </label>
        <Select
         className="form-control"
         style={{borderRadius: 0, border: '1px solid white', color: '#373737'}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={props.value}
          onChange={props.onChange}
        >
          <MenuItem value="isPO">
            Sign up to Pinnacle Online e - learning Portal
                </MenuItem>
          <MenuItem value="isCareer">
            Sign up to Career of the future Portal
                </MenuItem>
          <MenuItem value="tutor">
            Sign up to Career of the future Portal
                </MenuItem>
          <MenuItem value="other">
            Sign up to Career of the future Portal
                </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
const OurCheckBox = (props: Feild) => (
  <div className="col-xs-6 mt-3">
    <label htmlFor={props.name} className="form-control-label">
      {props.label}
    </label>
    <input type="checkbox" name=""
      className="form-control" onChange={e => console.log(e)
      } id="" />
  </div>
);




const SignUpCard = (props: SignUpCardProps) => {
  return (
    <div>
      {props.formFields.map((form, index) => (
        <React.Fragment key={index}>
          {form.component === "textarea" && <TextArea {...form} />}
          {form.component === "input" && <TextInput {...form} />}
          {form.component === "checkBox" && <OurCheckBox {...form} />}
          {form.component === "accountType" && <AccountType {...form} />}
        </React.Fragment>
      ))}
    </div>
  );
}

export default SignUpCard
