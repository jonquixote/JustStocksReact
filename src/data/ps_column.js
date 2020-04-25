import React, { Component }  from 'react';

const ps_column = [
    {
      Header: "Return (%)",
      accessor: "return_pct",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Model",
      accessor: "model",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "S&P 500 (SPY)",
      accessor: "snp_500_spy",
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ]
export default ps_column
