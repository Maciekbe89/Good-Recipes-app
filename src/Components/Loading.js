import React from "react";
import Spinner from "./Spinner";
import {usePromiseTracker} from "react-promise-tracker";

export const Loading = () => {
  const {promiseInProgress} = usePromiseTracker();

  return (
    <div className="spinner">{promiseInProgress ? <Spinner /> : null}</div>
  );
};

export default Loading;
