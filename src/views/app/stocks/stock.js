import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row, Button, Card, CardBody, CardTitle, Table } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

import { AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Label, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";
import moment from "moment";
import unirest from "unirest";
import fetch from "fetch";

import { JUST_STOCKS_API_URL } from "../../../constants/constants";

var yahooFinance = require('yahoo-finance');
var fetchUrl = require("fetch").fetchUrl;

class Stock extends Component {
  state = {
    symbol: this.props.match.params,
    chart_data: [],
    quote: [],
    financialData: [],
    earnings_quarterly: [],
    defaultKeyStatistics: [],
    calendarEvents: [],
    summaryProfile: []
  }

  componentDidMount() {
  var self = this
  const { symbol } = this.props.match.params
  console.log(symbol)
  const { chart_data } = this.state
  const js_server = 'https://js-server.now.sh'
  // console.log('https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_4508d72f8f46461fa02da35e47be9656')
  // axios
  //   .get('https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_4508d72f8f46461fa02da35e47be9656')
  //   .then(function (response) {
  //      // console.log(response.data)
  //      self.setState({quote: response.data})
  //    })
  //   .catch(error => this.setState({ error }));
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

 //  axios
 //  	.get(yahooFinance.historical({
	// 	  symbol: symbol,
	// 	  from: '2020-01-01',
	// 	  to: new Date()
	// 	},
	// 	function (err, quotes) {	
	// 	self.setState({chart_data: Object.values(quotes)})
	// }),{crossdomain:true})

  
   axios
   .get(js_server + '/stock_data/' + symbol)
   .then(function (response) {
       console.log(response.data)
       self.setState({chart_data: response.data})
     })
    .catch(error => this.setState({ error }));

  axios
   .get(js_server + '/stock_quote/' + symbol)
   .then(function (response) {
       console.log(response.data)
       self.setState({quote: response.data.price})
       self.setState({financialData: response.data.financialData})
       self.setState({earnings_quarterly: response.data.earnings.financialsChart.quarterly})
       self.setState({defaultKeyStatistic: response.data.defaultKeyStatistic})
       self.setState({calendarEvents: response.data.calendarEvents})
       self.setState({summaryProfile: response.data.summaryProfile})
     })
    .catch(error => this.setState({ error }));
  console.log(this.state.quote)
  };

  componentDidUpdate(prevProps) {
    var self = this
    const { symbol } = this.props.match.params
    const js_server = 'https://js-server.now.sh'
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
      axios
       .get(js_server + '/stock_data/' + symbol)
       .then(function (response) {
           console.log(response.data)
           self.setState({chart_data: response.data})
         })
        .catch(error => this.setState({ error }));

      axios
       .get(js_server + '/stock_quote/' + symbol)
       .then(function (response) {
           console.log(response.data)
           self.setState({quote: response.data.price})
           self.setState({financialData: response.data.financialData})
           self.setState({earnings_quarterly: response.data.earnings.financialsChart.quarterly})
           self.setState({defaultKeyStatistic: response.data.defaultKeyStatistic})
           self.setState({calendarEvents: response.data.calendarEvents})
           self.setState({summaryProfile: response.data.summaryProfile})

         })
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    const { symbol } = this.props.match.params
    const { quote } = this.state;
    const { financialData } = this.state;
    const { earnings_quarterly } = this.state;
    const { defaultKeyStatistic } = this.state;
    const { calendarEvents } = this.state;
    const { summaryProfile } = this.state;
    const { chart_data } = this.state;
    const stringifyChart = eval(JSON.stringify(chart_data.reverse()));
    // const parseChart = JSON.parse(chart_data);
    // const formattedChartData = JSON.stringify(chart_data)
    // const tickFormatter = (tick) => moment(tick, 'MMMM DD, YYYY').format('ll');
    const tickFormatter = (tick) => moment(tick).format('MMMM DD, YYYY');
    const sTickFormatter = (s) => +(Math.round((s) + "e+2") + "e-2");
    const priceFormatter = +(Math.round((quote.regularMarketPrice) + "e+2") + "e-2");
    const updatedTime = moment(quote.regularMarketTime).format('MMMM Do YYYY, h:mm:ss a');
    const changePercentFormatter = +(Math.round((this.state.quote.regularMarketChangePercent*100) + "e+2")  + "e-2");
    
    // console.log(Object.keys(chart_data).map(date => new Date(date).toLocaleDateString()))
    console.log(Object.values(chart_data))
    console.log(stringifyChart)
    console.log(quote)
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <h1>{quote.longName} ({symbol})</h1>
            <a>   {quote.exchangeName}</a>
            <Separator className="mb-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" sm="6" md="8">
            <Card className="h-100">
              <Row>
                  <Colxx xxs="12" sm="12" md="12">
                    <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <h1 style={{marginTop: '15px', marginBottom:'0', padding:'0'}}>${priceFormatter}</h1>
                    </CardTitle>
                  </Colxx>
              </Row>
              <Row>
                  <Colxx xxs="12" sm="12" md="12" style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <a style={{fontSize:'6px', textAlign:'center'}}>updated {updatedTime}</a>
                  </Colxx>
              </Row>
              <Row>
                  <Colxx xxs="6" sm="6" md="6" style={{marginTop:'5px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <h3 style={{fontSize:'11px', textAlign:'center', margin:'0'}}>{+(Math.round((quote.regularMarketChange) + "e+2") + "e-2")}</h3>
                      <h3 style={{fontSize:'11px', textAlign:'center', margin:'0'}}>({changePercentFormatter}%)</h3>
                    </CardTitle>
                  </Colxx>
                  <Colxx xxs="3" sm="3" md="3" style={{marginTop:'5px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <h3 style={{fontSize:'11px', textAlign:'center', margin:'0'}}>${parseInt(quote.marketCap).toLocaleString()}</h3>
                    </CardTitle>
                  </Colxx>
                  <Colxx xxs="3" sm="3" md="3" style={{marginTop:'5px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <CardTitle style={{display: 'flex', justifyContent: 'center', alignItems:'center', margin: 'auto', top:'50%'}}>
                      <h3 style={{fontSize:'11px', textAlign:'center', margin:'0'}}>{parseInt(quote.regularMarketVolume).toLocaleString()}</h3>
                    </CardTitle>
                  </Colxx>
              </Row>
              <Row>
                  <Colxx xxs="3" sm="3" md="3">
                    <a style={{fontSize:'9px', textAlign:'center', display: 'flex', justifyContent: 'center', margin: 'auto'}}></a>
                  </Colxx>
                  <Colxx xxs="3" sm="3" md="3">
                    <a style={{fontSize:'9px', textAlign:'center', display: 'flex', justifyContent: 'center', margin: 'auto'}}></a>
                  </Colxx>
                  <Colxx xxs="3" sm="3" md="3">
                    <a style={{fontSize:'9px', textAlign:'center', display: 'flex', justifyContent: 'center', margin: 'auto'}}>Market Cap</a>
                  </Colxx>
                  <Colxx xxs="3" sm="3" md="3">
                    <a style={{fontSize:'9px', textAlign:'center', display: 'flex', justifyContent: 'center', margin: 'auto'}}>Volume</a>
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
	                      <Area type='monotone' dataKey='close' name={symbol} tickFormatter={sTickFormatter} stackId="1" label='symbol' stroke='#8884d8' fill='#8884d8' />
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
		              <Colxx xxs="12" sm="12" md="12">
		              	<CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
		                  <h1 style={{fontSize:'16px', marginTop: '15px', marginBottom:'0', padding:'0'}}>Quarterly Financials</h1>
		                </CardTitle>
		              </Colxx>
		          </Row>
              <Row>
                  <Colxx xxs="3" sm="3" md="3" style={{marginTop:'5px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <h3 style={{fontSize:'10px', textAlign:'center', margin:'0'}}>Date</h3>
                    </CardTitle>
                  </Colxx>
                  <Colxx xxs="3" sm="3" md="3" style={{marginTop:'5px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <CardTitle style={{display: 'flex', justifyContent: 'center', alignItems:'center', margin: 'auto', top:'50%'}}>
                      <h3 style={{fontSize:'10px', textAlign:'center', margin:'0'}}>Revenue</h3>
                    </CardTitle>
                  </Colxx>
                  <Colxx xxs="3" sm="3" md="3" style={{marginTop:'5px', display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                    <CardTitle style={{display: 'flex', justifyContent: 'center', alignItems:'center', margin: 'auto', top:'50%'}}>
                      <h3 style={{fontSize:'10px', textAlign:'center', margin:'0'}}>Earnings</h3>
                    </CardTitle>
                  </Colxx>
              </Row>
              <Row style={{margin:'0'}}>
                <Table>
                  <tbody>
                    {earnings_quarterly.reverse().map(( listValue, index ) => {
                      
                      return (
                        <tr key={index}>
                          <td style={{fontSize:'8px', padding:'2px', textAlign:'center'}}>{listValue.date}</td>
                          <td style={{fontSize:'8px', padding:'2px', textAlign:'center'}}>${parseInt(listValue.revenue).toLocaleString()}</td>
                          <td style={{fontSize:'8px', padding:'2px', textAlign:'center'}}>${parseInt(listValue.revenue).toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Row>
		        </Card>
		    </Colxx>
	      </Row>
        

      </Fragment>
    );
  }
}
export default injectIntl(Stock);