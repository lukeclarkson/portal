import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const renderRadioGroup = ({v1,v2,input, label, type, meta: {touched, error, invalid}}) => (

    <RadioGroup aria-label="status" name={label} row>
        <FormControlLabel
          type={type}
          value={1}
          control={<Radio color="primary" />}
          label={v1}
          labelPlacement="end"
          {...input}
        />
        <FormControlLabel
          type={type}
          value={0}
          control={<Radio color="primary" />}
          label={v2}
          labelPlacement="end"
          {...input}
        />
      </RadioGroup>

);

renderRadioGroup.propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    meta: PropTypes.object
};

export default renderRadioGroup;