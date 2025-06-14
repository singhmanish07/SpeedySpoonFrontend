import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import OrderMenu from '../components/Order/OrderMenu';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    width: '60%', 
    maxWidth: 'none', 
  },
}));

const CustomButton = styled(Button)({
    backgroundColor: '#fc8a06',
    color:'white',
    padding: '8px 16px',
    borderRadius: '4px',
    marginRight: '8px',
    '&:hover': {
    color: '#03081F', 
  },
  });

export default function Order({dish}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment sx={{width:'100%'}}>
      <CustomButton onClick={handleClickOpen} className="bg-primary text-white px-4 py-2 rounded mr-2">
        Order Now
      </CustomButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Order Summary
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers >
          <OrderMenu dish={dish}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
