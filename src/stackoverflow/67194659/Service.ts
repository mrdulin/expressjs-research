import autoBind from 'auto-bind';

class Service {
  model;
  constructor(model) {
    this.model = model;
    autoBind(this);
  }
}

export { Service };
