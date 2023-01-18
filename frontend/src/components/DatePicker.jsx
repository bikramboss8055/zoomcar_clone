import {
  Box,
  Button,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { addDays } from "date-fns";
import React, { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function DatePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <div>
      <Box align="center" mt="40px">
        <Box>
          <DateRange
            onChange={(item) => setState([item.selection])}
            editableDateInputs={true}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
          {/* <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      /> */}
        </Box>
        <Box align="center" w="750px" mt="40px">
          <Flex justifyContent="space-around" mb="30px">
            <Text as="b">Pick Up Time</Text>
            <SliderThumbWithTooltip />
          </Flex>
          <Flex justifyContent="space-around" mb="30px">
            <Text as="b">Drop Off Time</Text>
            <SliderThumbWithTooltip />
          </Flex>
        </Box>
        <Box>
          <Button size="lg" color="white" bg="green" w="500px">
            Continue
          </Button>
        </Box>
      </Box>
    </div>
  );
}

function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = React.useState(10);
  const [showTooltip, setShowTooltip] = React.useState(false);
  console.log(sliderValue);
  return (
    <Slider
      w="500px"
      id="slider"
      defaultValue={5}
      min={0}
      max={24}
      colorScheme="green"
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb>
        <SliderMark
          value={sliderValue}
          textAlign="center"
          colorScheme="green"
          bg="green"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}.00
        </SliderMark>
      </SliderThumb>
      {/* <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}.00`}
        >
          <SliderThumb />
        </Tooltip> */}
    </Slider>
  );
}

export default DatePicker;
