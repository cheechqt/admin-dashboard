import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardContent, CardHeader, Typography, Box } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Colors } from '../styles/colors';

function createData(name, changeamount, changepercent, high, low) {
  return { name, changeamount, changepercent, high, low };
}

const rows = [
  createData('Bitcoin', -32.23, -0.6, 0.23, 0.47),
  createData('Blackcon', 43.56, +9.0, 3.70, 4.3),
  createData('Ethereum', 262.55, +16.0, 24.0, 1.4),
  createData('Ripple', -1230.40, -3.7, 6.70, 4.3),
  createData('Stellar', 356.56, +21.0, 49.33, 3.9),
];

export default function PriceChangeTable() {
  return (
    <Card raised sx={{minHeight: 600}}>
      <CardHeader sx={{mb: 4}} title={<Typography variant="h5" color="secondary" 
      textAlign="center" fontFamily={"'Play', sans-serif"}>Price Change</Typography>} />
      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography sx={{ color: Colors.muted }}>Type</Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography sx={{ color: Colors.muted }}>Change</Typography>
                </TableCell>
                <TableCell align='center'>
                  <Typography sx={{ color: Colors.muted }}>Change</Typography>
                </TableCell>
                <TableCell sx={{ color: Colors.muted }}>
                  <Box display="flex" justifyContent="center">
                    <Typography>High</Typography>
                    <ArrowDropUpIcon sx={{ color: Colors.success }} />
                  </Box>
                </TableCell>
                <TableCell sx={{ color: Colors.muted }}>
                  <Box display="flex" justifyContent="center">
                    <Typography>Low</Typography>
                    <ArrowDropDownIcon sx={{ color: Colors.danger }} />
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align='center'>$ {row.changeamount}</TableCell>
                  <TableCell align='center'>{row.changepercent} %</TableCell>
                  <TableCell align='center'>$ {row.high}</TableCell>
                  <TableCell align='center'>$ {row.low}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
