import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row, Button, Card, CardBody, CardTitle, Table } from "reactstrap";
import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import classnames from "classnames";

import IntlMessages from "../../../helpers/IntlMessages";
import ReactTable from "react-table";
import DataTablePagination from "../../../components/DatatablePagination";
import Pagination from "../../../components/DatatablePagination";

import HoldingsReturns from "../../../containers/dashboards/HoldingsReturns";
import ProfileStatuses from "../../../containers/dashboards/ProfileStatuses";
import GradientCardContainer from "../../../containers/dashboards/GradientCardContainer";
import Cakes from "../../../containers/dashboards/Cakes";
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import AdvancedSearch from "../../../containers/dashboards/AdvancedSearch";
import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import TopRatedItems from "../../../containers/dashboards/TopRatedItems";

import axios from "axios";

const CustomTbodyComponent = props => (
  <div {...props} className={classnames("rt-tbody", props.className || [])}>
    <PerfectScrollbar option={{ suppressScrollX: true }}>
      {props.children}
    </PerfectScrollbar>
  </div>
);

class DashboardHome extends Component {
  state = {
    strategy_stats: [],
    live_strategies: []
  }
  componentDidMount() {
  var self = this
  const js_rails_server = 'https://api.juststocks.com'
  axios
    .get(js_rails_server + '/api/live_strategies')
    .then(function (response) {
       console.log(response.data)
       self.setState({live_strategies: response.data})
     })
    .catch(error => this.setState({ error }));
  axios
    .get(js_rails_server + '/api/strategies/all/holdings_currents')
    .then(function (response) {
       console.log(response.data)
       self.setState({strategy_stats: response.data})
     })
    .catch(error => this.setState({ error }));
  }


  render() {
    const {messages} = this.props.intl;
    const { live_strategies } = this.state;
    const top_performers_data = this.state.strategy_stats.slice(3, 83)

    function sortDesc(a, b) {
      return a > b ? -1 : b > a ? 1 : 0;
    }

    const dataTableColumns = [
      {
        Header: "Name",
        accessor: "name",
        minWidth: 123,
        Cell: props => (<Link to={{ pathname: '../dashboards/' + props.value }}><p className="list-item-heading">{props.value.replace(/-/g, ' ')}</p></Link>)
      },
      {
        Header: "Holdings",
        accessor: "holdings",
        minWidth: 70,
        Cell: props => <p className="text-muted">{props.value}</p>
      },
      {
        Header: "Annual",
        accessor: "annual",
        minWidth: 60,
        Cell: props => <p className="text-muted">{props.value}</p>
      },
      {
        Header: "Sharpe Ratio",
        accessor: "sharpe_ratio",
        minWidth: 100,
        Cell: props => <p className="text-muted">{props.value}</p>
      },
      {
        Header: "DDown",
        accessor: "d_down",
        minWidth: 60,
        Cell: props => <p className="text-muted">{props.value}</p>
      },
      {
        Header: "Updated",
        accessor: "upDate",
        minWidth: 70,
        Cell: props => <p className="text-muted">{props.value}</p>
      }
    ];

    const topAnnualColumn = [
      {
        Header: "Name",
        accessor: "name",
        Cell: props => <p className="text-muted">{props.value}</p>
      },
      {
        Header: "Annual Return",
        accessor: "annual",
        Cell: props => <p className="text-muted">{props.value}</p>
      }
    ];

    return (
      <Fragment>
        <Row>
          <Colxx xxs="12" sm="6" md="8">
            <Row>
              <Colxx xxs="12">
                <h1 className='orbitron'>Live Strategies</h1>
                <Separator className="mb-3" />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" style={{paddingRight:'10px', paddingLeft:'10px'}}>
                <Card className="h-100">
                  <CardBody style={{paddingTop:'1.5rem', paddingLeft:'1.5rem', paddingRight:'1.5rem', paddingBottom:'0.5rem'}}>
                    <ReactTable
                      defaultPageSize={11}
                      data={live_strategies.slice(0, 44).sort((a, b) => a.name.localeCompare(b.name)).reverse()}
                      columns={dataTableColumns}
                      minRows={0}
                      showPageJump={false}
                      showPageSizeOptions={false}
                      PaginationComponent={Pagination} 
                       sorted={[
                         {
                          id: 'lastName',
                          desc: true
                         }
                       ]}
                    />
                    <Table>
                      <tbody>
                        
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </Colxx>

          <Colxx xxs="12" sm="6" md="4" style={{paddingRight:'10px', paddingLeft:'10px'}}>
            <Card className="mb-4">
              <CardBody style={{paddingTop:'1rem', paddingLeft:'0.5rem', paddingBottom:'0.5rem', paddingRight:'0.5rem'}}>
                  <CardTitle style={{textAlign:'center', marginBottom:'5px'}}>
                    <IntlMessages id="Top Performers" />
                  </CardTitle>
                  <Table>
                    <tbody>
                      <ReactTable
                        data={live_strategies.reverse()}
                        TbodyComponent={CustomTbodyComponent}
                        columns={topAnnualColumn}
                        defaultPageSize={44}
                        showPageJump={false}
                        showPageSizeOptions={false}
                        showPagination={false}
                        className={"react-table-fixed-height"}
                      />
                    </tbody>
                  </Table>
                   <CardTitle style={{textAlign:'center', marginBottom:'5px'}}>
                    <IntlMessages id="Quick Stats" />
                  </CardTitle>
                  <Table>
                    <tbody>

                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Colxx>
          </Row>

      </Fragment>
    );
  }
}
export default injectIntl(DashboardHome);