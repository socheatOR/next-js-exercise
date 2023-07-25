import Navigate from "./Navigate";
import { Container } from "@mui/material";
function Layout(props) {
  return (
    <Container maxWidth="lg">
      <Navigate />
      <br />
      <main>{props.children}</main>
    </Container>
  );
}

export default Layout;
