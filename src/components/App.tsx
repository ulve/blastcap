import * as React from "react";
import Graph from "vis-react";
import "./App.css";

interface IVizProps {
  width: number;
  height: number;
}

export default class App extends React.Component<IVizProps, {}> {
  public graph: any;
  public options: any;

  constructor(props: IVizProps) {
    super(props);
    this.graph = {
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ],
      nodes: [
        { id: 1, label: "Node 1" },
        { id: 2, label: "Node 2" },
        { id: 3, label: "Node 3" },
        { id: 4, label: "Node 4" },
        { id: 5, label: "Node 5" }
      ]
    };

    this.options = {
      edges: {
        color: "#000000"
      },

      layout: {
        hierarchical: true
      }
    };
  }

  public render() {
    return <Graph graph={this.graph} options={this.options} />;
  }
}
