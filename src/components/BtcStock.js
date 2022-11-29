import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import BtcSelect from "components/BtcSelect";
import { ApexBtcStockChartOptions } from "charts/BtcStockChart";
import { useAppState } from "state/appState";
import { Colors } from "styles/colors";

export default function BtcStock() {
  const { state } = useAppState();

  const [chartOptions, setChartOptions] = useState(
    ApexBtcStockChartOptions(
      [10, 60, 125, 150, 129, 149, 170, 199, 230, 260, 259],
      Colors.primary,
      state.theme
    )
  );

  useEffect(() => {
    setChartOptions(
      ApexBtcStockChartOptions(
        [10, 60, 125, 150, 129, 149, 170, 199, 230, 260, 259],
        Colors.primary,
        state.theme
      )
    );
  }, [state.theme]);

  return (
    <Card raised>
      <CardHeader
        sx={{ p: 4 }}
        title={
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" fontFamily={"'Play', sans-serif"}>
              BTC $7632.23
            </Typography>
            <BtcSelect />
          </Box>
        }
      />

      <CardContent
        sx={{
          p: 0,
          "&.MuiCardContent-root": {
            paddingBottom: 0
          }
        }}
      >
        <Chart
          options={chartOptions.options}
          series={chartOptions.options.series}
          type="line"
          height="420"
        />
      </CardContent>
    </Card>
  );
}
