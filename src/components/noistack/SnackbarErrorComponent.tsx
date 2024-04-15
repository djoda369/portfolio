import { forwardRef } from "react";
import { useTheme } from "@mui/material";
import type { CustomContentProps } from "notistack";

import SnackbarBaseComponent from "./SnackbarBaseComponent";

const SnackbarErrorComponent = forwardRef<HTMLDivElement, CustomContentProps>(
  ({ id, ...props }, ref) => {
    const theme = useTheme();

    return (
      <SnackbarBaseComponent
        id={id}
        color={theme.palette.error.main}
        {...props}
        ref={ref}
      />
    );
  },
);
SnackbarErrorComponent.displayName = "SnackbarErrorComponent";

export default SnackbarErrorComponent;
