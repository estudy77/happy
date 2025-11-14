import React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

function Calculator3(props) {
  const [temperature, setTemperature] = React.useState("");
  const [scale, setScale] = React.useState("c");

  const handleCelsiusChange = (temperature) => {
    setScale("c");
    setTemperature(temperature);
  };

  const handleFahrenheitChange = (temperature) => {
    setScale("f");
    setTemperature(temperature);
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}
