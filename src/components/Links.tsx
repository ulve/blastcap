import * as React from "react";
import { ID3Link } from "../d3types";
import Link from "./Link";

export default class Links extends React.Component<{ links: ID3Link[] }, {}> {
  public render() {
    const links = this.props.links.map((link: ID3Link, index: number) => {
      return <Link key={index} link={link} />;
    });

    return <g className="links">{links}</g>;
  }
}
