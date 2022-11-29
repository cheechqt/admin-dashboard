import { FormControl, MenuItem, Select } from "@mui/material";

export default function CurrencySelect() {
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <Select value="usd" sx={{
            '&.MuiInputBase-root:before': {
                border: 'none'
            }
        }}>
          <MenuItem value="usd">USD</MenuItem>
          <MenuItem value="cad">CAD</MenuItem>
        </Select>
      </FormControl>
    )
}