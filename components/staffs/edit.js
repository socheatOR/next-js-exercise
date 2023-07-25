import { Grid, TextField, Container } from "@mui/material";
import Button from "@mui/material/Button";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";
function Edit(props) {
  const router = useRouter();
  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  const accountNumber = useRef();

  async function submitHandler(event) {
    try {
      event.preventDefault();
      const enteredFirstName = firstName.current.value;
      const enteredLastName = lastName.current.value;
      const enteredAge = age.current.value;
      const enteredAccountNumber = accountNumber.current.value;

      const staffData = {
        first_name: enteredFirstName,
        last_name: enteredLastName,
        age: parseInt(enteredAge),
        account_number: parseFloat(enteredAccountNumber),
      };


      const response = await axios.patch(
        "http://127.0.0.1:3001/staffs/"+props.staff.data.id,
        staffData
      );
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        bgcolor: "white",
        p: 5,
        border: "1px solid black",
        borderRadius: "0.5rem",
      }}
    >
      {props.staff.data ? (
        <form onSubmit={submitHandler}>
          <Grid container align="center" spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="First Name"
                id="outlined-size-small"
                size="small"
                inputRef={firstName}
                defaultValue={props.staff.data.first_name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Last Name"
                id="outlined-size-small"
                size="small"
                inputRef={lastName}
                defaultValue={props.staff.data.last_name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Age"
                id="outlined-size-small"
                size="small"
                inputRef={age}
                defaultValue={props.staff.data.age}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Account Number"
                id="outlined-size-small"
                size="small"
                inputRef={accountNumber}
                defaultValue={props.staff.data.account_number}
              />
            </Grid>
            <Grid item xs={12} align="left">
              <Button
                type="submit"
                variant="outlined"
                startIcon={<BookmarksIcon />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      ) : (
        <p>Loading...1</p>
      )}
    </Container>
  );
}
export default Edit;
