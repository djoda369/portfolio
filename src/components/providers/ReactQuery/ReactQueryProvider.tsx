"use client";

import React, { useCallback, type FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useSnackbar } from "notistack";
import { WithChildren } from "@/utils/types";

const ReactQueryProvider: FC<WithChildren> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleError = useCallback(
    (error: any) => {
      enqueueSnackbar(error?.response?.data?.message || "Error", {
        variant: "error",
      });
    },
    [enqueueSnackbar]
  );

  const handleSuccess = useCallback(
    (response: any) => {
      enqueueSnackbar(response?.message || "Success", {
        variant: "success",
      });
    },
    [enqueueSnackbar]
  );

  const [queryClient] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          onError: handleError,
        },
        mutations: {
          onError: handleError,
          onSuccess: handleSuccess,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
