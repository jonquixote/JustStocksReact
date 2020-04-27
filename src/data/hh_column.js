import React, { Component }  from 'react';

const hh_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Cost",
      accessor: "cost",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Open Date",
      accessor: "open_date",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Number of Days",
      accessor: "number_of_days",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Pct. Historical",
      accessor: "pct_historical",
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hh_column
