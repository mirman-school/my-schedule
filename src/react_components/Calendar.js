import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Label} from 'semantic-ui-react';
export default class Calendar extends React.Component {
  render() {
    //header
    const days = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var headerCells = [];
    headerCells.push(<Table.HeaderCell>Period</Table.HeaderCell>)
    for(var day = 0; day < this.props.days; day++){
      const letter = days[day % days.length];
      headerCells.push(<Table.HeaderCell>Day {letter}</Table.HeaderCell>);
    }
    var header = (
      <Table.Header>
        <Table.Row>
          {headerCells}
        </Table.Row>
      </Table.Header>
    );

    //body
    var rows = [];
    for(var period = 0; period < this.props.periods; period++){
      var cells = [];
      var rowId = "cal-" + period;
      cells.push(<Table.Cell id={rowId}><Label>--:-- to --:--</Label> Period {period + 1}</Table.Cell>);
      for(var cell = 0; cell < this.props.days; cell++){
        var cellId = rowId + "-" + cell;
        cells.push(<Table.Cell id={cellId}>Loading data...</Table.Cell>);
      }
      rows.push(<Table.Row>{cells}</Table.Row>);
    }
    var body = (
      <Table.Body>
        {rows}
      </Table.Body>
    );


    //put it all together, like a sandwich
    var table = (
      <Table>
        {header}
        {body}
      </Table>
    );
    return table;
  }
};