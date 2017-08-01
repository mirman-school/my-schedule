import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'semantic-ui-react';
export default class Calendar extends React.Component {
  render() {
    
    const days = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var headerCells = [];
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
    var table = (
      <Table>
        {header}
      </Table>
    );
    return table;
  }
};