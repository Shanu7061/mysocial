import { useState } from "react";

const HTTP_HEADERS = {
  "Cache-Control":
    "no-store, no-cache,must-revalidate",
  Pragma: "no-cache",
  Expires: "0",
  Accept: "application/json",
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Accept-Language": "en-us",
  "X-Frame-Options": "deny",
  "Content-Security-Policy": "base-uri self",
  "Referrer-Policy": "no-referrer",
  Permission_policy: "none",
};

const useHttp = () => {
  const [isLoading, setIsLoading] =
    useState(false);
  const [error, setError] = useState({
    message: "",
  });
  const sendRequest = async (
    requestConfig: any,
    applyData: any,
  ) => {
    setIsLoading(true);
    setError({ message: "" });
    try {
      const response = await fetch(
        requestConfig.url,
        {
          method: requestConfig.method
            ? requestConfig.method
            : "GET",
          headers: HTTP_HEADERS,
          body: requestConfig.body
            ? JSON.stringify(requestConfig.body)
            : null,
        },
      );
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("Unauthorized");
        } else
          throw new Error("HTTP request failed");
      }
      if (applyData) {
        const data = await response.json();
        applyData(data || []);
        //   (data?.d?.__count !== undefined && data?.d) ||
        //     data?.d?.results ||
        //     data ||
        //     []
        // );
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        let errorMsg = err?.message;
        if (
          err?.message?.includes(
            "Unexpected Token",
          )
        ) {
          errorMsg = "Session Expired";
        }
        setError({
          message:
            errorMsg || "Something Went Wrong",
        });
        console.error(errorMsg);
      }
    }
    setIsLoading(false);
  };
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
// Usage

// const { isLoading, error, sendRequest } = useHttp();
// sendRequest(
//   {
//     url: '',
//     method: '',
//     body: {},
//   },
//   callBack(data)
// );
