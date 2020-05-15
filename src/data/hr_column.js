import React, { Component }  from 'react';

const hr_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      width: 50,
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "1 Day",
      accessor: "one_day",
      width: 50,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Last Close",
      accessor: "last_close",
      width: 75,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Change",
      accessor: "change",
      width: 58,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Return",
      accessor: "weight_return",
      width: 55,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "1 Week",
      accessor: "one_week",
      width: 60,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "4 Weeks",
      accessor: "four_weeks",
      width: 65,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "8 Weeks",
      accessor: "eight_weeks",
      width: 65,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "13 Weeks",
      accessor: "thirteen_weeks",
      width: 70,
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hr_column
