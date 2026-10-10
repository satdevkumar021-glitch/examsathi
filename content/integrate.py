import json,pathlib,hashlib
root=pathlib.Path(__file__).parent; research=root/'research'
r=json.load(open(research/'syllabus-resources.json'));resources=r['resources']
result=[]
for name in ['sst-lessons.json','sst-extra.json','sst-geography.json']:
 for l in json.load(open(research/name)):
  l['domain']=l['subject'];l['subject']='SST';l['level']='Foundation / concept preparation'
  if l['unit']=='History':l['unit']='World history'
  l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[])
  for v in l['videos']:
   if 'url' not in v and ('youtubeId' in v or 'id' in v):v['url']='https://www.youtube.com/watch?v='+v.get('youtubeId',v.get('id'))
   if isinstance(v.get('title'),dict):v['title']=v['title']['en']
  result.append(l)
nios_map={'sst-harappa':'01','sst-buddhism-jainism':'01','sst-maurya':'01','sst-national-movement':'08','sst-constitution':'15','sst-fundamental-rights':'16','sst-legislature':'20','sst-executive':'19','sst-judiciary':'20','sst-federal-local':'18','sst-renaissance':'03','sst-french-revolution':'03','sst-industrial-revolution':'04','sst-world-wars':'04','sst-geo-monsoon':'10','sst-geo-punjab':'09','sst-geo-environment':'11'}
video_map={'sst-harappa':'UDyj1iXKgD0','sst-national-movement':'g9Qu1l6Qx_A','sst-constitution':'gnpW1TEI8lg','sst-fundamental-rights':'DP0RN8MDzxM','sst-executive':'OJD95vMBGVs','sst-federal-local':'KWY1axdMPvM','sst-renaissance':'aTUmK-qtQW8','sst-french-revolution':'yN_Bh4hz9H0','sst-industrial-revolution':'L6yJFszqn_A','sst-world-wars':'Y-5jE_JIS2o','sst-geo-monsoon':'bx54GZsEFeo'}
for l in result:
 num=nios_map.get(l['id'])
 if num:
  for language in ['Hindi','English']:
   match=next((x for x in resources if x['url'].endswith('/'+language+'/Lesson-'+num+'.pdf')),None)
   if match:l['documents'].append({'title':'NIOS · '+l['title']['hi']+' · '+language,'url':match['url'],'language':language})
 vid=video_map.get(l['id']); match=next((x for x in resources if 'v='+str(vid) in x['url']),None) if vid else None
 if match:l['videos'].append({'title':'NIOS · '+match['title'],'url':match['url'],'language':'NIOS source-listed video · audio language not independently verified'})
 pub='Bhugol class 12 Punjabi' if l.get('domain')=='Geography' or l['unit']=='Physical geography' else 'Samajik Sikhya class 10 Punjabi part II' if (l.get('domain')=='Economics' or l['unit']=='Economics') else 'Samajik Sikhya class 10 Punjabi part I'
 match=next((x for x in resources if x['title']==pub),None)
 if match:l['documents'].append({'title':'PSEB · '+pub,'url':match['url'],'language':'ਪੰਜਾਬੀ · textbook, select the relevant chapter'})
 for kind in ['sources','videos','documents']:
  seen=set();l[kind]=[x for x in l[kind] if not (x['url'] in seen or seen.add(x['url']))]

# Add rich Science lessons
for l in json.load(open(research/'science-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add rich Math and General lessons
for l in json.load(open(research/'general-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add Hindi and English language lessons
for l in json.load(open(research/'lang-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)


# Add Punjabi and Sanskrit lessons
for l in json.load(open(research/'punjabi-sanskrit-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add History and Geography detailed lessons
for l in json.load(open(research/'history-geo-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add Physics and Economics lessons
for l in json.load(open(research/'science-eco-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add Teaching / Pedagogy lessons (PSTET, CTET, ETT, REET)
for l in json.load(open(research/'teaching-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add clerk/REET priority lessons (PSSSB Clerk Advt.15/2022, REET CDP & EVS)
for l in json.load(open(research/'teaching-lessons-3.json')):
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add Chemistry lessons (Lecturer Cadre)
for l in json.load(open(research/'chemistry-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add Political Science lessons (Lecturer Cadre / RPSC)
for l in json.load(open(research/'polsci-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add Political Science lessons batch 2 (Parliament, Judiciary — Master Cadre / RPSC)
for l in json.load(open(research/'polsci-lessons-2.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add Commerce lessons (Lecturer Cadre)
for l in json.load(open(research/'commerce-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

# Add Biology lessons (Lecturer Cadre)
for l in json.load(open(research/'biology-lessons.json')):
 l['level']='Foundation / concept preparation'
 l['videos']=l.get('videos',[]);l['documents']=l.get('documents',[]);l['sources']=l.get('sources',[])
 result.append(l)

assert len({l['id'] for l in result})==len(result), f"Duplicate IDs: {[l['id'] for l in result if [l2['id'] for l2 in result].count(l['id'])>1]}"
json.dump(result,open(root/'lessons.json','w'),ensure_ascii=False,indent=2)
# Keep a clean syllabus inventory; evidence/claims remain in repository docs.
s={'exam':r['exam'],'version':r['syllabusVersion'],'currentVersionVerified':False,'officialSource':r['officialSource'],'hierarchy':r['hierarchy']}
json.dump(s,open(root/'syllabus.json','w'),ensure_ascii=False,indent=2)
print('Integrated',len(result),'lessons;',sum(len(l['questions'])for l in result),'questions;',sum(len(l['flashcards'])for l in result),'flashcards')
