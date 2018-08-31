import * as d3 from "d3";
import * as React from "react";
import { ID3Node } from "../d3types";

export default class Node extends React.Component<
  { node: ID3Node; color: string },
  {}
> {
  public ref: SVGCircleElement;

  public componentDidMount() {
    d3.select(this.ref).data([this.props.node]);
  }

  public render() {
    return (
      <circle
        className="node"
        r={5}
        fill={this.props.color}
        ref={(ref: SVGCircleElement) => (this.ref = ref)}
      >
        <title>{this.props.node.id}</title>
      </circle>
    );
  }
}
