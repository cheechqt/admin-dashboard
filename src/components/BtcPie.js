import { Card, CardContent, CardHeader} from "@mui/material";
import { useState } from "react";
import { Colors } from "../styles/colors";
import Chart from "react-apexcharts";

export default function BTCPie() {

	const [state, setState] = useState({
		series: [44, 55, 13, 43],

		options: {
      fill: {
        colors: [Colors.bitcoin,Colors.ethereum,Colors.ripple,Colors.blackcoin]
      },
      stroke: {
        show: false,
      },
      plotOptions: {
        expandOnClick: false
      },
			labels: ['Bitcoin', 'Ethereum', 'Ripple', 'Blackcoin'],
			responsive: [
				{
					options: {
						legend: {
							position: 'top',
              markers: {
                shape: 'square'
              }
						},
					},
				},
			],
		},
	});

    return (
      <Card raised sx={{height: "530px"}}>
        <CardHeader
          sx={{ p: 4 }}
          title={"Pie"}
        />

        <CardContent
          sx={{
            p: 0,
            "&.MuiCardContent-root": {
              paddingBottom: 0,
            },
          }}
        >
          <Chart
            options={state.options}
            series={state.series}
            height="420"
            type="donut"
          />
        </CardContent>
      </Card>
    );
}