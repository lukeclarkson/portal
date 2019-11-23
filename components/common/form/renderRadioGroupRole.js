import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const renderRadioGroupRole = ({input, label, type, meta: {touched, error, invalid}}) => (

    <RadioGroup aria-label="role" name="role" row>
        <FormControlLabel
          value="0"
          control={<Radio color="primary" checked={true} />}
          label="CEO"
          labelPlacement="end"
          {...input}
        />
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="POC 1"
          labelPlacement="end"
          {...input}
        />
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="POC 2"
          labelPlacement="end"
          {...input}
        />
      </RadioGroup>

);

renderRadioGroupRole.propTypes = {
    // input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object
};

export default renderRadioGroupRole;