import React, { InputHTMLAttributes } from 'react'
// import { connect } from "react-redux"
import './signup.scss'
import { BiHelpCircle } from 'react-icons/bi';
enum componetType {
    Input = 'input',
    textarea = 'textarea'
}

interface Feild {
    value: 'string | number | string[] | undefined';
    label: 'string | undefined'
    helperText?: 'string | undefined'
    onChange: () => void;
    component: componetType;
    type?: "string";
    name?: "string";
    placeholder?: 'String | undefined';

}

interface SignUpCardProps {
    formFields: Feild[]
}

const TextArea = (props: Feild) =>
<div className="m-1">
        <label htmlFor={props.name} className="form-control-label">{props.label}</label>
        <div className="d-flex">
        <textarea name={props.name} onChange={props.onChange}
            placeholder={props.placeholder} className="form-control"
            cols={10} rows={3} />
        <p className="helper" title={props.helperText}><BiHelpCircle /> </p>
    </div>
    </div>


const TextInput = (props: Feild) => {
    return (
        <div className="m-1">
            <label htmlFor={props.name} className="form-control-label">{props.label}</label>
            <div className="d-flex">
                <input name={props.name} onChange={props.onChange} placeholder={props.placeholder}
                    value={props.value} className="form-control" />
                <p className="helper" title={props.helperText}><BiHelpCircle /> </p>
            </div>
        </div>
    )
}





const SignUpCard = (props: SignUpCardProps) => {
    return (
        <div>
            {
                props.formFields.map((form, index) =>
                    <React.Fragment key={index}>
                        {
                            form.component === 'textarea' &&
                            <TextArea {...form} />
                        }
                        {form.component === 'input' &&
                            <TextInput {...form} />}
                    </React.Fragment>
                )
            }
        </div>
    )
}

export default SignUpCard
