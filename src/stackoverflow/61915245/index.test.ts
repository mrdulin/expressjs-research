import { expect } from 'chai';

describe('61915245', () => {
  it('should pass', () => {
    const jsonData = {
      idP: '86b685aa-bdae-4ee7-acdb-420adf22e2b4',
      idCons: 'e1e09da5-4de6-4ea1-bdc6-725119939b1a',
      dataConsulta: '2020-05-18T21:27:42.597Z',
      dataValidade: '2020-06-17T21:27:42.597Z',
      parametros: {
        RET_RESPOSTA: 'VER',
        RET_LIMITE: '0',
      },
    };
    const DriverD = parseFloat(jsonData.idCons);
    expect(DriverD).not.to.be.null;
  });
});
