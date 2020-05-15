import React, { Component }  from 'react';

const hf_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      width: 50,
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Return",
      accessor: "return_fundamental",
      width: 55,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Mkt Cap",
      accessor: "market_cap",
      width: 60,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Yield",
      accessor: "yield",
      width: 50,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "P-E",
      accessor: "p_e",
      width: 40,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "PEG",
      accessor: "peg",
      width: 40,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "ROE TTM",
      accessor: "roe_ttm",
      width: 68,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "ROI TTM",
      accessor: "roi_ttm",
      width: 68,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Total Debt to EQ",
      accessor: "tot_debt_to_eq_ratio",
      width: 110,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "PR2CFL Per Share TTM",
      accessor: "pr2cfl_per_shr_ttm",
      width: 145,
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hf_column
