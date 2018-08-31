import * as d3 from "d3";
import * as React from "react";
import { ID3Node } from "../d3types";

export default class Label extends React.Component<{ node: ID3Node }, {}> {
  public ref: SVGTextElement;

  public componentDidMount() {
    d3.select(this.ref).data([this.props.node]);
  }

  public render() {
    return (
      <text className="label" ref={(ref: SVGTextElement) => (this.ref = ref)}>
        {this.props.node.id}
      </text>
    );
  }
}
