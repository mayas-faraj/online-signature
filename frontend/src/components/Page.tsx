import React, { FunctionComponent, ReactNode } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import styles from "../styles/page.module.scss";

const Page: FunctionComponent<{ title: string, children: ReactNode }> = ({ title, children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <div className={styles.wrapper}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </div>
    </>
  );
};

export default Page;
