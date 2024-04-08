import { AppBar, Container, Toolbar, Typography } from "@mui/material"
import BookIcon from '@mui/icons-material/Book';
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
            <Typography variant="h5" component="h1" fontWeight="700" flex={1}>
              <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                وبلاگ طاها دولوپر
              </Link>
            </Typography>
            <Link to="/blogs" style={{ color: "#fff" }}>
              <BookIcon />
            </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header