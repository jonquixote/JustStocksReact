import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactTable from "react-table";
import classnames from "classnames";

import IntlMessages from "../../helpers/IntlMessages";
import Pagination from "../../components/DatatablePagination";

import data from "../../data/holdings_historicals";

const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>
);

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
          data={data}
          TbodyComponent={CustomTbodyComponent}
          columns={columns}
          defaultPageSize={20}
          showPageJump={false}
          showPageSizeOptions={false}
          showPagination={false}
          className={"react-table-fixed-height"}
        />
      </CardBody>
    </Card>
  );
};
export default HoldingsHistoricals;
