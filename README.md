A multi-purpose platform with the vision of enhancing peoples' relationship with music
Architecture overview:
---

There is an node server running with Express from the react-backend directory, for handling requests to the database and third party APIs

Within that directory there is also a react-backend/client directory from which the React server is run

### Running Servers:

From root ```vibesconsultant``` directory run:

##### Boot Express backend server:
``` bash
$ cd react-backend/
$ npm start
```
Express server is initially set to run on http://localhost:3001

##### Boot React Development Server
While express server is already running, open a new tab in command line...
``` bash
$ cd client
$ npm start
```
React server initially set to run on http://localhost:3000
