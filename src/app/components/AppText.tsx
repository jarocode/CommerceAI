import React from "react";
import { Typography } from "@mui/material";

import { raleway } from "theme/fonts";
import { colors } from "theme/colors";

const AppText = (props: any) => {
  return (
    <Typography
      color={colors.text}
      fontSize={"14px"}
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
