import React from "react";

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function TemperatureInput(props) {
  // const [temperature, setTemperature] = React.useState("");

  const handleChange = (e) => {
    // setTemperature(e.target.value);
    props.onTemperatureChange(e.target.value);
  };
  return (
    <fieldset>
      <legend>온도를 입력하세요(단위 : {scaleNames[props.scale]})</legend>
      {/* <input value={temperature} onChange={handleChange} /> */}
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}
export default TemperatureInput;
