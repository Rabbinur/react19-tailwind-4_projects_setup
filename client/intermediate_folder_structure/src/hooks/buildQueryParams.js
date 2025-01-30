export const buildQueryParams = (paramsObj) => {
  const params = new URLSearchParams();

  Object.keys(paramsObj).forEach((key) => {
    const value = paramsObj[key];

    if (Array.isArray(value)) {
      // Handle array values
      value.forEach((val) => {
        if (val !== undefined && val !== null) {
          params.append(key, val);
        }
      });
    } else if (typeof value === "string" && value) {
      // Handle string values
      params.append(key, value);
    } else if (typeof value === "number") {
      // Handle numeric values
      params.append(key, value);
    }
  });

  return params;
};
