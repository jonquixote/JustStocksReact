import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactTable from "react-table";

import IntlMessages from "../../helpers/IntlMessages";
import Pagination from "../../components/DatatablePagination";

import data from "../../data/holdings_historicals";


const HoldingsHistoricals = ({title="Holdings Historical"}) => {
  const columns = [
    {
      Header: "Ticker",
      accessor: "ticker",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "Cost",
      accessor: "cost",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Open Date",
      accessor: "open_date",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Numeber of Days",
      accessor: "number_of_days",
      Cell: props => <p className="text-muted">{props.value}</p>
    },
    {
      Header: "Pct. Historical",
      accessor: "pct_historical",
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
export default HoldingsHistoricals;
