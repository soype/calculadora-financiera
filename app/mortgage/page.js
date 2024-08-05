import styles from "./Mortgage.module.scss";
import Calculator from "@/components/Calculator";
import Results from "@/components/Results";

import data from "@/content/mortgage.json";

export default function Mortgage() {
  return (
    <div className={styles["mortgage-container"]}>
      <Calculator title={data.calculator.title} form={data.calculator.form}></Calculator>
      <Results></Results>
    </div>
  );
}
