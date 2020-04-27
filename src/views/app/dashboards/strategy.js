import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row, Card, CardBody, CardTitle, Table } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

import HoldingsHistoricals from "../../../containers/dashboards/HoldingsHistoricals";

import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";
import AdvancedSearch from "../../../containers/dashboards/AdvancedSearch";
import SmallLineCharts from "../../../containers/dashboards/SmallLineCharts";

import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";
import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";

import IntlMessages from "../../../helpers/IntlMessages";
import ReactTable from "react-table";
import Pagination from "../../../components/DatatablePagination";

import infodata from "../../../data/strategy_summaries";
import infostats from "../../../data/strat_sum_stat";
import hr_column from "../../../data/hr_column";
import axios from "axios";

class StrategyDashboard extends Component {
  state = {
    strategy_name: this.props.match.params,
    holdings_returns: [],
    stats_performances: [],
    strategy_summaries: [],
    strategy_summary_stats: []
  }
  componentDidMount() {
  var self = this
  const { strategy_name } = this.state.strategy_name
  console.log('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_returns/' + strategy_name)
  axios
    .get('http://localhost:3000/api/strategies/all/holdings_returns/' + strategy_name)
    // .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_returns/' + strategy_name)
    .then(function (response) {
       console.log(response.data)
       self.setState({holdings_returns: response.data})
     })
    .catch(error => this.setState({ error }));
  axios
    .get('http://localhost:3000/api/strategies/all/stats_performances/' + strategy_name)
    // .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/stats_performances/' + strategy_name)
    .then(function (response) {
       console.log(response.data)
       self.setState({stats_performances: response.data})
     })
    .catch(error => this.setState({ error }));
  axios
    .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/strategy_summaries/' + strategy_name)
    .then(function (response) {
       console.log(response.data)
       self.setState({strategy_summaries: response.data})
     })
    .catch(error => this.setState({ error }));
  axios
    .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/strategy_summary_stats/' + strategy_name)
    .then(function (response) {
       console.log(response.data)
       self.setState({strategy_summary_stats: response.data})
     })
    .catch(error => this.setState({ error }));
  };

  componentDidUpdate(prevProps) {
    var self = this
    const { strategy_name } = this.state.strategy_name
    if (prevProps.match.params !== this.props.match.params) {
      this.setState({ strategy_name: this.props.match.params })
      axios
        .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_returns/' + strategy_name)
        .then(function (response) {
           console.log(response.data)
           self.setState({holdings_returns: response.data})
         })
        .catch(error => this.setState({ error }));
      axios
        .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/stats_performances/' + strategy_name)
        .then(function (response) {
           console.log(response.data)
           self.setState({stats_performances: response.data})
         })
        .catch(error => this.setState({ error }));
      axios
        .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/strategy_summaries/' + strategy_name)
        .then(function (response) {
           console.log(response.data)
           self.setState({strategy_summaries: response.data})
         })
        .catch(error => this.setState({ error }));
      axios
        .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/strategy_summary_stats/' + strategy_name)
        .then(function (response) {
           console.log(response.data)
           self.setState({strategy_summary_stats: response.data})
         })
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    console.log(this.state.holdings_returns.data)
    const {messages} = this.props.intl;
    const { strategy_name } = this.props.match.params
    const stats_perf = this.state.stats_performances.slice(35, 41)
    const info_data = this.state.strategy_summaries.slice(0, 11)

    const strategy_stats = this.state.strategy_summary_stats.slice(0, 11)
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <h1>{strategy_name}</h1>
            <a>   Live Strategy</a>
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12" sm="6" md="8" className="mb-4">
            <Card className="h-100">
              <CardBody>
                <CardTitle>
                  <IntlMessages id={"Holdings Returns"} />
                </CardTitle>
                <ReactTable
                  defaultPageSize={6}
                  data={this.state.holdings_returns.slice(0, 30)}
                  columns={hr_column}
                  minRows={0}
                  showPageJump={false}
                  showPageSizeOptions={false}
                  PaginationComponent={Pagination}
                />
                <CardTitle>
                  <IntlMessages id={"Performance Statistics"} />
                </CardTitle>
                <Table>
                  <thead>
                    <tr>
                      <th>Return %</th>
                      <th>Model</th>
                      <th>S&P 500 (SPY)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats_perf.reverse().map(( listValue, index ) => {
                      
                      return (
                        <tr key={index}>
                          <td>{listValue.return_pct}</td>
                          <td>{listValue.model}</td>
                          <td>{listValue.snp_500_spy}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx xxs="12" sm="6" md="4">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  <IntlMessages id="General Info" />
                </CardTitle>
                <Table>
                  <tbody>
                    {info_data.reverse().map(( listValue, index ) => {
                      
                      return (
                        <tr key={index}>
                          <td>{listValue.info_name}</td>
                          <td>{listValue.info_value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                 <CardTitle>
                  <IntlMessages id="Quick Stats" />
                </CardTitle>
                <Table>
                  <tbody>
                    {strategy_stats.reverse().map(( listValue, index ) => {
                      
                      return (
                        <tr key={index}>
                          <td>{listValue.stats_name}</td>
                          <td>{listValue.stats_value}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx xl="12" lg="12" className="mb-4">
            <Card className="h-100">
              <CardBody>
                <CardTitle>
                  <IntlMessages id={"Holdings Returns"} />
                </CardTitle>
                <ReactTable
                  defaultPageSize={6}
                  data={this.state.holdings_returns.slice(0, 30)}
                  columns={hr_column}
                  minRows={0}
                  showPageJump={false}
                  showPageSizeOptions={false}
                  PaginationComponent={Pagination}
                />
              </CardBody>
            </Card>
          </Colxx>
        </Row>

        <Row>
          <Colxx sm="12" md="6" className="mb-4">
            <HoldingsHistoricals/>
          </Colxx>
          <Colxx sm="12" md="6" className="mb-4">
            <ConversionRatesChartCard/>
          </Colxx>
        </Row>

      </Fragment>
    );
  }
}
export default injectIntl(StrategyDashboard);