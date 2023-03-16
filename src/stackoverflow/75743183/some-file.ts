import someService from './a-location';

const val = someService.getVal();

const AnObject = {
  someMethod() {
    console.log('val: ', val);
  },
};

export default AnObject;
