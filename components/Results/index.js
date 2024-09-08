"use client";

import React from "react";

import styles from "./Results.module.scss";

const Results = ({result}) => {
  return <div className={styles.results}>
    <h2>Results</h2>
    <p>{result.message}</p>
  </div>;
};

export default Results;
