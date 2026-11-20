# Learning log

## Day 1: Read and run a repository
- 11/9/26 / time spent: 3 hours 
- tool versions: git ..., node ..., npm ...
- First commit: (paste the ID from git log --oneline)
- Evidence: npm test passed 4/4, exit code 0; /health returned 200 {"status":"ok"}
- Broke it on purpose: changed a test, exit code 1, restored
- Stack detective: (your top three risks in the mystery repo)
- Still confused about: reading a stack 

## Day 2: Branches, pull requests, and change control
- PR #1 (README): base main, head docs/explain-running, commit ...
- PR #2 (template + CODEOWNERS): merged, commit ...
- Ruleset protect-main: active, no bypass, PR required, force push blocked
- Direct push to main: REJECTED (GH013) (evidence pasted below)
- Conflict resolved on practice/tone-a; revert practiced on practice/revert
- Independent approval: NOT possible solo; required on a real team
