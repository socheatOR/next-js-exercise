import { Container } from "@mui/material";
function ShowFile(props) {
    let base64STR = props.data;
  return (
      <embed src={`data:application/pdf;base64,${base64STR}`} />
  );
}

export default ShowFile;
