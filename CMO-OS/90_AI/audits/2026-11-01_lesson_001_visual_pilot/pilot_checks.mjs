import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const html=fs.readFileSync(new URL('../../../02_Lessons/visuals/lesson-001/index.html',import.meta.url),'utf8');
const context=vm.createContext({});
for(const name of ['calculate','grade']){
 const line=html.split('\n').find(l=>l.startsWith('function '+name+'('));
 vm.runInContext(line,context);
}
const results=[];
function check(name,fn){fn();results.push({name,passed:true});}
check('Phone example',()=>{const r=context.calculate(60000,50000,1,3000); assert.equal(r.revenue,60000);assert.equal(r.gross,10000);assert.equal(r.remaining,7000);assert.ok(Math.abs(r.margin-100/6)<1e-10);});
check('Independent practice scenario',()=>{const r=context.calculate(42000,34000,2,2000);assert.equal(r.revenue,84000);assert.equal(r.gross,16000);assert.equal(r.remaining,12000);assert.ok(Math.abs(r.margin-400/21)<1e-10);});
check('Test scenario',()=>{const r=context.calculate(36000,27000,2,4000);assert.equal(r.revenue,72000);assert.equal(r.gross,18000);assert.equal(r.margin,25);assert.equal(r.remaining,10000);});
check('Zero revenue has undefined margin',()=>{const r=context.calculate(0,50000,1,3000);assert.equal(r.margin,null);assert.equal(r.remaining,-53000);});
check('Zero sales',()=>{const r=context.calculate(60000,50000,0,3000);assert.equal(r.remaining,0);assert.equal(r.margin,null);});
check('Loss is negative',()=>{const r=context.calculate(40000,50000,1,3000);assert.equal(r.margin,-25);assert.equal(r.remaining,-13000);});
check('Full score passes locally',()=>{const r=context.grade(Array(12).fill('0'));assert.equal(r.score,100);assert.equal(r.pass,true);});
check('83.33 fails when one domain below minimum',()=>assert.equal(context.grade(['1','1',...Array(10).fill('0')]).pass,false));
check('83.33 passes with domain minimums',()=>assert.equal(context.grade(['1','0','0','1',...Array(8).fill('0')]).pass,true));
check('75 total fails despite domain minimums',()=>assert.equal(context.grade(['1','0','0','1','0','0','1','0','0','0','0','0']).pass,false));
check('Practice hidden initially and questions precede example',()=>{assert.match(html,/<section id="practice" hidden>/);assert.ok(html.indexOf('<section id="questions-space">')<html.indexOf('<section id="example">'));});
console.log(JSON.stringify({status:'PASS',checks:results.length,results},null,2));
