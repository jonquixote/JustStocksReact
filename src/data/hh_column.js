import React, { Component }  from 'react';

const hh_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      width: 50,
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Cost",
      accessor: "cost",
      width: 70,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Open Date",
      accessor: "open_date",
      width: 75,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "# of Days",
      accessor: "number_of_days",
      width: 70,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Pct. Historical",
      accessor: "pct_historical",
      width: 90,
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hh_column
