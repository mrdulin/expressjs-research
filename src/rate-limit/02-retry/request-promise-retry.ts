import rp from 'request-promise';

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getNextRetryDelay(retryNumber: number) {
  return Math.pow(2, retryNumber) * 1000 + Math.floor(Math.random() * 1000);
}

// https://developers.google.com/analytics/devguides/reporting/core/v3/coreErrors#backoff
export async function requestWithExponentialBackoff(url): Promise<any> {
  for (let i = 0; i < 5; i++) {
    try {
      return await rp(url);
    } catch (error) {
      console.log(`[${new Date().toLocaleTimeString()}] retry count ${i + 1}`);
      if (error.statusCode === 429) {
        await sleep(getNextRetryDelay(i));
      } else {
        break;
      }
    }
  }
}
