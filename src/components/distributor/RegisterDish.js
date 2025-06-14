import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Input } from '@mui/material';
import { toast } from 'react-toastify';


export default function RegisterDish({ resId }) {
    const [open, setOpen] = React.useState(false);
    const [itemDetails, setItemDetails] = React.useState({
        itemname: '',
        itemdescription: '',
        itemprice: '',
        itemimage: null
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setItemDetails(prevDetails => ({
            ...prevDetails,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(itemDetails).forEach(key => {
            formData.append(key, itemDetails[key]);
        });
        try {
            const response = await fetch(process.env.API_URI + `/api/distributor/register-restaurant-dish/${resId}`, {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });
            const apiResponse = await response.json();
            if (!response.ok) {
                console.log(apiResponse.message);
            }
            if (apiResponse.success) {
                toast.success("Dish Registered Successfully");
                handleClose();
            } else {
                toast.error(apiResponse.message)
            }
        } catch (error) {
            console.error("Error in saving restaurant data:", error.message);
        }
    };

    return (
        <React.Fragment>
            <button onClick={handleClickOpen}
                className="px-4 py-2 rounded absolute right-28 top-4 z-10 bg-primary text-gray-50 font-semibold hover:bg-fuchsia-200 hover:text-gray-700">
                ADD DISH
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Register Restaurant Dish</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To register a restaurant dish, please enter the dish details here.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            margin="dense"
                            id="itemname"
                            name="itemname"
                            label="Dish Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={itemDetails.itemname}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="itemprice"
                            name="itemprice"
                            label="Dish Price"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={itemDetails.itemprice}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="itemdescription"
                            name="itemdescription"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={itemDetails.itemdescription}
                            onChange={handleChange}
                        />
                        <Input
                            margin="dense"
                            id="itemimage"
                            name="itemimage"
                            type="file"
                            fullWidth
                            onChange={handleChange}
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Register</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
