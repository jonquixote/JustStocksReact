import React, { Component, Fragment } from "react";
import { injectIntl } from 'react-intl';
import { Row } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

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


class DashboardHome extends Component {
  render() {
    const {messages} = this.props.intl;
    return (
      <Fragment>
        <Row>
          <Colxx xxs="12">
            <Breadcrumb heading="menu.home" match={this.props.match}/>
            <Separator className="mb-5" />
          </Colxx>
        </Row>

        <Row>
          <Colxx xl="12" lg="12" className="mb-4">
            <HoldingsReturns/>
          </Colxx>
        </Row>

        <Row>
          <Colxx sm="12" lg="4" className="mb-4">
           <ProfileStatuses/>
          </Colxx>
          <Colxx md="6" lg="4" className="mb-4">
            <GradientCardContainer/>
          </Colxx>
          <Colxx md="6" lg="4" className="mb-4">
           <Cakes/>
          </Colxx>
        </Row>
        <SortableStaticticsRow messages={messages}/>
        <Row>
          <Colxx sm="12" md="6" className="mb-4">
            <WebsiteVisitsChartCard/>
          </Colxx>
          <Colxx sm="12" md="6" className="mb-4">
            <ConversionRatesChartCard/>
          </Colxx>
        </Row>

        <Row>
          <Colxx lg="12" md="6" xl="4">
            <Row>
              <Colxx lg="4" xl="12" className="mb-4">
                <GradientWithRadialProgressCard
                  icon = "iconsminds-clock"
                  title = {`5 ${messages["dashboards.files"]}`}
                  detail = {messages["dashboards.pending-for-print"]}
                  percent = {5*100/12}
                  progressText = "5/12"
                />
              </Colxx>
              <Colxx lg="4" xl="12" className="mb-4">
                <GradientWithRadialProgressCard
                  icon = "iconsminds-male"
                  title = {`4 ${messages["dashboards.orders"]}`}
                  detail = {messages["dashboards.on-approval-process"]}
                  percent = {4*100/6}
                  progressText = "4/6"
                />
              </Colxx>
              <Colxx lg="4" xl="12" className="mb-4">
                <GradientWithRadialProgressCard
                  icon = "iconsminds-bell"
                  title = {`8 ${messages["dashboards.alerts"]}`}
                  detail = {messages["dashboards.waiting-for-notice"]}
                  percent = {8*100/10}
                  progressText = "8/10"
                />
              </Colxx>
            </Row>
          </Colxx>
          <Colxx lg="6" md="6" xl="4" sm="12" className="mb-4">
           <AdvancedSearch messages={messages}/>
          </Colxx>
          <Colxx lg="6" xl="4" className="mb-4">
            <SmallLineCharts/>
            <TopRatedItems/>
          </Colxx>
        </Row>
      </Fragment>
    );
  }
}
export default injectIntl(DashboardHome);