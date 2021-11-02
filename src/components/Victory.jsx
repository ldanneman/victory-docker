import React from "react";
import * as V from "victory";
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryCandlestick,
} from "victory";

function Victory(props) {
  const chartType = () => {
    switch (props.type) {
      case "bar":
        return <VictoryBar data={props.data} x={props.x} y={props.y} />;
      case "line":
        return <VictoryLine data={props.data} x={props.x} y={props.y} />;
      case "candlestick":
        return (
          <VictoryCandlestick
            data={props.data}
            open={props.open}
            close={props.close}
            high={props.high}
            low={props.low}
            candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
          />
        );
      default:
        return <VictoryBar data={props.data} x={props.x} y={props.y} />;
    }
  };

  return (
    <VictoryChart
      width={400}
      height={250}
      // domainPadding will add space to each side of VictoryBar to
      // prevent it from overlapping the axis
      theme={VictoryTheme.material}
      domainPadding={20}
    >
      <VictoryAxis
        // tickValues specifies both the number[y] of ticks and where
        // they are placed on the axis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => `$${x / 1000}k`}
      />
      {chartType()}
    </VictoryChart>
  );
}

export default Victory;
