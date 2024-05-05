import React from "react";
import { Typography } from "@mui/material";

import { raleway } from "../theme/fonts";

const AppText = (props: any) => {
  return (
    <Typography
      fontWeight={
        props.type === "header"
          ? 700
          : props.fontWeight
          ? props.fontWeight
          : 400
      }
      className={raleway.className}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default AppText;
