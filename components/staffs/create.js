import { Grid, TextField, Container } from "@mui/material";
import Button from "@mui/material/Button";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

function CreateNewStaff(props) {
  const router = useRouter();
  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  const accountNumber = useRef();
  const [error, setError] = useState([]);
  async function submitHandler(event) {
    try {
        event.preventDefault();
        const enteredFirstName = firstName.current.value;
        const enteredLastName = lastName.current.value;
        const enteredAge = age.current.value;
        const enteredAccountNumber = accountNumber.current.value;

        const staffData = {
        "first_name": enteredFirstName,
        "last_name": enteredLastName,
        "age": parseInt(enteredAge),
        "account_number": parseFloat(enteredAccountNumber),
        };
        
        const response = await axios.post(
            "http://127.0.0.1:3001/staffs", 
            staffData
        );
        router.push('/');

      } catch (error) {
        setError(error.response.data.message);
      }
    
  }  
  return (
    <Container maxWidth="md" sx={{ bgcolor: 'white', p: 5, border:'1px solid grey', borderRadius: '0.5rem' }} >
    <form onSubmit={submitHandler}>
    <Grid container  spacing={2}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="First Name"
          id="outlined-size-small"
          size="small"
          inputRef={firstName}
        />
        {error[0] && <span style={{color: 'red'}}>{error[0]}</span>}
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Last Name"
          id="outlined-size-small"
          size="small"
          inputRef={lastName}
        />
        {error[1] && <span style={{color: 'red'}}>{error[1]}</span>}
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Age"
          id="outlined-size-small"
          size="small"
          inputRef={age}
        />
        {error[2] && <span style={{color: 'red'}}>{error[2]}</span>}
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Account Number"
          id="outlined-size-small"
          size="small"
          inputRef={accountNumber}
        />
        {error[3] && <span style={{color: 'red'}}>{error[3]}</span>}
      </Grid>
      <Grid item xs={12} align="left">
        <Button type="submit" variant="outlined" startIcon={<BookmarksIcon />}>
          Submit
        </Button>
      </Grid>
    </Grid>
    </form>
    </Container>
  );
}
export default CreateNewStaff;
