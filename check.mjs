import assert from 'node:assert/strict';
import fs from 'node:fs';
import {nodes,edges,flows,privacy,sha256} from './dist/model.mjs';
import {review} from './dist/review.mjs';
import {engineDecision} from './dist/decisions.mjs';
assert.equal(nodes.length,14);assert.equal(new Set(nodes.map(n=>n.id)).size,14);
for(const [a,b] of edges){assert(nodes.some(n=>n.id===a));assert(nodes.some(n=>n.id===b));}
for(const list of Object.values(flows))for(const step of list){assert(nodes.some(n=>n.id===step[0]));assert.equal(step.length,4);}
assert.equal(privacy.length,9);assert.equal(await sha256('abc'),'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');assert.notEqual(await sha256('a'),await sha256('b'));
assert.equal(review.catalog.length,10);assert.equal(new Set(review.catalog.map(g=>g.id)).size,10);
for(const g of review.catalog){assert.match(g.sha256,/^[a-f0-9]{64}$/);assert.match(g.digest,/^sha256:[a-f0-9]{64}$/);assert(g.input&&g.acceptance);}
for(const id of ['the-house-of-the-dead-2','brutal-doom','brutal-doom-64','time-crisis-ii'])assert.match(engineDecision(id,'unsupported').status,/FALLBACK/);
assert.match(engineDecision('virtua-cop-2','unsupported').status,/BLOCKED/);
for(const id of ['the-house-of-the-dead-2','brutal-doom-64','virtua-cop-2','time-crisis-ii']){assert.match(engineDecision(id,'no-evidence').status,/BLOCKED/);assert.match(engineDecision(id,'host').status,/NEEDS ACTION/);assert.match(engineDecision(id,'supported').status,/REUSE/);assert.match(engineDecision(id,'missing').status,/PREPARE/);}
for(const id of ['the-house-of-the-dead-2','virtua-cop-2'])assert.match(engineDecision(id,'alternative').status,/NOT AUTOMATIC/);
for(const id of ['brutal-doom','brutal-doom-64','time-crisis-ii'])assert.match(engineDecision(id,'alternative').status,/REUSE/);
assert.match(engineDecision('time-crisis-ii','missing').body,/Both app and KDE runtime commits/);
assert.equal(review.reviewDate,'2026-10-23');
assert(review.catalog.every(g=>g.description.includes('Requires an up-to-date Momentum launcher.')));
assert(review.catalog.find(g=>g.id==='time-crisis-ii').acceptance.includes('synthetic'));
const html=fs.readFileSync('dist/index.html','utf8'),app=fs.readFileSync('dist/app.mjs','utf8');for(const [,id] of app.matchAll(/\$\('#([\w-]+)'\)/g))assert(html.includes(`id="${id}"`),`Missing DOM id ${id}`);
for(const name of ['architecture','journey','package','privacy','notes','store','engines','changes'])assert(html.includes(`id="${name}"`));assert(!/XMLHttpRequest|WebSocket|sendBeacon|fetch\(/.test(app),'No automatic remote requests');assert(!/localStorage|sessionStorage|document.cookie|fetch\(/.test(app),'No tracking or persistence');
console.log('PASS: component graph, flows, hashes, DOM targets, sections and no remote requests / browser storage');
