import React, { Component }  from 'react';

const hr_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "1 Day",
      accessor: "one_day",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Last Close",
      accessor: "last_close",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Change",
      accessor: "change",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Weight Return",
      accessor: "weight_return",
      Cell: props => <p className="list-muted">{props.value}</p>
    },
    {
      Header: "1 Week",
      accessor: "one_week",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "4 Weeks",
      accessor: "four_weeks",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "8 Weeks",
      accessor: "eight_weeks",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "13 Weeks",
      accessor: "thirteen_weeks",
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hr_column
