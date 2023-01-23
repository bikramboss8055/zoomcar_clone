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
// import './datepicker.css'
import { addDays } from "date-fns";
import React, { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Link, useParams } from "react-router-dom";

function DatePicker() {
  const { car_id } = useParams()
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);
  console.log(state[0].startDate, state[0].endDate)

  const handleSelect = (item) => {
    const daysSelected = (
      item.selection.endDate - item.selection.startDate
    ) / (1000 * 60 * 60 * 24);
    // console.log("Number of days selected: ", daysSelected+1);
    setState([item.selection]);
     const No_of_days = {}
     No_of_days.startDate = new Date(state[0].startDate).toString()
     No_of_days.endDate = new Date(state[0].endDate).toString()
     No_of_days.days=daysSelected+1
      localStorage.setItem('Days',JSON.stringify(No_of_days))
      
  };

  
//   const arpit = new Date(state[0].startDate)
//   console.log(arpit)
//   console.log(Date())
//   console.log(state[0].startDate);
//   console.log(state[0].endDate);
  return (
    <div>
      <Box align="center" mt="40px">
        <Box>
          <DateRange
            onChange={handleSelect}
            editableDateInputs={true}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            
          />
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
          <Link to={`/checkout/${car_id}`}>
          <Button  size="lg" color="white" bg="green" w="500px">
            Continue
          </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

function SliderThumbWithTooltip() {
  const [sliderValue, setSliderValue] = React.useState(10);
  const [showTooltip, setShowTooltip] = React.useState(false);
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
          colorscheme="green"
          bg="green"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}.00
        </SliderMark>
      </SliderThumb>
    </Slider>
  );
}

export default DatePicker;
