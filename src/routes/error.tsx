import { Flex, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import { AxiosError } from "axios";
import { type FC, useMemo } from "react";
import { ErrorResponse, useRouteError } from "react-router-dom";

const RootError: FC = () => {
  const error = useRouteError() as Error & ErrorResponse & AxiosError<any>;
  const status = useMemo<ResultStatusType>(() => {
    if (error?.status) {
      switch (error?.status) {
        case 403:
        case 404:
        case 500:
          return error?.status;
        case 401:
          return 403;
        default:
          return "error";
      }
    }

    if (error?.response?.status) {
      switch (error?.response?.status) {
        case 403:
        case 404:
        case 500:
          return error?.response?.status;
        default:
          return "error";
      }
    }

    return 500;
  }, [error?.response?.status, error?.status]);
  return (
    <Flex
      align={"center"}
      justify={"center"}
      style={{ height: "100vh" }}
      id={"error-page"}
    >
      <Result
        status={status}
        title={error?.status || error?.response?.status || "500"}
        subTitle={
          error?.statusText || error?.response?.data?.message || error?.message
        }
      />
    </Flex>
  );
};

export { RootError };
