import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const UserTypeDialog = ({ open, onClose }) => {
  const [value, setValue] = React.useState('Login as user');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Choose Login Type</DialogTitle>
      <DialogContent>
        <RadioGroup value={value} onChange={handleRadioChange}>
          <FormControlLabel value="Login as user" control={<Radio />} label="Login as user" />
          <FormControlLabel value="Login as distributor" control={<Radio />} label="Login as distributor" />
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

UserTypeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserTypeDialog;
