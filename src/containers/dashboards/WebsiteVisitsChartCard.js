/* eslint react/style-prop-object: 0 */

import React from "react";
import {
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import IntlMessages from "../../helpers/IntlMessages";
import { Canvas } from 'react-canvas-js';

// require("@babel/core").transform("code", {
//   plugins: ["@babel/plugin-proposal-export-default-from"]
// });
// require("../../assets/canvasjs.min.js");
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = Canvas.CanvasJS;
var CanvasJSChart = Canvas.CanvasJSChart;

var chart = new Canvas("chartContainer", {
  title: {
    text: "House Median Price"
  },
  axisX: {
    valueFormatString: "MMM YYYY"
  },
  axisY2: {
    title: "Median List Price",
    prefix: "$",
    suffix: "K"
  },
  toolTip: {
    shared: true
  },
  legend: {
    cursor: "pointer",
    verticalAlign: "top",
    horizontalAlign: "center",
    dockInsidePlotArea: true,
    itemclick: toogleDataSeries
  },
  data: [{
    type:"line",
    axisYType: "secondary",
    name: "San Fransisco",
    showInLegend: true,
    markerSize: 0,
    yValueFormatString: "$#,###k",
    dataPoints: [   
      { x: new Date(2014, parseInt('00'), parseInt('01')), y: 850 },
      { x: new Date(2014, parseInt('01'), parseInt('01')), y: 889 },
      { x: new Date(2014, parseInt('02'), parseInt('01')), y: 890 },
      { x: new Date(2014, parseInt('03'), parseInt('01')), y: 899 },
      { x: new Date(2014, parseInt('04'), parseInt('01')), y: 903 },
      { x: new Date(2014, parseInt('05'), parseInt('01')), y: 925 },
      { x: new Date(2014, parseInt('06'), parseInt('01')), y: 899 },
      { x: new Date(2014, parseInt('07'), parseInt('01')), y: 875 },
      { x: new Date(2014, parseInt('08'), parseInt('01')), y: 927 },
      { x: new Date(2014, parseInt('09'), parseInt('01')), y: 949 },
      { x: new Date(2014, 10, parseInt('01')), y: 946 },
      { x: new Date(2014, 11, parseInt('01')), y: 927 },
      { x: new Date(2015, parseInt('00'), parseInt('01')), y: 950 },
      { x: new Date(2015, parseInt('01'), parseInt('01')), y: 998 },
      { x: new Date(2015, parseInt('02'), parseInt('01')), y: 998 },
      { x: new Date(2015, parseInt('03'), parseInt('01')), y: 1050 },
      { x: new Date(2015, parseInt('04'), parseInt('01')), y: 1050 },
      { x: new Date(2015, parseInt('05'), parseInt('01')), y: 999 },
      { x: new Date(2015, parseInt('06'), parseInt('01')), y: 998 },
      { x: new Date(2015, parseInt('07'), parseInt('01')), y: 998 },
      { x: new Date(2015, parseInt('08'), parseInt('01')), y: 1050 },
      { x: new Date(2014, parseInt('09'), parseInt('01')), y: 1070 },
      { x: new Date(2015, 10, parseInt('01')), y: 1050 },
      { x: new Date(2015, 11, parseInt('01')), y: 1050 },
      { x: new Date(2016, parseInt('00'), parseInt('01')), y: 995 },
      { x: new Date(2016, parseInt('01'), parseInt('01')), y: 1090 },
      { x: new Date(2016, parseInt('02'), parseInt('01')), y: 1100 },
      { x: new Date(2016, parseInt('03'), parseInt('01')), y: 1150 },
      { x: new Date(2016, parseInt('04'), parseInt('01')), y: 1150 },
      { x: new Date(2016, parseInt('05'), parseInt('01')), y: 1150 },
      { x: new Date(2016, parseInt('06'), parseInt('01')), y: 1100 },
      { x: new Date(2016, parseInt('07'), parseInt('01')), y: 1100 },
      { x: new Date(2016, parseInt('08'), parseInt('01')), y: 1150 },
      { x: new Date(2016, parseInt('09'), parseInt('01')), y: 1170 },
      { x: new Date(2016, 10, parseInt('01')), y: 1150 },
      { x: new Date(2016, 11, parseInt('01')), y: 1150 },
      { x: new Date(2017, parseInt('00'), parseInt('01')), y: 1150 },
      { x: new Date(2017, parseInt('01'), parseInt('01')), y: 1200 },
      { x: new Date(2017, parseInt('02'), parseInt('01')), y: 1200 },
      { x: new Date(2017, parseInt('03'), parseInt('01')), y: 1200 },
      { x: new Date(2017, parseInt('04'), parseInt('01')), y: 1190 },
      { x: new Date(2017, parseInt('05'), parseInt('01')), y: 1170 }
    ]
  },
  {
    type: "line",
    axisYType: "secondary",
    name: "Manhattan",
    showInLegend: true,
    markerSize: 0,
    yValueFormatString: "$#,###k",
    dataPoints: [
      { x: new Date(2014, parseInt('00'), parseInt('01')), y: 1200 },
      { x: new Date(2014, parseInt('01'), parseInt('01')), y: 1200 },
      { x: new Date(2014, parseInt('02'), parseInt('01')), y: 1190 },
      { x: new Date(2014, parseInt('03'), parseInt('01')), y: 1180 },
      { x: new Date(2014, parseInt('04'), parseInt('01')), y: 1250 },
      { x: new Date(2014, parseInt('05'), parseInt('01')), y: 1270 },
      { x: new Date(2014, parseInt('06'), parseInt('01')), y: 1300 },
      { x: new Date(2014, parseInt('07'), parseInt('01')), y: 1300 },
      { x: new Date(2014, parseInt('08'), parseInt('01')), y: 1358 },
      { x: new Date(2014, parseInt('09'), parseInt('01')), y: 1410 },
      { x: new Date(2014, 10, parseInt('01')), y: 1480 },
      { x: new Date(2014, 11, parseInt('01')), y: 1500 },
      { x: new Date(2015, parseInt('00'), parseInt('01')), y: 1500 },
      { x: new Date(2015, parseInt('01'), parseInt('01')), y: 1550 },
      { x: new Date(2015, parseInt('02'), parseInt('01')), y: 1550 },
      { x: new Date(2015, parseInt('03'), parseInt('01')), y: 1590 },
      { x: new Date(2015, parseInt('04'), parseInt('01')), y: 1600 },
      { x: new Date(2015, parseInt('05'), parseInt('01')), y: 1590 },
      { x: new Date(2015, parseInt('06'), parseInt('01')), y: 1590 },
      { x: new Date(2015, parseInt('07'), parseInt('01')), y: 1620 },
      { x: new Date(2015, parseInt('08'), parseInt('01')), y: 1670 },
      { x: new Date(2014, parseInt('09'), parseInt('01')), y: 1720 },
      { x: new Date(2015, 10, parseInt('01')), y: 1750 },
      { x: new Date(2015, 11, parseInt('01')), y: 1820 },
      { x: new Date(2016, parseInt('00'), parseInt('01')), y: 2000 },
      { x: new Date(2016, parseInt('01'), parseInt('01')), y: 1920 },
      { x: new Date(2016, parseInt('02'), parseInt('01')), y: 1750 },
      { x: new Date(2016, parseInt('03'), parseInt('01')), y: 1850 },
      { x: new Date(2016, parseInt('04'), parseInt('01')), y: 1750 },
      { x: new Date(2016, parseInt('05'), parseInt('01')), y: 1730 },
      { x: new Date(2016, parseInt('06'), parseInt('01')), y: 1700 },
      { x: new Date(2016, parseInt('07'), parseInt('01')), y: 1730 },
      { x: new Date(2016, parseInt('08'), parseInt('01')), y: 1720 },
      { x: new Date(2016, parseInt('09'), parseInt('01')), y: 1740 },
      { x: new Date(2016, 10, parseInt('01')), y: 1750 },
      { x: new Date(2016, 11, parseInt('01')), y: 1750 },
      { x: new Date(2017, parseInt('00'), parseInt('01')), y: 1750 },
      { x: new Date(2017, parseInt('01'), parseInt('01')), y: 1770 },
      { x: new Date(2017, parseInt('02'), parseInt('01')), y: 1750 },
      { x: new Date(2017, parseInt('03'), parseInt('01')), y: 1750 },
      { x: new Date(2017, parseInt('04'), parseInt('01')), y: 1730 },
      { x: new Date(2017, parseInt('05'), parseInt('01')), y: 1730 }
    ]
  },
  {
    type: "line",
    axisYType: "secondary",
    name: "Seatle",
    showInLegend: true,
    markerSize: 0,
    yValueFormatString: "$#,###k",
    dataPoints: [
      { x: new Date(2014, parseInt('00'), parseInt('01')), y: 409 },
      { x: new Date(2014, parseInt('01'), parseInt('01')), y: 415 },
      { x: new Date(2014, parseInt('02'), parseInt('01')), y: 419 },
      { x: new Date(2014, parseInt('03'), parseInt('01')), y: 429 },
      { x: new Date(2014, parseInt('04'), parseInt('01')), y: 429 },
      { x: new Date(2014, parseInt('05'), parseInt('01')), y: 450 },
      { x: new Date(2014, parseInt('06'), parseInt('01')), y: 450 },
      { x: new Date(2014, parseInt('07'), parseInt('01')), y: 445 },
      { x: new Date(2014, parseInt('08'), parseInt('01')), y: 450 },
      { x: new Date(2014, parseInt('09'), parseInt('01')), y: 450 },
      { x: new Date(2014, 10, parseInt('01')), y: 440 },
      { x: new Date(2014, 11, parseInt('01')), y: 429 },
      { x: new Date(2015, parseInt('00'), parseInt('01')), y: 435 },
      { x: new Date(2015, parseInt('01'), parseInt('01')), y: 450 },
      { x: new Date(2015, parseInt('02'), parseInt('01')), y: 475 },
      { x: new Date(2015, parseInt('03'), parseInt('01')), y: 475 },
      { x: new Date(2015, parseInt('04'), parseInt('01')), y: 475 },
      { x: new Date(2015, parseInt('05'), parseInt('01')), y: 489 },
      { x: new Date(2015, parseInt('06'), parseInt('01')), y: 495 },
      { x: new Date(2015, parseInt('07'), parseInt('01')), y: 495 },
      { x: new Date(2015, parseInt('08'), parseInt('01')), y: 500 },
      { x: new Date(2015, parseInt('09'), parseInt('01')), y: 508 },
      { x: new Date(2015, 10, parseInt('01')), y: 520 },
      { x: new Date(2015, 11, parseInt('01')), y: 525 },
      { x: new Date(2016, parseInt('00'), parseInt('01')), y: 525 },
      { x: new Date(2016, parseInt('01'), parseInt('01')), y: 529 },
      { x: new Date(2016, parseInt('02'), parseInt('01')), y: 549 },
      { x: new Date(2016, parseInt('03'), parseInt('01')), y: 550 },
      { x: new Date(2016, parseInt('04'), parseInt('01')), y: 568 },
      { x: new Date(2016, parseInt('05'), parseInt('01')), y: 575 },
      { x: new Date(2016, parseInt('06'), parseInt('01')), y: 579 },
      { x: new Date(2016, parseInt('07'), parseInt('01')), y: 575 },
      { x: new Date(2016, parseInt('08'), parseInt('01')), y: 585 },
      { x: new Date(2016, parseInt('09'), parseInt('01')), y: 589 },
      { x: new Date(2016, 10, parseInt('01')), y: 595 },
      { x: new Date(2016, 11, parseInt('01')), y: 595 },
      { x: new Date(2017, parseInt('00'), parseInt('01')), y: 595 },
      { x: new Date(2017, parseInt('01'), parseInt('01')), y: 600 },
      { x: new Date(2017, parseInt('02'), parseInt('01')), y: 624 },
      { x: new Date(2017, parseInt('03'), parseInt('01')), y: 635 },
      { x: new Date(2017, parseInt('04'), parseInt('01')), y: 650 },
      { x: new Date(2017, parseInt('05'), parseInt('01')), y: 675 }
    ]
  },
  {
    type: "line",
    axisYType: "secondary",
    name: "Los Angeles",
    showInLegend: true,
    markerSize: 0,
    yValueFormatString: "$#,###k",
    dataPoints: [
      { x: new Date(2014, parseInt('00'), parseInt('01')), y: 529 },
      { x: new Date(2014, parseInt('01'), parseInt('01')), y: 540 },
      { x: new Date(2014, parseInt('02'), parseInt('01')), y: 539 },
      { x: new Date(2014, parseInt('03'), parseInt('01')), y: 565 },
      { x: new Date(2014, parseInt('04'), parseInt('01')), y: 575 },
      { x: new Date(2014, parseInt('05'), parseInt('01')), y: 579 },
      { x: new Date(2014, parseInt('06'), parseInt('01')), y: 589 },
      { x: new Date(2014, parseInt('07'), parseInt('01')), y: 579 },
      { x: new Date(2014, parseInt('08'), parseInt('01')), y: 579 },
      { x: new Date(2014, parseInt('09'), parseInt('01')), y: 579 },
      { x: new Date(2014, 10, parseInt('01')), y: 569 },
      { x: new Date(2014, 11, parseInt('01')), y: 525 },
      { x: new Date(2015, parseInt('00'), parseInt('01')), y: 535 },
      { x: new Date(2015, parseInt('01'), parseInt('01')), y: 575 },
      { x: new Date(2015, parseInt('02'), parseInt('01')), y: 599 },
      { x: new Date(2015, parseInt('03'), parseInt('01')), y: 619 },
      { x: new Date(2015, parseInt('04'), parseInt('01')), y: 639 },
      { x: new Date(2015, parseInt('05'), parseInt('01')), y: 648 },
      { x: new Date(2015, parseInt('06'), parseInt('01')), y: 640 },
      { x: new Date(2015, parseInt('07'), parseInt('01')), y: 645 },
      { x: new Date(2015, parseInt('08'), parseInt('01')), y: 648 },
      { x: new Date(2015, parseInt('09'), parseInt('01')), y: 649 },
      { x: new Date(2015, 10, parseInt('01')), y: 649 },
      { x: new Date(2015, 11, parseInt('01')), y: 649 },
      { x: new Date(2016, parseInt('00'), parseInt('01')), y: 650 },
      { x: new Date(2016, parseInt('01'), parseInt('01')), y: 665 },
      { x: new Date(2016, parseInt('02'), parseInt('01')), y: 675 },
      { x: new Date(2016, parseInt('03'), parseInt('01')), y: 695 },
      { x: new Date(2016, parseInt('04'), parseInt('01')), y: 690 },
      { x: new Date(2016, parseInt('05'), parseInt('01')), y: 699 },
      { x: new Date(2016, parseInt('06'), parseInt('01')), y: 699 },
      { x: new Date(2016, parseInt('07'), parseInt('01')), y: 699 },
      { x: new Date(2016, parseInt('08'), parseInt('01')), y: 699 },
      { x: new Date(2016, parseInt('09'), parseInt('01')), y: 699 },
      { x: new Date(2016, 10, parseInt('01')), y: 709 },
      { x: new Date(2016, 11, parseInt('01')), y: 699 },
      { x: new Date(2017, parseInt('00'), parseInt('01')), y: 700 },
      { x: new Date(2017, parseInt('01'), parseInt('01')), y: 700 },
      { x: new Date(2017, parseInt('02'), parseInt('01')), y: 724 },
      { x: new Date(2017, parseInt('03'), parseInt('01')), y: 739 },
      { x: new Date(2017, parseInt('04'), parseInt('01')), y: 749 },
      { x: new Date(2017, parseInt('05'), parseInt('01')), y: 740 }
    ]
  }]
});
chart.render();

function toogleDataSeries(e){
  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  } else{
    e.dataSeries.visible = true;
  }
  chart.render();
}

const chartStyle = {
  height: '370px',
  margin: '0px auto'
};

const WebsiteVisitsChartCard = ({ className = "", controls = true }) => {
  return (
    <Card className={`${className} dashboard-filled-line-chart`}>
      <CardBody>
        <div className="float-left float-none-xs">
          <div className="d-inline-block">
            <h5 className="d-inline">
              <IntlMessages id="Returns" />
            </h5>
            <span className="text-muted text-small d-block">
              <IntlMessages id="vs S&P 500" />
            </span>
          </div>
        </div>
        {controls && (
          <div className="btn-group float-right float-none-xs mt-2">
            <UncontrolledDropdown>
              <DropdownToggle caret color="primary" className="btn-xs" outline>
                <IntlMessages id="dashboards.this-week" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <IntlMessages id="dashboards.last-week" />
                </DropdownItem>
                <DropdownItem>
                  <IntlMessages id="dashboards.this-month" />
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        )}
      </CardBody>

      <div className="chart card-body pt-0">
        <div id="chartContainer" style={chartStyle}></div>
      </div>
    </Card>
  );
};

export default WebsiteVisitsChartCard;
