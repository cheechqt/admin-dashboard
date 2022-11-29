import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import AppCard from "components/AppCard";
import { DrawerHeader, drawerWidth, HeaderTitle } from "components/AppDrawer";
import BtcPie from "components/BtcPie";
import BtcPurchase from "components/BtcPurchase";
import BtcStock from "components/BtcStock";
import BtcTransfer from "components/BtcTransfer";
import ExchangeRateTicker from "components/ExchangeRateticker";
import PriceChangeTable from "components/PriceChangeTable";
import { useAppState } from "state/appState";
import { Colors } from "styles/colors";

const openedMixin = (theme) => ({
  marginLeft: drawerWidth,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  marginLeft: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    marginLeft: `calc(${theme.spacing(8)} + 1px)`
  }
});

const MainContainer = styled(Box)(({ theme, open }) => ({
  marginLeft: drawerWidth,
  whiteSpace: "nowrap",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

export default function Main() {
  const { state } = useAppState();

  return (
    <MainContainer component="main" open={state.drawer}>
      <DrawerHeader />
      <Box>
        <Box
          sx={{
            background: 'url("./images/bg.jpg")',
            boxShadow: "inset 0 0 50px 50px rgba(0, 0, 0, 0.8)",
            padding: "20px 30px 99px 30px",
            backgroundPosition: "right 0px bottom 800px",
            color: "#fff"
          }}
        >
          <HeaderTitle>Welcome to Crypto Dashboard</HeaderTitle>
        </Box>
        <ExchangeRateTicker />
        <Grid2
          container
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ p: 1 }}
        >
          <Grid2 xs={12} md={3}>
            <AppCard
              avatar={"bitcoin.png"}
              title="Bitcoin"
              subheader="$69.69"
              trend={-0.005}
              trendDirection="up"
              data={[50, 30, 25, 130, 90, 60, 70, 91]}
              bg={Colors.bitcoin}
            />
          </Grid2>
          <Grid2 xs={12} md={3}>
            <AppCard
              avatar={"ethereum.png"}
              title="Ethereum"
              subheader="$199.99"
              trend={"-$130 (10%)"}
              trendDirection="down"
              data={[10, 20, 50, 150, 120, 60, 40, 10]}
              bg={Colors.ethereum}
            />
          </Grid2>
          <Grid2 xs={12} md={3}>
            <AppCard
              avatar={"ripple.png"}
              title="Ripple"
              subheader="$349.39"
              trend={"-$730 (50%)"}
              trendDirection="down"
              data={[10, 20, 50, 90, 120, 80, 75, 28]}
              bg={Colors.ripple}
            />
          </Grid2>
          <Grid2 xs={12} md={3}>
            <AppCard
              avatar={"blackcoin.png"}
              title="BlackCoin"
              subheader="$39.39"
              trend={"-$330 (15%)"}
              trendDirection="up"
              data={[10, 5, 150, 130, 120, 80, 140, 160]}
              bg={Colors.blackcoin}
            />
          </Grid2>
        </Grid2>
        <Grid2
          justifyContent="space-evenly"
          alignItems="center"
          container
          columnSpacing={2}
          sx={{ p: 1, maxWidth: "100%" }}
        >
          <Grid2 xs={12} md={8}>
            <BtcStock />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <BtcPie />
          </Grid2>
        </Grid2>

        <Grid2
          justifyContent="space-evenly"
          alignItems="center"
          container
          columnSpacing={2}
          sx={{ p: 1, maxWidth: "100%" }}
        >
          <Grid2 xs={12} md={8}>
            <PriceChangeTable />
          </Grid2>
          <Grid2 xs={12} md={4}>
            <Box display="flex" flexDirection="column">
              <BtcPurchase />
              <BtcTransfer />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </MainContainer>
  );
}
