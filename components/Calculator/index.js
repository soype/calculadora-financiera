"use client";

import { useFormState } from 'react-dom';
import { calculateMortgage } from "@/lib/serverActions";

import styles from "./Calculator.module.scss";

const Calculator = ({ title, form }) => {

  const [state, formAction] = useFormState(calculateMortgage, { error: null, message: null });

  // Convert form fields to array
  const fieldsArray = Object.values(form.fields);

  return (
    <div className={styles.calculator}>
        <h2>{title}</h2>
      <form action={formAction} className={styles.form} onSubmit={formAction}>
        <button className={styles.clear}>{form.clear}</button>
        {fieldsArray.map((field) => {
          return (
            <div key={field.name}>
              <div className={styles["field"]}>
                <label htmlFor={field.name}>{field.label}</label>
                <div className={`${styles["field-container"]} ${field.symbol.length > 1 && styles["field-container--right"]}`}>
                  {field.symbol.length < 2 && <span className={`${styles.symbol} ${styles["symbol--left"]}`}>{field.symbol}</span>}
                  <input className={styles.input} id={field.name} name={field.name} type="text" placeholder={field.placeholder} />
                  {field.symbol.length > 1 && <span className={`${styles.symbol} ${styles["symbol--right"]}`}>{field.symbol}</span>}
                </div>
              </div>
              {state.error == field.name && <p className={styles.error}>{field.error}</p>}
            </div>
          );
        })}
        {state.message && <p className={styles["global-error"]}>{state.message}</p>}
        <button className={styles.submit}>{form.submit}</button>
      </form>
    </div>
  );
};

export default Calculator;
