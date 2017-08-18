import React from "react";
import { Table, Label } from "semantic-ui-react";
import _ from "lodash";
import EditBox from "./EditBox";
import {changeCellData} from "../lib/actions.js";

const PeriodRow = ({period, periodClasses, cycleDays, periodKey}) => {

    // Do some fancy filtering to get the right classes
    // TODO: Some sorting?
    var cycleCells = _.keys(cycleDays).map((d) => {
        const cycleDay = cycleDays[d];
        const cycleDayClass = periodClasses[_.findKey(periodClasses, (c) => {
            return c.cycleDayId === d;
        })];

        // Guard for no result
        if(!cycleDayClass) return null;
        var callback = (event, data, input) => {
            var newVal = document.getElementById(input).value;
            console.debug("A change was requested! Text: " + newVal + ". Now telling actions.js");
            changeCellData(d, periodKey, newVal);
        }
        return (
            <EditBox
                trigger={
                    <Table.Cell key={d + cycleDayClass.periodId}>
                        {cycleDayClass.name}
                    </Table.Cell>
                }
                onClick={callback}
                fillerText={cycleDayClass.name}
            />
        );
    });

    // Create our singleton time cell to hold the time label
    const timeCell = (
        <Table.Cell key={period.start}>
            <Label>{period.start} - {period.end}</Label> {period.name} 
        </Table.Cell>
    );

    // Use that Array.concat() trick to make a single array
    const cells = [timeCell].concat(cycleCells);

    return (
        <Table.Row key={"period-" + period.name}>
            {cells}
        </Table.Row>
    );
}

export default PeriodRow;