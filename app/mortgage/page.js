import styles from "./Mortgage.module.scss";
import Calculator from "@/components/Calculator";
import Results from "@/components/Results";

export default async function Mortgage() {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/getMortgage`);
  const data = await res.json();

  return (
    <div className={styles["mortgage-container"]}>
      <Calculator
        title={data.calculator.title}
        form={data.calculator.form}
      ></Calculator>
      <Results></Results>
    </div>
  );
}
