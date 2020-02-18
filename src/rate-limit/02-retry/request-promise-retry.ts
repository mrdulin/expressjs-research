import rp from 'request-promise';

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// https://developers.google.com/analytics/devguides/reporting/core/v3/coreErrors#backoff
export async function requestWithExponentialBackoff(url) {
  for (let i = 0; i < 5; i++) {
    try {
      return await rp(url);
    } catch (error) {
      console.log(`[${new Date().toLocaleTimeString()}] retry count ${i + 1}`);
      if (error.statusCode === 429) {
        await sleep(Math.pow(i, 2) * Math.random() * 1000);
      } else {
        break;
      }
    }
  }
}
