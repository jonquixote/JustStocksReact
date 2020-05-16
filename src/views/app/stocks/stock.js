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
    earnings_yearly: [],
    defaultKeyStatistics: [],
    calendarEvents: [],
    summaryProfile: [],
    summaryDetail: []
  }

  componentDidMount() {
  var self = this
  const { symbol } = this.props.match.params
  console.log(symbol)
  const { chart_data } = this.state
  const js_server = 'https://js-server.now.sh'
  
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
       self.setState({earnings_yearly: response.data.earnings.financialsChart.yearly})
       self.setState({defaultKeyStatistic: response.data.defaultKeyStatistic})
       self.setState({calendarEvents: response.data.calendarEvents})
       self.setState({summaryProfile: response.data.summaryProfile})
       self.setState({summaryDetail: response.data.summaryProfile})
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
           self.setState({earnings_yearly: response.data.earnings.financialsChart.yearly})
           self.setState({defaultKeyStatistic: response.data.defaultKeyStatistic})
           self.setState({calendarEvents: response.data.calendarEvents})
           self.setState({summaryProfile: response.data.summaryProfile})
           self.setState({summaryDetail: response.data.summaryDetail})

         })
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    const { symbol } = this.props.match.params
    const { quote } = this.state;
    const { financialData } = this.state;
    const { earnings_quarterly } = this.state;
    const { earnings_yearly } = this.state;
    const { defaultKeyStatistic } = this.state;
    const { calendarEvents } = this.state;
    const { summaryProfile } = this.state;
    const { summaryDetail } = this.state;
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
            <a style={{color:'gray'}}>   {quote.exchangeName}</a>
            <Separator className="mb-3" />
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" sm="6" md="8">
            <Card className="h-100">
              <Row>
                  <Colxx xxs="12" sm="12" md="12">
                    <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto', verticalAlign:'middle'}}>
                      <h1 style={{marginTop: '15px', marginBottom:'0', padding:'0', verticalAlign:'middle'}}>{priceFormatter}</h1>
                      <h2 style={{marginTop: '26px', marginBottom:'0', padding:'0', verticalAlign:'middle', fontSize:'9px', textAlign:'center', marginRight: '5px', color:'gray'}}>{quote.currency}</h2>
                      <h3 style={{marginTop: '23px', marginBottom:'0', padding:'0', verticalAlign:'middle', fontSize:'12px', textAlign:'center'}}>{+(Math.round((quote.regularMarketChange) + "e+2") + "e-2")}</h3>
                      <h3 style={{marginTop: '23px', marginBottom:'0', padding:'0', verticalAlign:'middle', fontSize:'12px', textAlign:'center'}}>({changePercentFormatter}%)</h3>
                    </CardTitle>
                  </Colxx>
              </Row>
              <Row>
                  <Colxx xxs="12" sm="12" md="12" style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <a style={{fontSize:'6px', textAlign:'center'}}>updated {updatedTime}</a>
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
                      <Area type='monotone' dataKey='close' name={symbol} tickFormatter={sTickFormatter} stackId="1" label='symbol' stroke='#28a745' fill='#28a745' />
                      {this.state.chart_data.length > 0 && <Brush />}
                    </AreaChart>
                  </ResponsiveContainer>
                </Colxx>
              </Row>


              <Row>
                <Colxx xxs="12" sm="12" md="12" style={{padding:'2rem'}}>
                  <Table borderless>
                    <tbody style={{fontSize:'12px'}}>
                      <tr>
                        <td>Open</td>
                        <td style={{color:'gray'}}>{+(Math.round((quote.regularMarketOpen) + "e+2") + "e-2")}</td>
                        <td>Div yield</td>
                        <td style={{color:'gray'}}>{summaryDetail.dividendYield}</td>
                      </tr>
                      <tr>
                        <td>High</td>
                        <td style={{color:'gray'}}>{quote.regularMarketDayHigh}</td>
                        <td>Prev Close</td>
                        <td style={{color:'gray'}}>{summaryDetail.previousClose}</td>
                      </tr>
                      <tr>
                        <td>Low</td>
                        <td style={{color:'gray'}}>{quote.regularMarketDayLow}</td>
                        <td>52-wk high</td>
                        <td style={{color:'gray'}}>{summaryDetail.fiftyTwoWeekHigh}</td>
                      </tr>
                      <tr>
                        <td>Mkt cap</td>
                        <td style={{color:'gray'}}>{parseInt(quote.marketCap).toLocaleString()}</td>
                        <td>52-wk low</td>
                        <td style={{color:'gray'}}>{summaryDetail.fiftyTwoWeekLow}</td>
                      </tr>
                      <tr>
                        <td>P/E ratio</td>
                        <td style={{color:'gray'}}>{financialData.currentRatio}</td>
                        <td>Volume</td>
                        <td style={{color:'gray'}}>{parseInt(quote.regularMarketVolume).toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </Table>
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
                        <tr key={index} style={{padding:'0,10px,0,10px', color:'gray'}}>
                          <td style={{fontSize:'10px', padding:'2px', textAlign:'center'}}>{listValue.date}</td>
                          <td style={{fontSize:'10px', padding:'2px', textAlign:'center'}}>${parseInt(listValue.revenue).toLocaleString()}</td>
                          <td style={{fontSize:'10px', padding:'2px', textAlign:'center'}}>${parseInt(listValue.revenue).toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Row>
              <Row>
                  <Colxx xxs="12" sm="12" md="12">
                    <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                      <h1 style={{fontSize:'16px', marginTop: '15px', marginBottom:'0', padding:'0'}}>Yearly Financials</h1>
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
                    {earnings_yearly.reverse().map(( listValue, index ) => {
                      
                      return (
                        <tr key={index} style={{padding:'0,10px,0,10px', color:'gray'}}>
                          <td style={{fontSize:'10px', padding:'2px', textAlign:'center'}}>{listValue.date}</td>
                          <td style={{fontSize:'10px', padding:'2px', textAlign:'center'}}>${parseInt(listValue.revenue).toLocaleString()}</td>
                          <td style={{fontSize:'10px', padding:'2px', textAlign:'center'}}>${parseInt(listValue.revenue).toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Row>
              <Row>
                <Colxx xxs="12" sm="12" md="12">
                  <CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                    <h1 style={{fontSize:'16px', marginTop: '15px', marginBottom:'0', padding:'0'}}>About {quote.shortName}</h1>
                  </CardTitle>
                  <Card className="mb-4">
                    <CardBody style={{paddingLeft:'1rem', paddingRight:'1rem', paddingTop:'0.5rem', paddingBottom:'0.5rem'}}>
                      <a style={{fontSize:'10px'}}>{summaryProfile.longBusinessSummary}</a>
                    </CardBody>
                  </Card>
                </Colxx>
              </Row>
              <Row>
              </Row>
		        </Card>
		    </Colxx>
	      </Row>
        

      </Fragment>
    );
  }
}


export default injectIntl(Stock);