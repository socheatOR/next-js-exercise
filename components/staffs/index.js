import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Link from "next/link";
function ListStaff(props) {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{ marginBottom: 2 }}
        startIcon={<AddIcon />}
      >
        <Link href="new-staff">Add Staff</Link>
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">First Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Account Number</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listStaff.data ? (
              props.listStaff.data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.first_name}</TableCell>
                  <TableCell align="center">{row.last_name}</TableCell>
                  <TableCell align="center">{row.age}</TableCell>
                  <TableCell align="center">{row.account_number}</TableCell>
                  <TableCell align="center">
                    <Link href={"new-staff/" + row.id}>
                      <Button variant="outlined" color="success">
                        <VisibilityIcon />
                      </Button>
                    </Link>
                    <Link href={"new-staff/edit/" + row.id}>
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ marginLeft: 1 }}
                      >
                        <DriveFileRenameOutlineIcon />
                      </Button>
                    </Link>

                    <Button
                      variant="outlined"
                      color="error"
                      sx={{ marginLeft: 1 }}
                      onClick={() => props.onDelete(row.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                key={1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">Loading...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ListStaff;
