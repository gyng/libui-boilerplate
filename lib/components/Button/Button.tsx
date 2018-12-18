import * as React from "react";
import * as styles from "./button.scss";

export interface IButtonProps {
  value: string;
}

export class Button extends React.Component<IButtonProps, {}> {
  public render() {
    return <button className={styles.test}>{this.props.value}</button>;
  }
}
