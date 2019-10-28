import React from "react";

import Spinner from "../spinner/spinner.component";

const withSpinner = WrappedComponent => ({ isLoading, ...props }) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...props} />;
};

export default withSpinner;
