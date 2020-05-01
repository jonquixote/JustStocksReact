import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row, Button, Card, CardBody, CardTitle, Table } from "reactstrap";

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
import hf_column from "../../../data/hf_column";
import hh_column from "../../../data/hh_column";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";
import moment from "moment";

class StrategyDashboard extends Component {
  state = {
    strategy_name: this.props.match.params,
    hrshowing: true,
    hhshowing: false,
    hfshowing:  false,
    holdings_returns: [],
    holdings_historicals: [],
    holdings_fundamentals: [],
    stats_performances: [],
    strategy_summaries: [],
    strategy_summary_stats: [],
    chart_data: []
  }
  componentDidMount() {
  var self = this
  const { strategy_name } = this.state.strategy_name
  console.log('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_returns/' + strategy_name)
  axios
    .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_returns/' + strategy_name)
    .then(function (response) {
       console.log(response.data)
       self.setState({holdings_returns: response.data})
     })
    .catch(error => this.setState({ error }));
  axios
    .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_historicalss/' + strategy_name)
    .then(function (response) {
       console.log(response.data)
       self.setState({holdings_historicals: response.data})
     })
    .catch(error => this.setState({ error }));
  axios
    .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_fundamentals/' + strategy_name)
    .then(function (response) {
       console.log(response.data)
       self.setState({holdings_fundamentals: response.data})
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
  axios
    .get('https://cryptic-retreat-20149.herokuapp.com/api/charts')
    .then(function (response) {
       console.log(response.data)
       self.setState({chart_data: response.data})
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
          .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_historicals/' + strategy_name)
          .then(function (response) {
             console.log(response.data)
             self.setState({holdings_historicals: response.data})
           })
          .catch(error => this.setState({ error }));
        axios
          .get('https://cryptic-retreat-20149.herokuapp.com/api/strategies/all/holdings_fundamentals/' + strategy_name)
          .then(function (response) {
             console.log(response.data)
             self.setState({holdings_fundamentals: response.data})
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
      axios
        .get('https://cryptic-retreat-20149.herokuapp.com/api/charts')
        .then(function (response) {
           console.log(response.data)
           self.setState({chart_data: response.data})
         })
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    moment.locale('en');
    console.log(this.state.holdings_returns.data)
    const {messages} = this.props.intl;
    const { strategy_name } = this.props.match.params
    const stats_perf = this.state.stats_performances.slice(35, 41)
    const info_data = this.state.strategy_summaries.slice(0, 11)
    const strategy_stats = this.state.strategy_summary_stats.slice(0, 11)
    const { hrshowing } = this.state;
    const { hfshowing } = this.state;
    const { hhshowing } = this.state;
    const { chart_data } = this.state;

    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}]
    const yoyo = chart_data[0];
    console.log(yoyo);
    const tickFormatter = (tick) => moment(tick).format('MMMM DD, YYYY');
    const dateFormatter = (date) => moment(date).format('M/DD/YY');
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <h1>{strategy_name}</h1>
            <a>   Live Strategy</a>
            <Separator className="mb-3" />
          </Colxx>
        </Row>

        <Row>
          <Colxx xxs="12" sm="6" md="8">
            <Card className="h-100">
              <Row>
                  <Colxx xxs="2" sm="2" md="2">
                    
                  </Colxx>
                  <Colxx xxs="8" sm="8" md="8">
                    <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <h2 style={{marginTop: '20px'}}>Returns vs S&P 500</h2>
                    </CardTitle>
                  </Colxx>
                  <Colxx xxs="2" sm="2" md="2">

                  </Colxx>
                </Row>
              <Row>
                <Colxx xxs="12" sm="12" md="12" padding="0">
                  <ResponsiveContainer width="96%" aspect={2}>
                    <AreaChart data={chart_data} margin={{top: 0, right: 0, left: -9, bottom: 0}} padding={{top: 0, right: 10, left: 0, bottom: 0}}>
                      <CartesianGrid strokeDasharray="3 3"/>
                      <XAxis dataKey="date" tickFormatter={tickFormatter} domain={['dataMin', 'dataMax']} name={dateFormatter} />
                      <YAxis/>
                      <Tooltip/>
                      <Area type='monotone' dataKey='return' name={strategy_name} stackId="1" label='strategy_name' stroke='#8884d8' fill='#8884d8' />
                      <Area type='monotone' dataKey='bench_return' name="S&P 500" stackId="2" label='S&P 500' stroke='#82ca9d' fill='#82ca9d' />
                    </AreaChart>
                  </ResponsiveContainer>
                </Colxx>
              </Row>
              <CardBody>
                
                <Row>
                  <Colxx xxs="4" sm="4" md="4">
                    
                  </Colxx>
                  <Colxx xxs="4" sm="4" md="4">
                    <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <h1>Holdings</h1>
                    </CardTitle>
                  </Colxx>
                  <Colxx xxs="4" sm="4" md="4">

                  </Colxx>
                </Row>
                <Row>
                  <Colxx xxs="4" sm="12" md="4" className="mb-3" style={{ display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>
                    <Button variant="outline-light" style={{ lineHeight: '1', borderRadius: '150px' }} onClick={() => this.setState({ hrshowing: true, hhshowing: false, hfshowing: false })}>Returns</Button>
                  </Colxx>
                  <Colxx xxs="4" sm="12" md="4" className="mb-3" style={{ display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>
                    <Button variant="outline-light" style={{ lineHeight: '1', borderRadius: '150px' }} onClick={() => this.setState({ hfshowing: true, hrshowing: false, hhshowing: false })}>Fundamentals</Button>
                  </Colxx>
                  <Colxx xxs="4" sm="12" md="4" className="mb-3" style={{ display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>
                    <Button variant="outline-light" style={{ lineHeight: '1', borderRadius: '150px' }} onClick={() => this.setState({ hhshowing: true, hrshowing: false, hfshowing: false })}>Historicals</Button>
                  </Colxx>
                </Row>
                { hrshowing 
                    ? <div>
                      <CardTitle  className="mb-2" style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                        <IntlMessages id={"Returns"} style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}/>
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
                      </div>
                    : null
                }
              { hhshowing 
                  ? <div>
                      <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                        <IntlMessages id={"Historicals"} style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}/>
                      </CardTitle>
                      <ReactTable
                        defaultPageSize={6}
                        data={this.state.holdings_historicals.slice(0, 30)}
                        columns={hh_column}
                        minRows={0}
                        showPageJump={false}
                        showPageSizeOptions={false}
                        PaginationComponent={Pagination}
                      />
                    </div>
                  : null
              }
              { hfshowing 
                  ? <div>
                      <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                        <IntlMessages id={"Fundamentals"} style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}/>
                      </CardTitle>
                      <ReactTable
                        defaultPageSize={6}
                        data={this.state.holdings_fundamentals.slice(0, 30)}
                        columns={hf_column}
                        minRows={0}
                        showPageJump={false}
                        showPageSizeOptions={false}
                        PaginationComponent={Pagination}
                      />
                    </div>
                  : null
              }
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
          <Colxx xxs="12" sm="12" md="12">
            <Card className="h-100">
              <CardBody>

              </CardBody>
            </Card>
          </Colxx>
        </Row>

      </Fragment>
    );
  }
}
export default injectIntl(StrategyDashboard);