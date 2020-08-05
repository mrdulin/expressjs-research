# benchmark

- Machine: Darwin US_C02WG0GXHV2V 17.7.0 Darwin Kernel Version 17.7.0: Tue Feb 18 22:51:29 PST 2020; root:xnu-4570.71.73~1/RELEASE_X86_64 x86_64 | 4 core Intel(R) Core(TM) i7-7567U CPU @ 3.50GHz | 16 GB 2133 MHz LPDDR3
- Method: autocannon -c 100 -d 40 -p 10 localhost:3000 (two rounds; one to warm-up, one to measure).
- Node: `v12.16.1`

```bash
☁  expressjs-research [master] ⚡  autocannon -c 100 -d 40 -p 10 localhost:3000
Running 40s test @ http://localhost:3000
100 connections with 10 pipelining factor

┌─────────┬──────┬──────┬───────┬───────┬─────────┬──────────┬────────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%   │ Avg     │ Stdev    │ Max        │
├─────────┼──────┼──────┼───────┼───────┼─────────┼──────────┼────────────┤
│ Latency │ 0 ms │ 0 ms │ 44 ms │ 49 ms │ 4.45 ms │ 16.21 ms │ 1343.64 ms │
└─────────┴──────┴──────┴───────┴───────┴─────────┴──────────┴────────────┘
┌───────────┬────────┬────────┬─────────┬─────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 4115   │ 4115   │ 23071   │ 24063   │ 22056.55 │ 3390.35 │ 4114   │
├───────────┼────────┼────────┼─────────┼─────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 675 kB │ 675 kB │ 3.78 MB │ 3.95 MB │ 3.62 MB  │ 556 kB  │ 675 kB │
└───────────┴────────┴────────┴─────────┴─────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

882k requests in 40.09s, 145 MB read
```
