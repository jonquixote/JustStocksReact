import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactTable from "react-table";

import IntlMessages from "../../helpers/IntlMessages";
import Pagination from "../../components/DatatablePagination";

import data from "../../data/holdings_returns";


const HoldingsReturns = ({title="Holdings Return"}) => {
  const columns = [
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
  ];
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          <IntlMessages id={title} />
        </CardTitle>
        <ReactTable
          defaultPageSize={6}
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
export default HoldingsReturns;
