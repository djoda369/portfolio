import React, { type FC } from "react";
import { SnackbarProvider as SnackbarActualProvider } from "notistack";
import SnackbarSuccessComponent from "../noistack/SnackbarSuccessComponent";
import SnackbarErrorComponent from "../noistack/SnackbarErrorComponent";
import { WithChildren } from "@/utils/types";

const SnackbarProvider: FC<WithChildren> = ({ children }) => {
  return (
    <SnackbarActualProvider
      maxSnack={3}
      Components={{
        success: SnackbarSuccessComponent,
        error: SnackbarErrorComponent,
      }}
    >
      {children}
    </SnackbarActualProvider>
  );
};

export default SnackbarProvider;
