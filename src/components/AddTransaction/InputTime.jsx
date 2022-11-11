// import React from "react";
// import { Dayjs } from "dayjs";
// import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// export default function InputTime() {
//   const [value, setValue] = (React.useState < Dayjs) | (null > null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DatePicker
//         label="Basic example"
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//     </LocalizationProvider>
//   );
// }
import React from "react";
import Input from "@mui/material/Input";
// import { format } from "date-fns";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function InputTime(props) {
  return (
    <Box
      sx={{
        maxWidth: 450,
        backgroundColor: "white",

        padding: "10px 50px",
      }}
    >
      <Typography variant="body2">DATE</Typography>
      <Input
        value={props.value}
        name="date"
        onChange={props.handleChange}
        //value={props.value}
        type="datetime-local"
        // defaultValue={format(new Date(), "yyyy-MM-dd HH:mm")
        //   .split(" ")
        //   .join("T")}
        sx={{
          width: "100%",
          color: "#438883",
          border: "2px solid #438883",
          borderRadius: 2,
          padding: "5px 20px",
          mt: 1,
          "&::before": { borderBottom: "none" },
          "&::after": { borderBottom: "none" },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        }}
      />
      {!props.isValid && (
        <Typography variant="subtitle2" color="red">
          Require
        </Typography>
      )}
    </Box>
  );
}
