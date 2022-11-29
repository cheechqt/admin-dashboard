import { FormControl, MenuItem, Select } from "@mui/material";

export default function BtcSelect() {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
      <Select
        value="bitcoin"
        sx={{
          "&.MuiInputBase-root:before": {
            border: "none"
          }
        }}
      >
        <MenuItem value="bitcoin">Bitcoin</MenuItem>
        <MenuItem value="ethereum">Ethereum</MenuItem>
        <MenuItem value="ripple">Ripple</MenuItem>
        <MenuItem value="blackcoin">BlackCoin</MenuItem>
      </Select>
    </FormControl>
  );
}
