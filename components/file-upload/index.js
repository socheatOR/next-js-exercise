import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
function ListFileUpload(props) {
    return (
        <div>
        <Button
          variant="outlined"
          sx={{ marginBottom: 2 }}
          startIcon={<AddIcon />}
        >
          <Link href="upload-file">Upload File</Link>
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">File Name</TableCell>
                <TableCell align="left">File Path</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.listFile.data ? (
                props.listFile.data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.file_name}</TableCell>
                    <TableCell align="left">{row.file_path}</TableCell>
                    <TableCell align="left">
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ marginLeft: 1 }}
                        onClick={() => props.onDownload(row.id)}
                      >
                        <CloudDownloadIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow
                  align="center"
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">No Record...</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}
export default ListFileUpload;