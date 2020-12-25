import { kpiData } from './selector';
import { Map, List } from 'immutable';
import { expect } from 'chai';

describe('52972539', () => {
  it('should create structed selector correctly if there is a kpi_graphs slice in reducer', () => {
    const state = Map({
      myReducer: {
        kpi_graphs: 'a',
        isShowChart: true,
      },
    });
    const actual = kpiData(state);
    expect(actual).to.deep.equal({ raw_kpi_graph: 'a', isShowChart: true });
  });

  it('should create structed selector correctly if there is no kpi_graphs slice in reducer', () => {
    const state = Map({
      myReducer: {
        isShowChart: true,
      },
    });
    const actual = kpiData(state);
    expect(actual).to.deep.equal({ raw_kpi_graph: List(), isShowChart: true });
  });
});
