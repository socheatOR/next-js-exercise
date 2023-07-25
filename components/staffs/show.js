import { Container, Grid, TableRow, TableCell } from "@mui/material";
function Show(props) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "white",
        mt:1,
        fontWeight:"bold",
        p: 5,
        border: "1px solid grey",
        borderRadius: '0.5rem'
      }}
    >
      {props.staff.data ? (
        <Grid container align="left" spacing={2}>
          <Grid item xs={6}>
            First Name: {props.staff.data.first_name}
          </Grid>
          <Grid item xs={6}>
            Last Name: {props.staff.data.last_name}
          </Grid>
          <Grid item xs={6}>
            Age: {props.staff.data.age}
          </Grid>
          <Grid item xs={6}>
            Account Number: {props.staff.data.account_number}
          </Grid>
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default Show;
