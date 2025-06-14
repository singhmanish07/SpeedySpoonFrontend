import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-toastify';
import { Input } from '@mui/material';

export default function EditRes({ preresvdetails }) {
    const { resid, resname, reslocation, restype, rescuisine, resopentime, resclosetime, resowner, resdescription } = preresvdetails
    const [open, setOpen] = React.useState(false);
    const [newresDetails, setNewResDetails] = React.useState({
        newresid: resid,
        newresname: resname,
        newreslocation: reslocation,
        newrestype: restype,
        newresowner: resowner,
        newresopentime: resopentime,
        newresclosetime: resclosetime,
        newresdescription: resdescription,
        newresimage: null
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setNewResDetails(prevDetails => ({
            ...prevDetails,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        Object.keys(newresDetails).forEach(key => {
            formData.append(key, newresDetails[key])
            console.log(formData[key], "key%%%", key, newresDetails[key])
        });
        try {
            console.log(formData, "Form")
            const newresponse = await fetch(process.env.API_URI + '/api/distributor/edit-restaurant', {
                method: 'POST',
                body: formData,
                credentials: 'include',
            });

            const apiResponse = await newresponse.json();
            if (!newresponse.ok) {
                console.log(apiResponse.message);
            }
            if (apiResponse.success) {
                toast.success(apiResponse.message);
                handleClose();
            } else {
                toast.error(apiResponse.message)
            }

        } catch (error) {
            console.error("Error in saving newrestaurant data:", error.message);
        }
    };

    return (
        <React.Fragment>
            <button onClick={handleClickOpen}
                className="px-4 py-2 rounded z-10 bg-primary text-gray-50 font-semibold hover:bg-fuchsia-200 hover:text-gray-700">
                Edit Restaurant
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Register Restaurant</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To edit a newrestaurant, please enter the newrestaurant details here.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            margin="dense"
                            id="newresid"
                            name="newresid"
                            label="Restaurant FSSAI ID"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newresDetails.newresid}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="newresname"
                            name="newresname"
                            label="Restaurant Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newresDetails.newresname}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="newreslocation"
                            name="newreslocation"
                            label="Location"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newresDetails.newreslocation}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="newrestype"
                            name="newrestype"
                            label="Type"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newresDetails.newrestype}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="newresowner"
                            name="newresowner"
                            label="Owner"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newresDetails.newresowner}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="newresopentime"
                            name="newresopentime"
                            label="Open Time"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newresDetails.newresopentime}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            margin="dense"
                            id="newresclosetime"
                            name="newresclosetime"
                            label="Close Time"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newresDetails.newresclosetime}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="newresdescription"
                            name="newresdescription"
                            label="Description"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={newresDetails.newresdescription}
                            onChange={handleChange}
                        />
                        {/* <Input
                            margin="dense"
                            id="newresimage"
                            name="newresimage"
                            type="file"
                            fullWidth
                            onChange={handleChange}
                        /> */}
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" onClick={handleSubmit}>Submit Details</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
