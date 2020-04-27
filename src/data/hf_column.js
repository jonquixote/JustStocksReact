import React, { Component }  from 'react';

const hf_column = [
    {
      Header: "Ticker",
      accessor: "ticker",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Return",
      accessor: "return_fundamental",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Market Cap",
      accessor: "market_cap",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Yield",
      accessor: "yield",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "P-E",
      accessor: "p_e",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "PEG",
      accessor: "peg",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "ROE TTM",
      accessor: "roe_ttm",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "ROI TTM",
      accessor: "roi_ttm",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Total Debt to EQ",
      accessor: "tot_debt_to_eq_ratio",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "PR2CFL Per Share TTM",
      accessor: "pr2cfl_per_shr_ttm",
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default hf_column
