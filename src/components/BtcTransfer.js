import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Typography,
  TextField
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import BtcSelect from "components/BtcSelect";
import { useAppState } from "state/appState";
import { Colors } from "styles/colors";

export default function BtcTransfer() {
  const { state } = useAppState();

  return (
    <Card raised>
      <CardHeader
        title={
          <Typography
            variant="h5"
            color="secondary"
            textAlign="center"
            fontFamily={"'Play', sans-serif"}
          >
            Bitcoin transfer
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
              <FormControl>
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
                  label="Wallet from"
                  helperText="2xaD42FxvR42dDfasdf"
                  variant="outlined"
                  size="small"
                />
              </FormControl>
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
                label="Wallet to"
                helperText="2xaD42FxvR42dDfasdf"
                variant="outlined"
                size="small"
              />
              <BtcSelect />
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
            Transfer now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
