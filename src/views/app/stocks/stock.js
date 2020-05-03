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
    moment.locale('en');
    const { symbol } = this.props.match.params
    const { quote } = this.state;
    const tickFormatter = (tick) => moment(tick).format('MMMM DD, YYYY');
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <h1>{quote.companyName}</h1>
            <a>   ({symbol})</a>
            <Separator className="mb-3" />
          </Colxx>
        </Row>

        

      </Fragment>
    );
  }
}
export default injectIntl(Stock);