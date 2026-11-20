# secure-build-lab

A deliberately tiny Node.js web service used to learn the software build process.

    npm ci --ignore-scripts   # install exactly what the lockfile says
    npm test                  # run the tests
    npm start                 # serve on http://127.0.0.1:3000
## How to run it

1. Install exactly what the lockfile says: `npm ci --ignore-scripts`
2. Run the tests: `npm test` (expect 4 passing, exit code 0)
3. Start the service: `npm start`, then open http://127.0.0.1:3000/health

The service binds to 127.0.0.1 by default.  Set BIND_ADDRESS only inside a container.
