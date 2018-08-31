import * as React from "react";
import { ID3Node } from "../d3types";
import Label from "./Label";

export default class Labels extends React.Component<{ nodes: ID3Node[] }, {}> {
  public render() {
    const labels = this.props.nodes.map((node: ID3Node, index: number) => {
      return <Label key={index} node={node} />;
    });

    return <g className="labels">{labels}</g>;
  }
}
