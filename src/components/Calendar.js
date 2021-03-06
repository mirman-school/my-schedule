import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Label} from 'semantic-ui-react';
import _ from "lodash";
import PeriodRow from "./PeriodRow";
import { classesByPeriod } from "../lib/functions";
import DayEditBox from "./DayEditBox";
import { changeDayData, deleteDay } from "../lib/actions";

const Calendar = ({calendarData}) => {

  const data = calendarData;

  // Guard for failed load of data
  if(!data) return null;


  const columnKeys = _.keys(data.cycleDays);

  // Spacer cell 
  const periodHeaderCell = (<Table.HeaderCell key={"timeColumn"}>Time</Table.HeaderCell>); 

  // Computed cells

  const cycleCells = (columnKeys.map((c, idx) => {
    const cycleDay = data.cycleDays[c];
    var callback = (event, data, input) => {
        var newVal = document.getElementById(input).value;
        console.debug("A day change was requested! Text: " + newVal + ". Now telling actions.js");
        changeDayData(c, newVal);
    }
    
    return (
      <DayEditBox
          trigger={
            <Table.HeaderCell key={idx}>
              {cycleDay.name}
            </Table.HeaderCell>
          }
          onClick={callback}
          onDelete={() => {
            deleteDay(c);
          }}
          fillerText={cycleDay.name}
          id={"dayeditbox_" + c}
          key={"dayeditbox-" + c}
      />
      
    );
  }));

  // Use Array.concat() to join the spacer cell with the computed ones
  const headerCells = [periodHeaderCell].concat(cycleCells);
  // const headerCells = cycleCells;

  const header = (
    <Table.Header>
      <Table.Row>
        {headerCells}
      </Table.Row>
    </Table.Header>
  );

  // Use period data to create rows
  // We'll pase filtered lists of classes to each row, then
  // let the row handle the filtering by cycle day
  const periodRows =  _.keys(data.periods).map((p) => {
    const period = data.periods[p];
    //const k = "row-" + _.keys(data.periods)[p];

    const filteredPeriods = classesByPeriod(data.mySchedule, p);
    return (
        <PeriodRow
          key={p}
          period={period} 
          periodClasses={filteredPeriods} 
          cycleDays={data.cycleDays}
          periodKey={p}
        />
    );
  });

  //put it all together, like a sandwich
  return(
    <Table celled unstackable striped id="calendar">
      {header}
      <Table.Body>
        {periodRows}
      </Table.Body>
    </Table>
  );
};

export default Calendar;