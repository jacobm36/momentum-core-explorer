import fs from 'node:fs';
import assert from 'node:assert/strict';
const elements=[];
class Element{
 constructor(tag='div'){this.tagName=tag.toUpperCase();this.dataset={};this.style={};this.attributes={};this.children=[];this.events={};this.className='';this.value='';this.textContent='';this.innerHTML='';this.open=false;elements.push(this);this.classList={contains:c=>this.className.split(/\s+/).includes(c),toggle:(c,on)=>{const set=new Set(this.className.split(/\s+/).filter(Boolean));if(on===undefined)on=!set.has(c);on?set.add(c):set.delete(c);this.className=[...set].join(' ');},add:c=>this.classList.toggle(c,true),remove:c=>this.classList.toggle(c,false)};}
 setAttribute(k,v){this.attributes[k]=v;if(k==='class')this.className=v;if(k==='id')this.id=v;}addEventListener(k,f){(this.events[k]??=[]).push(f);}append(e){this.children.push(e);}replaceChildren(...items){for(const c of this.children){const i=elements.indexOf(c);if(i>=0)elements.splice(i,1);}this.children=[...items];}focus(){}showModal(){this.open=true;}close(){this.open=false;}click(){for(const f of this.events.click||[])f({target:this});this.onclick?.({target:this});}
}
const html=fs.readFileSync('dist/index.html','utf8');
for(const [,tag,raw] of html.matchAll(/<([a-z][a-z0-9-]*)\b([^>]*)>/gi)){const e=new Element(tag);for(const [,key,value] of raw.matchAll(/([\w-]+)="([^"]*)"/g)){if(key==='id')e.id=value;else if(key==='class')e.className=value;else if(key.startsWith('data-'))e.dataset[key.slice(5).replace(/-([a-z])/g,(_,x)=>x.toUpperCase())]=value;}}
const nested=new Map([['#arrow path',new Element('path')],['#store-detail pre',new Element('pre')]]);
function queryAll(s){if(s.startsWith('#'))return elements.filter(e=>e.id===s.slice(1));if(s.startsWith('.'))return elements.filter(e=>e.classList.contains(s.slice(1)));const m=s.match(/^\[data-([\w-]+)\]$/);if(m)return elements.filter(e=>m[1] in e.dataset);throw Error('Unsupported test selector '+s);}
const q=s=>nested.get(s)||queryAll(s)[0]||null;
const documentEvents={};
globalThis.document={body:new Element('body'),hidden:false,querySelector:q,querySelectorAll:queryAll,createElement:t=>new Element(t),createElementNS:(_,t)=>new Element(t),addEventListener:(name,handler)=>{documentEvents[name]=handler;}};
globalThis.location={hash:''};globalThis.history={replaceState:(_,__,hash)=>{location.hash=hash;}};globalThis.window={addEventListener(){}};
q('#example-game').value='la';q('#engine-package').value='the-house-of-the-dead-2';q('#engine-scenario').value='supported';q('#sample-payload').value='mouse_aim=true\ndisplay=borderless\nengine=approved-build';
await import('./dist/app.mjs');
assert.equal(queryAll('.node').length,14);assert.equal(queryAll('.edge').length,14);assert(q('#inspector').innerHTML.includes('Python backend'));
q('#node-resolver').click();assert(q('#inspector').innerHTML.includes('Runtime selection'));
queryAll('[data-view]').find(e=>e.dataset.view==='store').click();assert(q('#store').classList.contains('active'));assert.equal(q('#store-list').children.length,10);
queryAll('[data-pillar]').find(e=>e.dataset.pillar==='openbor').click();assert.equal(q('#store-list').children.length,2);assert(q('#store-detail').innerHTML.includes('Marvel'));
q('#engine-scenario').value='unsupported';q('#engine-scenario').onchange();assert(q('#engine-result').innerHTML.includes('ISOLATED FALLBACK'));
q('#engine-package').value='virtua-cop-2';q('#engine-package').onchange();assert(q('#engine-result').innerHTML.includes('BLOCKED'));
q('#engine-package').value='time-crisis-ii';q('#engine-scenario').value='missing';q('#engine-package').onchange();assert(q('#engine-result').innerHTML.includes('ISOLATED MAME'));
q('#engine-package').value='virtua-cop-2';q('#engine-scenario').value='alternative';q('#engine-package').onchange();assert(q('#engine-result').innerHTML.includes('NOT AUTOMATIC'));
q('#example-game').value='enyo';for(const f of q('#example-game').events.change)f();assert.equal(q('#signal-track').children.length,8);q('#next').click();assert.equal(q('#step-count').textContent,'02 / 08');
queryAll('[data-package]').find(e=>e.dataset.package==='lifecycle').click();assert(q('#package-code').textContent.includes('Retain source files'));
queryAll('[data-boundary]').find(e=>e.dataset.boundary==='network').click();assert(!q('#privacy-list').innerHTML.includes('Library & history'));assert(q('#privacy-list').innerHTML.includes('Catalog & releases'));
q('#detail-toggle').click();assert(document.body.classList.contains('show-detail'));
q('#help-open').click();assert(q('#help').open);q('#help-close').click();assert(!q('#help').open);
q('#help-open').click();documentEvents.keydown({key:'Escape',preventDefault(){},target:q('#help-close')});assert(!q('#help').open);
await q('#hash-button').onclick();assert(q('#hash-result').textContent.includes('match'));q('#sample-payload').value+='x';await q('#hash-button').onclick();assert(q('#hash-result').textContent.includes('Bytes changed'));
console.log('PASS: DOM wiring, map inspection, navigation, store filters, engine cases, Enyo steps, package tabs, privacy filters, detail/help and hash editing (mock DOM, not browser visual QA)');
