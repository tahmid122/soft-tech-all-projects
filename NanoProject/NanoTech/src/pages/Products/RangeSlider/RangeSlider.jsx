import React, { useState } from "react";
import { Slider, Typography, Box } from "@mui/material";
import "./rangeSlider.css";
function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  initialValue = [20, 80],
  onChange,
}) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="rangeSlider">
      <Box width="100%" margin="auto" padding={2}>
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <p style={{ color: "black" }}>Min: {value[0]} টাকা</p>
          <p style={{ color: "black" }}>Max: {value[1]} টাকা</p>
        </Box>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={min}
          max={max}
          step={step}
          style={{ color: "#FF6900" }}
        />
      </Box>
    </div>
  );
}

export default RangeSlider;
