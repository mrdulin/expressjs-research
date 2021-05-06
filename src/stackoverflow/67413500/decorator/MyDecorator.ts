export function myDecorator() {
  return function check(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const newDescriptor = Object.assign({}, descriptor);
    console.log('real implementation, do heavy and side-effect work');
    return newDescriptor;
  };
}
