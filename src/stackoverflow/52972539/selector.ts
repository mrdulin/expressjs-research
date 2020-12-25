import { createStructuredSelector } from 'reselect';
import { List } from 'immutable';

const kpi_graphs = (state) => state.getIn(['myReducer', 'kpi_graphs'], List());
const show_chart = (state) => state.getIn(['myReducer', 'isShowChart']);

export const kpiData = createStructuredSelector({
  raw_kpi_graph: kpi_graphs,
  isShowChart: show_chart,
});
