// import moment from "moment";
import _ from "lodash";

export const classesByPeriod = (classes, periodId) => {
    const res = {};
    return _.pickBy(classes, (c) => {
        return c.periodId === periodId;
    });
}

export const classesByCycleDay = (classes, cycleDayId) => {
    const res = {};
    return _.pickBy(classes, (c) => {
        return c.cycleDayId === cycleDayId;
    });
}