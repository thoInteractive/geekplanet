import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import SelectField from '../formHelpers/selectField';
import TextField from '../formHelpers/textField';
import { required, requiredZIP } from '../formHelpers/validations';

export const formName = 'userAddress';

const styles = {
  container: {
    marginTop: '20px',
  },
  idField: {
    display: 'none',
  },
  submitButton: {
    marginTop: '20px',
  },
};

const UserAddress = ({ handleSubmit, onSubmit }) => (
  <div style={styles.container}>
    <form name={formName} onSubmit={handleSubmit(onSubmit)}>
      <Field
        component={TextField}
        name="_id"
        type="text"
        style={styles.idField}
      />
      <Field
        component={SelectField}
        name="title"
        label={<FormattedMessage id="ORDER.ADDRESS.FORM.TITLE" />}
        validate={required}
      >
        <MenuItem value="Frau">
          <FormattedMessage id="ORDER.ADDRESS.FORM.MRS" />
        </MenuItem>
        <MenuItem value="Herr">
          <FormattedMessage id="ORDER.ADDRESS.FORM.MR" />
        </MenuItem>
      </Field>
      <br />
      <Field
        component={TextField}
        name="firstName"
        label={<FormattedMessage id="ORDER.ADDRESS.FORM.FIRST_NAME" />}
        type="text"
        validate={required}
        autoComplete="shipping given-name"
      />
      &nbsp;
      <Field
        component={TextField}
        name="lastName"
        label={<FormattedMessage id="ORDER.ADDRESS.FORM.LAST_NAME" />}
        type="text"
        validate={required}
        autoComplete="shipping family-name"
      />
      <br />
      <Field
        component={TextField}
        name="streetAddress"
        label={<FormattedMessage id="ORDER.ADDRESS.FORM.STREET_ADDRESS" />}
        type="text"
        validate={required}
        autoComplete="shipping street-address"
      />
      <br />
      <Field
        component={TextField}
        name="zip"
        min="1000"
        max="9999"
        type="number"
        validate={requiredZIP}
        autoComplete="shipping postal-code"
        label={<FormattedMessage id="ORDER.ADDRESS.FORM.ZIP" />}
      />
&nbsp;
      <Field
        component={TextField}
        name="city"
        label={<FormattedMessage id="ORDER.ADDRESS.FORM.CITY" />}
        type="text"
        validate={required}
        autoComplete="shipping address-level2"
      />
      <br />
      <Field
        component={SelectField}
        name="country"
        label={<FormattedMessage id="ORDER.ADDRESS.FORM.COUNTRY" />}
        validate={required}
      >
        <MenuItem value="Schweiz">
          <FormattedMessage id="COUNTRIES.CHE" />
        </MenuItem>
        <MenuItem value="Liechtenstein">
          <FormattedMessage id="COUNTRIES.LIE" />
        </MenuItem>
      </Field>
      <br />
      <br />
      <Button
        color="primary"
        variant="contained"
        type="submit"
      >
        <FormattedMessage id="ORDER.ADDRESS.FORM.NEXT" />
      </Button>
    </form>
  </div>
);

UserAddress.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(UserAddress);
