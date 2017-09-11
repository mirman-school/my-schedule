import React from "react";
import { Table, Label } from "semantic-ui-react";
import _ from "lodash";
import EditBox from "./EditBox";
import PeriodEditBox from "./PeriodEditBox";
import {changeCellData, changePeriodData, deletePeriod} from "../lib/actions.js";

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
                id={"editbox_" + d + "_" + periodKey}
                key={"editbox-" + d + "-" + periodKey}
            />
        );
    });

    // Create our singleton time cell to hold the time label
    const periodCallback = (event, data, text, tstart, tend) => {
        var textVal = document.getElementById(text).value;
        var tStartVal = document.getElementById(tstart).value.toString();
        var tEndVal = document.getElementById(tend).value.toString();
        console.debug("A period change was requested! Text: " + textVal + ", starttime: " + tStartVal + ", time end: " + tEndVal + ". Now telling actions.js");
        changePeriodData(periodKey, textVal, tStartVal, tEndVal);
    }
    const timeCell = (
        <PeriodEditBox
            trigger={
                <Table.Cell key={period.start}>
                    <Label>{period.start} - {period.end}</Label> {period.name} 
                </Table.Cell>
            }
            onClick={periodCallback}
            fillerText={period.name}
            id={"periodeditbox_" + periodKey}
            key={"periodeditbox-" + periodKey}
            onDelete={() => {
                deletePeriod(periodKey)
            }}
        />
        
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