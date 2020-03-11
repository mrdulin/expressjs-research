async function wait(time: number, clock?) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
    clock && clock.tick(time);
  });
}

export async function main(time, /** for testing */ clock) {
  await wait(time, clock);
  console.log('main');
}
