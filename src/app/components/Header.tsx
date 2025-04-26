import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: 1 }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Jet ToDo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
