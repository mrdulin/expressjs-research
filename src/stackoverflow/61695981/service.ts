class MyService {
  async doSomething() {
    await this.delay(5000);
    return 'Done';
  }
  delay(millis: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, millis);
    });
  }
}

export { MyService };
