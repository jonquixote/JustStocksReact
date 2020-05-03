import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row, Button, Card, CardBody, CardTitle, Table } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Label, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";
import moment from "moment";

class Stock extends Component {
  state = {
    symbol: this.props.match.params,
    quote: []
  }
  componentDidMount() {
  var self = this
  const { symbol } = this.state.symbol
  console.log('https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_f5dfcb0819ad4b7fafd3425e89fd2f63')
  axios
    .get('https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_f5dfcb0819ad4b7fafd3425e89fd2f63')
    .then(function (response) {
       console.log(response.data)
       self.setState({quote: response.data})
     })
    .catch(error => this.setState({ error }));
  };

  componentDidUpdate(prevProps) {
    var self = this
    const { symbol } = this.state.symbol
    if (prevProps.match.params !== this.props.match.params) {
      this.setState({ symbol: this.props.match.params })
      axios
        .get('https://cloud.iexapis.com/stable/stock/' + symbol + '/quote?token=pk_f5dfcb0819ad4b7fafd3425e89fd2f63')
        .then(function (response) {
           console.log(response.data)
           self.setState({quote: response.data})
         })
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    const { symbol } = this.props.match.params
    const { quote } = this.state;
    const tickFormatter = (tick) => moment(tick).format('MMMM DD, YYYY');
    const changePercentFormatter = this.state.quote.changePercent*100;
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
	              <Colxx xxs="8" sm="8" md="8">
	                
	              </Colxx>
	              <Colxx xxs="2" sm="2" md="2">

	              </Colxx>
	            </Row>
	          </Card>
	        </Colxx>
	        <Colxx xxs="12" sm="6" md="4">
	            <Card className="h-100">
	              <Row>
		              <Colxx xxs="12" sm="12" md="12">
		              	<CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
		                  <h1 style={{marginTop: '20px'}}>${quote.latestPrice}</h1>
		                </CardTitle>
		              </Colxx>
		              <Colxx xxs="6" sm="6" md="6">
		              	<CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
		              		<h2>{quote.change}</h2>
		              	</CardTitle>
		              </Colxx>
		              <Colxx xxs="6" sm="6" md="6">
		              	<CardTitle style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
		              		<h2>({changePercentFormatter}%)</h2>
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