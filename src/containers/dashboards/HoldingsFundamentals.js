import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactTable from "react-table";

import IntlMessages from "../../helpers/IntlMessages";
import Pagination from "../../components/DatatablePagination";

import data from "../../data/holdings_fundamentals";


const HoldingsFundamentals = ({title="Holdings Fundamental"}) => {
  const columns = [
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
      Header: "Tot Debt to Eq Ratio",
      accessor: "tot_debt_to_eq_ratio",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Pr2CFl Per Shr TTM",
      accessor: "pr2cfl_per_shr_ttm",
      Cell: props => <p className="text-muted">{props.value}</p>
    }
  ];
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          <IntlMessages id={title} />
        </CardTitle>
        <ReactTable
          defaultPageSize={4}
          data={data.slice(0, 30)}
          columns={columns}
          minRows={0}
          showPageJump={false}
          showPageSizeOptions={false}
          PaginationComponent={Pagination}
        />
      </CardBody>
    </Card>
  );
};
export default HoldingsFundamentals;
