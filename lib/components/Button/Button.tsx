import * as React from "react";
import * as styles from "./button.scss";

export interface IButtonProps {
  value: string;
}

export const Button: React.SFC<IButtonProps> = (props: IButtonProps) => (
  <button className={styles.test}>{props.value}</button>
);
