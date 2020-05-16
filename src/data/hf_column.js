import React, { Component }  from 'react';

const hf_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      minWidth: 50,
      Cell: props => <p className="list-item-heading" style={{ fontSize:'0.9rem' }}>{props.value}</p>
    },
    {
      Header: "Return",
      accessor: "return_fundamental",
      minWidth: 55,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Mkt Cap",
      accessor: "market_cap",
      minWidth: 60,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Yield",
      accessor: "yield",
      minWidth: 50,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "P-E",
      accessor: "p_e",
      minWidth: 40,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "PEG",
      accessor: "peg",
      minWidth: 40,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "ROE TTM",
      accessor: "roe_ttm",
      minWidth: 68,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "ROI TTM",
      accessor: "roi_ttm",
      minWidth: 68,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Total Debt to EQ",
      accessor: "tot_debt_to_eq_ratio",
      minWidth: 110,
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "PR2CFL Per Share TTM",
      accessor: "pr2cfl_per_shr_ttm",
      minWidth: 145,
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hf_column
