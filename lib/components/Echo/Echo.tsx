import * as React from "react";
import * as styles from "./echo.scss";

export interface IEchoProps {
  value: string;
}

export const Echo: React.SFC<IEchoProps> = (props: IEchoProps) => (
  <div className={styles.echo}>{props.value}</div>
);
