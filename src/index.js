import React from "react";
import {render} from "react-dom";
//import my components
import Calendar from "./react_components/Calendar"


fetch('testdata.json', {
	method: 'get'
}).then(function(response) {
	return response.json();
}).then(function(json){
    console.log(json);
    var data = json.testdata;



    var maxRows = 0;
    Object.values(data).map((val) => {
        if(Object.keys(val).length > maxRows)
            maxRows = Object.keys(val).length;
    });
    //The array should be rectangular, but do this just in case...

    render(
        <Calendar days={Object.keys(data).length} periods={maxRows}/>, document.getElementById("root"), () => {


            Object.keys(data).map((val, index) => {
                document.getElementById("cal-head-" + index).innerHTML = "<b>" + val + "</b>";
            });
            Object.values(data).map((day, dayI) => {
                Object.values(day).map((val, period) => {
                    document.getElementById("cal-" + dayI + "-" + period).innerHTML = val.name;
                });
            });
        
        
        
        });
    





});