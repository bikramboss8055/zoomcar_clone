import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  //   FormControl,
  FormLabel,
  Button,
  Input,
  Stack,
  ButtonGroup,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  //   IconButton,
  useDisclosure,
} from "@chakra-ui/react";

// import { EditIcon } from "@chakra-ui/icons";
// import FocusLock from "react-focus-lock";

// const TextInput = React.forwardRef((props, ref) => {
//   return (
//     <FormControl>
//       <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
//       <Input ref={ref} id={props.id} {...props} />
//     </FormControl>
//   );
// });

const Form = ({ firstFieldRef, onCancel }) => {
  const firstField = React.useRef();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [offprice, setoffPrice] = useState("");
  const [trans, setTrans] = useState("");
  const [fueltype, setfuelType] = useState("");
  const [seat, setSeat] = useState("");
  const [cartype, setCartype] = useState("");
  const [rating, setRating] = useState("");
  const [km, setKm] = useState("");
  const [loc, setLoc] = useState("");
  const [owner, setOwner] = useState("");

  const handleClick = () => {
    const payload = {
      title: title,
      image: image,
      price: price,
      offprice: offprice,
      transmission: trans,
      fueltype: fueltype,
      seat: seat,
      cartype: cartype,
      rating: rating,
      km: km,
      location: loc,
      owner: owner,
    };

    console.log(payload);
  };
  return (
    <Stack spacing={4}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "5px",
        }}
      >
        <Box>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input
            ref={firstField}
            id="title"
            placeholder="Please enter user Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="url">Image</FormLabel>
          <InputGroup>
            <InputLeftAddon>http://</InputLeftAddon>
            <Input
              type="url"
              id="url"
              placeholder="Please enter ImageUrl"
              onChange={(e) => setImage(e.target.value)}
            />
            <InputRightAddon>.com</InputRightAddon>
          </InputGroup>
        </Box>

        {/* <Box>
                <FormLabel htmlFor="owner">Select Owner</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="segun">Segun Adebayo</option>
                  <option value="kola">Kola Tioluwani</option>
                </Select>
              </Box> */}

        {/* <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box> */}

        <Box>
          <FormLabel htmlFor="price">Price</FormLabel>
          <Input
            ref={firstField}
            id="price"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="offprice">OffPrice</FormLabel>
          <Input
            ref={firstField}
            id="offprice"
            placeholder="OffPrice"
            onChange={(e) => setoffPrice(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="transmission">Transmission</FormLabel>
          <Input
            ref={firstField}
            id="transmission"
            placeholder="Transmission"
            onChange={(e) => setTrans(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="fueltype">Fueltype</FormLabel>
          <Input
            ref={firstField}
            id="fueltype"
            placeholder="Fueltype"
            onChange={(e) => setfuelType(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="seat">Seat</FormLabel>
          <Input
            ref={firstField}
            id="seat"
            placeholder="Seat"
            onChange={(e) => setSeat(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="cartype">Cartype</FormLabel>
          <Input
            ref={firstField}
            id="cartype"
            placeholder="Cartype"
            onChange={(e) => setCartype(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="rating">Rating</FormLabel>
          <Input
            ref={firstField}
            id="rating"
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="km">Km</FormLabel>
          <Input
            ref={firstField}
            id="km"
            placeholder="Distance"
            onChange={(e) => setKm(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="location">Location</FormLabel>
          <Input
            ref={firstField}
            id="location"
            placeholder="Loacation Name"
            onChange={(e) => setLoc(e.target.value)}
          />
        </Box>

        <Box>
          <FormLabel htmlFor="owner">Owner</FormLabel>
          <Input
            ref={firstField}
            id="owner"
            placeholder="Owner"
            onChange={(e) => setOwner(e.target.value)}
          />
        </Box>
      </div>
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button colorScheme="teal" onClick={handleClick}>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

const PopoverForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <>
      {/* <Box display="inline-block" mr={3}>
        Update
      </Box> */}

      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        {/* <PopoverTrigger>
          <IconButton size="sm" icon={<EditIcon />} />
        </PopoverTrigger> */}
        <PopoverTrigger>
          <Button style={{ background: "forestgreen", color: "white" }}>
            Update
          </Button>
        </PopoverTrigger>
        <PopoverContent p={5}>
          {/* <FocusLock returnFocus persistentFocus={false}> */}
          <PopoverArrow />
          <PopoverCloseButton />
          <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          {/* </FocusLock> */}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopoverForm;
