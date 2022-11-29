import { useEffect, useState } from "react";
import {
  useMediaQuery,
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled, alpha, useTheme } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { drawerWidth } from "components/AppDrawer";
import { useAppState } from "state/appState";
import { Colors } from "styles/colors";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.searchbar.borderRadius,
  backgroundColor: alpha(Colors.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(Colors.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "18ch",
      "&:focus": {
        width: "24ch"
      }
    }
  }
}));

export default function PrimaryAppBar({ switchColorMode }) {
  const theme = useTheme();
  const { state, dispatch } = useAppState();

  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [themeSwitch, setThemeSwitch] = useState(false);

  useEffect(() => {
    dispatch({ type: "theme-switch" });
    switchColorMode(themeSwitch);
  }, [themeSwitch, dispatch, switchColorMode]);

  return (
    <Box sx={{ display: 1 }}>
      <AppBar position="fixed" enableColorOnDark open={state.drawer}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{
              marginRight: 5,
              ...(state.drawer && { display: "none" })
            }}
            onClick={() => dispatch({ type: "drawer" })}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Play', sans-serif",
              flexGrow: 1,
              display: { xs: "none", sm: "block" }
            }}
          >
            React MUI Dashboard
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "10%"
              }
            }}
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {matches && <SearchIcon />}
            <NotificationsIcon />
            <AccountCircleIcon />
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <SettingsIcon sx={{ color: Colors.white }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={themeSwitch}
                  onClick={() => setThemeSwitch((s) => !s)}
                />
              }
              label={themeSwitch ? "Dark" : "Light"}
            />
          </FormGroup>
        </MenuItem>
      </Menu>
    </Box>
  );
}
