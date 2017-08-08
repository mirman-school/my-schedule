import React from "react";
import { Table } from "semantic-ui-react";
import _ from "lodash";

const PeriodRow = ({period, periodClasses, cycleDays}) => {

    // Do some fancy filtering to get the right classes
    // TODO: Some sorting?
    const cycleCells = _.keys(cycleDays).map((d) => {
        const cycleDay = cycleDays[d];
        const cycleDayClass = periodClasses[_.findKey(periodClasses, (c) => {
            return c.cycleDayId === d;
        })];

        // Guard for no result
        if(!cycleDayClass) return null;

        return (
            <Table.Cell key={d + cycleDayClass.periodId}>
                {cycleDayClass.name}
            </Table.Cell>
        );
    });

    // Create our singleton time cell to hold the time label
    const timeCell = (
        <Table.Cell key={period.start}>
            {period.name} ({period.start} - {period.end})
        </Table.Cell>
    );

    // Use that Array.concat() trick to make a single array
    const cells = [timeCell].concat(cycleCells);

    return (
        <Table.Row>
            {cells}
        </Table.Row>
    );
}

export default PeriodRow;