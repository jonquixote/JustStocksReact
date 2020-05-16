import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

const hr_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      minWidth: 50,
      Cell: props => (<Link to={{ pathname: '../stocks/' + props.value }}><p className="list-item-heading" style={{ fontSize:'0.9rem' }}>{props.value}</p></Link>)
    },
    {
      Header: "1 Day",
      accessor: "one_day",
      minWidth: 50,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Last Close",
      accessor: "last_close",
      minWidth: 75,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Change",
      accessor: "change",
      minWidth: 58,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Return",
      accessor: "weight_return",
      minWidth: 55,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "1 Week",
      accessor: "one_week",
      minWidth: 60,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "4 Weeks",
      accessor: "four_weeks",
      minWidth: 65,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "8 Weeks",
      accessor: "eight_weeks",
      minWidth: 65,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "13 Weeks",
      accessor: "thirteen_weeks",
      minWidth: 70,
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hr_column
