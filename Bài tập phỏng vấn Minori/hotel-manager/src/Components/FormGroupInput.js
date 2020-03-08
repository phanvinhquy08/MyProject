import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FormGroupInput = (props) => {
    const { label, name, innerRef, errors, defaultValue, disabled } = props;

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Input type="text" name={name} id={name} innerRef={innerRef} defaultValue={defaultValue} disabled={disabled} /><br />
            {errors[name] && <small>{errors[name].message}</small>}<br />
        </FormGroup>
    );
}

export default FormGroupInput;