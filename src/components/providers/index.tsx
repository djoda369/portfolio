"use client";

import React from "react";
import ReactQueryProvider from "./ReactQuery/ReactQueryProvider";
import SnackbarProvider from "./SnackBarProvider";
import Layout from "../layout/DefaultLayout";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <SnackbarProvider>
      <ReactQueryProvider>
        <Layout>{children}</Layout>
      </ReactQueryProvider>
    </SnackbarProvider>
  );
};

export default Providers;
