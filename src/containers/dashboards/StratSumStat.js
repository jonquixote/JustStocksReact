import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ReactTable from "react-table";

import IntlMessages from "../../helpers/IntlMessages";
import Pagination from "../../components/DatatablePagination";

import data from "../../data/strat_sum_stat";


const StratSumStat = ({title="Quick Stats"}) => {
  const columns = [
    {
      Header: "",
      accessor: "stats_name",
      Cell: props => <p className="list-item-heading">{props.value}</p>
    },
    {
      Header: "",
      accessor: "stats_value",
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
          defaultPageSize={3}
          data={data.slice(0, 21)}
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
export default StratSumStat;
