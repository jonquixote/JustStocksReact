import React, { Component }  from 'react';

const hh_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      minWidth: 50,
      Cell: props => <p className="list-item-heading" style={{ fontSize:'0.9rem' }}>{props.value}</p>
    },
    {
      Header: "Cost",
      accessor: "cost",
      minWidth: 70,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Open Date",
      accessor: "open_date",
      minWidth: 75,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "# of Days",
      accessor: "number_of_days",
      minWidth: 70,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Pct. Historical",
      accessor: "pct_historical",
      minWidth: 90,
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hh_column
