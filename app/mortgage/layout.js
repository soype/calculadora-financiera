import styles from "./Mortgage.module.scss";

import form from "@/content/mortgage.json";

export const metadata = {
  title: form.title,
  description: form.description,
};

export default function RootLayout({ children }) {
  return (
    <section className={styles.mortgage}>
      {children}
    </section>
  );
}
