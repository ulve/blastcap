import * as d3 from "d3";
import * as React from "react";
import { ID3Graph, ID3Node } from "../d3types";
import Labels from "./Labels";
import Links from "./Links";
import Nodes from "./Nodes";

interface IProps {
  width: number;
  height: number;
  graph: ID3Graph;
}

class App extends React.Component<IProps, {}> {
  public simulation: any;

  constructor(props: IProps) {
    super(props);
    this.simulation = d3
      .forceSimulation()
      .force(
        "link",
        d3.forceLink().id((d: ID3Node) => {
          return d.id;
        })
      )
      .force("charge", d3.forceManyBody().strength(-100))
      .force(
        "center",
        d3.forceCenter(this.props.width / 2, this.props.height / 2)
      )
      .nodes(this.props.graph.nodes);

    this.simulation.force("link").links(this.props.graph.links);
  }

  public componentDidMount() {
    const node = d3.selectAll(".node");
    const link = d3.selectAll(".link");
    const label = d3.selectAll(".label");

    const ticked = () => {
      link
        .attr("x1", (d: any) => {
          return d.source.x;
        })
        .attr("y1", (d: any) => {
          return d.source.y;
        })
        .attr("x2", (d: any) => {
          return d.target.x;
        })
        .attr("y2", (d: any) => {
          return d.target.y;
        });

      node
        .attr("cx", (d: any) => {
          return d.x;
        })
        .attr("cy", (d: any) => {
          return d.y;
        });

      label
        .attr("x", (d: any) => {
          return d.x + 5;
        })
        .attr("y", (d: any) => {
          return d.y + 5;
        });
    };
    this.simulation.nodes(this.props.graph.nodes).on("tick", ticked);
  }

  public render() {
    const { width, height, graph } = this.props;
    return (
      <svg className="container" width={width} height={height}>
        <Links links={graph.links} />
        <Nodes nodes={graph.nodes} simulation={this.simulation} />
        <Labels nodes={graph.nodes} />
      </svg>
    );
  }
}

export default App;
