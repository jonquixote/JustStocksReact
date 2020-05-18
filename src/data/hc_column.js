import React, { Component }  from 'react';

const hc_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      minWidth: 50,
      Cell: props => <p className="list-item-heading" style={{ fontSize:'0.9rem' }}>{props.value}</p>
    },
    {
      Header: "Weight",
      accessor: "weight",
      minWidth: 55,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Return",
      accessor: "return",
      minWidth: 55,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Return $",
      accessor: "return_dollars",
      minWidth: 70,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Shares",
      accessor: "shares",
      minWidth: 55,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Avg Share Cost",
      accessor: "avg_share_cost",
      minWidth: 104,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Current Price",
      accessor: "current_price",
      minWidth: 95,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Value",
      accessor: "value",
      minWidth: 70,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Days Held",
      accessor: "days_held",
      minWidth: 75,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Sector",
      accessor: "sector",
      minWidth: 125,
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hc_column
