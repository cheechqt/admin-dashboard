import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import BtcSelect from "components/BtcSelect";
import CurrencySelect from "components/CurrencySelect";
import { useAppState } from "state/appState";
import { Colors } from "styles/colors";

export default function BtcPurchase() {
  const { state } = useAppState();

  return (
    <Card raised sx={{ mb: 4 }}>
      <CardHeader
        title={
          <Typography
            variant="h5"
            color="secondary"
            textAlign="center"
            fontFamily={"'Play', sans-serif"}
          >
            Buy Bitcoin
          </Typography>
        }
      />
      <CardContent
        sx={{
          background: state.theme === "light" ? Colors.white : Colors.dark
        }}
      >
        <Grid2 container>
          <Grid2 xs={12} sm={6}>
            <Box display="flex">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: Colors.primary,
                      borderRadius: 50
                    }
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "0.65rem",
                    color: Colors.muted
                  }
                }}
                label="Payment"
                helperText="0.03"
                variant="outlined"
                size="small"
              />
              <BtcSelect />
            </Box>
          </Grid2>
          <Grid2 xs={12} sm={6}>
            <Box display="flex">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: Colors.primary,
                      borderRadius: 50
                    }
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "0.65rem",
                    color: Colors.muted
                  }
                }}
                label="Amount"
                helperText="1000"
                variant="outlined"
                size="small"
              />
              <CurrencySelect />
            </Box>
          </Grid2>
        </Grid2>
        <Box sx={{ p: 2, mt: 4 }}>
          <Button
            sx={{
              fontFamily: "'Play', sans-serif",
              p: 2,
              borderRadius: 50,
              width: "100%",
              boxShadow: "5px 5px 16px -3px rgba(226,84,255,0.42)",
              background:
                "linear-gradient(90deg, rgba(170,0,255,1) 0%, rgba(68,138,255,1) 100%)"
            }}
            variant="contained"
          >
            Buy now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
