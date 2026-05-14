# Alister Fisher's Website

## Setup vercel deployment action
### Run:
```
npm i -g vercel
vercel login
vercel link
cat .vercel/project.json
```

### That file will contain something like:
```
{
  "projectId": "prj_xxxxx",
  "orgId": "team_xxxxx"
}
```

### GitHub repo → Settings → Secrets and variables → Actions
Create these 3 secrets:

- VERCEL_TOKEN
- VERCEL_ORG_ID
- VERCEL_PROJECT_ID