import * as d3 from "d3";
import * as React from "react";
import { ID3Graph } from "../d3types";
import "./App.css";
import graphviz from "d3-graphviz";

interface IProps {
  width: number;
  height: number;
  graph: ID3Graph;
}

class App extends React.Component<IProps, {}> {
  private dotSrc: string = `
  digraph DB {
  graph [label="Click on a cell to convert to upper/lower case" labelloc="t", fontsize="20.0" tooltip=" "]
  rankdir=LR
  node [shape=plain]
  person [
      // NOTE: The use of HREF is a workaround for '[Dot] ID="value" fails to produce id string in svg:svg output for html nodes'
      //       See https://gitlab.com/graphviz/graphviz/issues/207
      //       For the workaorund and more info, see http://ftp.graphviz.org/mantisbt/view.php?id=2197
      label=< <TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0" CELLPADDING="4">
                <TR><TD>Person table</TD></TR>
                <TR><TD ID="p.id" PORT="id" HREF=" ">Person ID</TD></TR>
                <TR><TD ID="p.fn" PORT="fn" HREF=" ">First Name</TD></TR>
                <TR><TD ID="p.mn" PORT="mn" HREF=" ">Middle Name</TD></TR>
                <TR><TD ID="p.ln" PORT="ln" HREF=" ">Last Name</TD></TR>
              </TABLE> >
  ]
  address [
      label=< <TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0" CELLPADDING="4">
          <TR><TD>Addresses table</TD></TR>
          <TR><TD ID="a.id" PORT="id" HREF=" ">Address ID</TD></TR>
          <TR><TD ID="a.pid" PORT="pid" HREF=" ">Person ID</TD></TR>
          <TR><TD ID="a.index" PORT="index" HREF=" ">ZIP Code</TD></TR>
          <TR><TD ID="a.street" PORT="street" HREF=" ">Street Name</TD></TR>
          <TR><TD ID="a.house" PORT="house" HREF=" ">House Number</TD></TR>
          <TR><TD ID="a.town" PORT="town" HREF=" ">City/Town/Village Name</TD></TR>
          <TR><TD ID="a.state" PORT="state" HREF=" ">State Name</TD></TR>
          <TR><TD ID="a.district" PORT="district" HREF=" ">County/District Name</TD></TR>
          <TR><TD ID="a.country" PORT="country" HREF=" ">Country Name</TD></TR>
        </TABLE> >
  ]
  phone [
      label=< <TABLE BORDER="0" CELLBORDER="1" CELLSPACING="0" CELLPADDING="4">
          <TR><TD>Phone Number table</TD></TR>
          <TR><TD ID="n.pid" PORT="pid" HREF=" ">Person ID</TD></TR>
          <TR><TD ID="n.cc" PORT="cc" HREF=" ">Country Code</TD></TR>
          <TR><TD ID="n.ac" PORT="ac" HREF=" ">Area Code</TD></TR>
          <TR><TD ID="n.n" PORT="n" HREF=" ">Phone Number</TD></TR>
        </TABLE> >
  ]
  {phone:pid address:pid} -> person:id
  }
  `;

  componentDidMount() {
    console.log(graphviz);
    const graph: any = d3.select(".graph");
    graph.graphviz().renderDot(this.dotSrc);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Blastcap</h1>
        </header>

        <div className="graph" />
      </div>
    );
  }
}

export default App;
