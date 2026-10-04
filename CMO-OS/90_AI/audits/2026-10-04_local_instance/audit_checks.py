"""Independent arithmetic and policy checks; no student assessments.
Run: python3 90_AI/audits/2026-10-04_local_instance/audit_checks.py
"""
from pathlib import Path
from math import ceil, isclose
import hashlib, json, zipfile
ROOT = Path(__file__).resolve().parents[3]
REPO = ROOT.parent
checks = []
def equal(case, actual, expected):
    ok = isclose(actual, expected, rel_tol=1e-9, abs_tol=1e-9)
    checks.append(dict(case=case, actual=actual, expected=expected, passed=ok))
# Recomputed directly from fixture inputs, independently of displayed answers.
equal('001 gross profit', 60000-50000, 10000)
equal('001 after operating cost, not full net profit',90000-78000-4000,8000)
equal('001 margin percent',10000/60000*100,100/6)
equal('002 delay days',5-3,2)
equal('101 weighted average price', (6*4000+4*9000)/10,6000)
equal('101 changed mix',4*4000+6*9000,70000)
equal('102 variable cost total',20000+3000000,3020000)
equal('103 margin percent',(21000-15000)/21000*100,200/7)
equal('103 markup percent',(21000-15000)/15000*100,40)
equal('104 required indivisible units',ceil(400000/(9000-6000)),134)
equal('104 15 percent discount required units',400000/(8500-6000),160)
equal('105 break even indivisible units',ceil(250000/(8000-3500)),56)
equal('105 20 percent safety margin units',ceil((250000/4500)/.8),70)
equal('201 operating profit',350000-250000,100000)
equal('202 collection total assets change',100000-100000,0)
equal('203 gross profit',500000-350000,150000)
equal('204 old CCC days',45+20-30,35)
equal('204 revised CCC days',(45-10)+20-(30-5),30)
equal('205 cash payback months',600000/75000,8)
equal('205 simple first year ROI percent',(12*75000-600000)/600000*100,50)
equal('205 downside cash flow',75000*.75,56250)
equal('206 pre-tax upper bound only',800000-300000-100000,400000)
equal('301 useful work gap hours',8-3,5)
equal('302 segment problem fraction',9/12,.75)
equal('304 commitment conversion',13/50,.26)
equal('401 revenue',20*8000,160000)
equal('401 maximum average service time',80/20,4)
equal('402 exposed labor hours',6*4,24)
equal('403 saved downtime hours',2*5,10)
equal('404 expected contribution',5000-2500-.1*2500,2250)
equal('501 failure percent',100-70,30)
equal('502 actual lead to customer conversion',8/100,.08)
equal('503 implicit implementation price per hour',30000/20,1500)
equal('504 campaign A cost per customer',60000/6,10000)
equal('504 campaign B cost per customer',40000/5,8000)
equal('505 LTV CAC ratio',8*4000/10000,3.2)
equal('505 conditional cash payback months',10000/4000,2.5)
equal('601 gross profit before unconfirmed bonus',600000+120000,720000)
equal('602 total gross profit',50*1200+35*2500+15*4500,215000)
equal('603 reorder point units',10*3+10,40)
equal('603 MOQ excess above independent planned lot',50-30,20)
equal('603 downside reorder point',10*.7*3+10,31)
equal('604 incremental accessory gross profit',(28-20)*2000,16000)
equal('605 conditional incremental result',100*2000-120000-20*1000,60000)
equal('701 bottleneck daily capacity',min(30,12,20,25),12)
equal('702 avoided rework cost',(97-88)*1000,9000)
equal('703 owner time released',4-.5,3.5)
equal('703 new total team hours',1.5+.5,2)
equal('704 independently processed additional decisions',40*(.7-.15),22)
equal('801 outcome target gap percentage points',95-82,13)
equal('801 driver gap percentage points',90-70,20)
equal('802 expected monthly revenue',500000*.8+300000*.5+200000*.2,590000)
equal('802 gap to budget',700000-590000,110000)
equal('803 old revenue-weighted margin',.4*.18+.6*.38,.30)
equal('803 current revenue-weighted margin',.6*.18+.4*.38,.26)
equal('804 complete action fraction',2/12,1/6)
equal('901 won opportunity target',80*.25,20)
equal('901 allowed forecast error',1000000*.1,100000)
equal('902 B score',22*4,88)
equal('902 A score',20+20+20+10,70)
equal('903 weekly minutes saved',10*20-2*20,160)
equal('903 net eight week savings',8*160-120,1160)
equal('904 late delivery fraction',4/6,2/3)
equal('1001 capacity gap',18-12,6)
equal('1002 used monthly capacity',60*4,240)
equal('1003 new complaint cost',200*.1*3000,60000)
equal('1004 A reserve deficit',500000-200000,300000)
equal('1004 B reserve headroom',600000-500000,100000)
equal('1005 monthly contribution',15*7000,105000)
equal('1005 monthly result after stated fixed cost',15*7000-60000,45000)
equal('1005 three month result',3*(15*7000-60000),135000)
equal('1005 monthly capacity headroom',75-15*4,15)
# 12 equal-value questions, 3 per domain. These are fixture policy simulations,
# not a claim that an executable application exists in this repository.
def gate(correct, application, decision, corrected):
    domain = [n/3*25 for n in correct]
    return sum(domain)>=80 and min(domain)>=15 and application and decision and corrected
for case, args, expected in [
    ('total pass cannot override domain fail',([3,3,3,1],True,True,True),False),
    ('balanced total and all other evidence',([3,3,2,2],True,True,True),True),
    ('75 total fails',([3,2,2,2],True,True,True),False),
    ('missing independent application fails',([3,3,3,3],False,True,True),False),
    ('missing decision fails',([3,3,3,3],True,False,True),False),
    ('uncorrected key error fails',([3,3,3,3],True,True,False),False),
]:
    checks.append(dict(case=case, passed=gate(*args)==expected))
# Source assets, old audits/coverage, Knowledge Graph and separate Moriarty corpus
# must remain byte-identical to pre-change baseline.
manifest=json.loads((ROOT/'_archive/local_instance_2026-10-04/baseline_manifest.json').read_text())
def sha(path):
    with path.open('rb') as stream: return hashlib.file_digest(stream,'sha256').hexdigest()
protected=[]
for name, expected in manifest['files'].items():
    if name.startswith('Books/') or name.endswith('Knowledge_Graph.md') or '/coverage/' in name or '/tmp/pdfs/' in name or ('/90_AI/audits/' in name) or '/_archive/' in name:
        path=REPO/name
        protected.append(dict(path=name,passed=path.exists() and sha(path)==expected))
archive=ROOT/'_archive/local_instance_2026-10-04'
with zipfile.ZipFile(archive/'baseline_documents.zip') as saved:
    zip_ok=all(hashlib.sha256(saved.read(name)).hexdigest()==manifest['files'][name] for name in saved.namelist())
    original=saved.read('CMO-OS/10_Daily/Learning_Progress.md')
    backup_ok=original==(archive/'Learning_Progress_INHERITED.md').read_bytes()
checks.extend([dict(case='all original document backup hashes',passed=zip_ok),dict(case='inherited progress backup exact bytes',passed=backup_ok)])
result={'scope':'fixture arithmetic, policy simulation and preservation; no student score','checks':checks,'protected_file_count':len(protected),'protected_failures':[p['path'] for p in protected if not p['passed']]}
result['outcome']='PASS' if all(c['passed'] for c in checks) and not result['protected_failures'] else 'FAIL'
Path(__file__).with_name('audit_checks_results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'outcome':result['outcome'],'checks':len(checks),'protected_files':len(protected),'failed':[c for c in checks if not c['passed']],'protected_failures':result['protected_failures']},indent=2))
raise SystemExit(result['outcome']=='FAIL')
