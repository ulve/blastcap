import * as d3 from "d3";
import * as React from "react";
import { ID3Link } from "../d3types";

export default class Link extends React.Component<{ link: ID3Link }, {}> {
  public ref: SVGLineElement;

  public componentDidMount() {
    d3.select(this.ref).data([this.props.link]);
  }

  public render() {
    return (
      <line
        className="link"
        ref={(ref: SVGLineElement) => (this.ref = ref)}
        strokeWidth={Math.sqrt(this.props.link.value)}
      />
    );
  }
}
