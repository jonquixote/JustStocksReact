import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row, Button, Card, CardBody, CardTitle, Table } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

import { AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Label, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";
import moment from "moment";
import unirest from "unirest";

var yahooFinance = require('yahoo-finance');
var fetchUrl = require("fetch").fetchUrl;

// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// var app = express();

// module.exports = function (app) {
//     app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'node',
//       changeOrigin: true,
//       externals: { 'express': 'commonjs express' }
//     })
//   );
// };

class Stock extends Component {
  state = {
    symbol: this.props.match.params,
    chart_data: [],
    quote: []
  }

  componentDidMount() {
  var self = this
  const { symbol } = this.props.match.params
  console.log(symbol)
  const { chart_data } = this.state
  // console.log('https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_4508d72f8f46461fa02da35e47be9656')
  axios
    .get('https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_4508d72f8f46461fa02da35e47be9656')
    .then(function (response) {
       console.log(response.data)
       self.setState({quote: response.data})
     })
    .catch(error => this.setState({ error }));
  // axios
  //   .get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=WYFQ6YWL6NCV4W6Y')
  //   .then(function (response) {
  //      console.log(response.data)
  //      self.setState({chart_data: response.data['Time Series (Daily)']})
  //   	// const formattedChart = [];
  //   	// console.log(response.data['Time Series (Daily)'])
	 //    // const charts = Object.values(response.data['Time Series (Daily)']);
	 //    // charts.forEach(chart =>
	 //    //   Object.entries(chart).forEach(([key, value]) =>
	 //    //   	formattedChart.push({ name: key, data: value })
	 //    //   )
	 //    // );
	 //    // self.setState({formattedChartData: formattedChart})
  //    })
  //   .catch(error => this.setState({ error }));
  axios
    .get(
  	yahooFinance.historical({
		  symbol: symbol,
		  from: '2020-01-01',
		  to: new Date()
		},
		function (err, quotes) {	
		self.setState({chart_data: Object.values(quotes)})
	}))
  console.log(this.state.chart_data)
  };


  componentDidUpdate(prevProps) {
    var self = this
    const { symbol } = this.props.match.params
    if (prevProps.match.params !== this.props.match.params) {
      this.setState({ symbol: this.props.match.params })
      axios
        .get('https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_4508d72f8f46461fa02da35e47be9656')
        .then(function (response) {
           console.log(response.data)
           self.setState({quote: response.data})
         })
        .catch(error => this.setState({ error }));
      // axios
      //   .get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=WYFQ6YWL6NCV4W6Y')
      //   .then(function (response) {
      //      console.log(response['Time Series (Daily)'].data)
      //      self.setState({chart_data: response['Time Series (Daily)'].data})
      //    })
      //   .catch(error => this.setState({ error }));
    }
  }

  render() {
    const { symbol } = this.props.match.params
    const { quote } = this.state;
    const { chart_data } = this.state;
    const stringifyChart = eval(JSON.stringify(chart_data.reverse()));
    // const parseChart = JSON.parse(chart_data);
    // const formattedChartData = JSON.stringify(chart_data)
    // const tickFormatter = (tick) => moment(tick, 'MMMM DD, YYYY').format('ll');
    const tickFormatter = (tick) => moment(tick).format('MMMM DD, YYYY');
    console.log(tickFormatter)
    // const changePercentFormatter = +(Math.round((this.state.quote.changePercent*100) + "e+2")  + "e-2");
    
    // console.log(Object.keys(chart_data).map(date => new Date(date).toLocaleDateString()))
    console.log(Object.values(chart_data))
    console.log(stringifyChart)
    console.log(quote)
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <h1>{quote.companyName} ({symbol})</h1>
            <a>   {quote.primaryExchange}</a>
            <Separator className="mb-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" sm="6" md="8">
            <Card className="h-100">
              <Row>
	              <Colxx xxs="2" sm="2" md="2">
	                
	              </Colxx>
	              <Colxx xxs="8" sm="8" md="8" style={{marginTop: '15px'}}>
	                <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
	              		<h2 style={{marginTop: '0px', marginLeft: '30px'}}>{quote.companyName} Returns last 100 Days</h2>
	              	</CardTitle>
	              </Colxx>
	              <Colxx xxs="2" sm="2" md="2">

	              </Colxx>
	            </Row>
	            <Row>
	              <Colxx xxs="12" sm="12" md="12">
                  	<ResponsiveContainer width="96%" aspect={2}>
		              	<AreaChart data={stringifyChart} margin={{top: 0, right: 0, left: -9, bottom: 0}} padding={{top: 0, right: 10, left: 0, bottom: 0}}>
	                      <CartesianGrid strokeDasharray="3 3"/>
	                      <XAxis dataKey='date' tickFormatter={tickFormatter} domain={['dataMin', 'dataMax']} />
	                      <YAxis/>
	                      <Tooltip labelFormatter={t => new Date(t).toLocaleDateString()} />
	                      {console.log(Tooltip.labelFormatter)}
	                      <Area type='monotone' dataKey='close' name={symbol} stackId="1" label='symbol' stroke='#8884d8' fill='#8884d8' />
	                      {this.state.chart_data.length > 0 && <Brush />}
	                    </AreaChart>
                  	</ResponsiveContainer>
	              </Colxx>
	            </Row>
	          </Card>
	        </Colxx>
	        <Colxx xxs="12" sm="6" md="4">
	            <Card className="h-100">
	              <Row>
		              <Colxx xxs="3" sm="3" md="3">
		              	<CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
		              		<h3 style={{marginTop: '30px', marginLeft: '30px'}}>{quote.change}</h3>
		              	</CardTitle>
		              </Colxx>
		              <Colxx xxs="6" sm="6" md="6">
		              	<CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
		                  <h1 style={{marginTop: '20px'}}>${quote.latestPrice}</h1>
		                </CardTitle>
		              </Colxx>
		              <Colxx xxs="3" sm="3" md="3">
		              	<CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
		              		
		              	</CardTitle>
		              </Colxx>
		          </Row>
		        </Card>
		    </Colxx>
	      </Row>
        

      </Fragment>
    );
  }
}
export default injectIntl(Stock);