# How this project goes from an edit to a running service

editor -> git add/commit -> git push (lab Git server) -> npm ci -> npm test -> npm start

| Step    | Command                   | Proves                              |
|---------|---------------------------|-------------------------------------|
| Install | npm ci --ignore-scripts   | exact, locked dependencies           |
| Test    | npm test                  | behavior still matches the tests     |
| Run     | npm start                 | the service answers on port 3000     |
| Check   | curl -i .../health        | the service is alive                 |
