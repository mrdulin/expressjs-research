import * as api from './api';

export class loadmythings_1 {
  loadmythings = async () => {
    const list = await api.getmythings('arg1', 'arg2');
    const finalvalues: any[] = [];
    list.map((item) => finalvalues.push({ value: item.name }));
    return finalvalues;
  };
}
