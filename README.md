This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

All standard react scripts work.

This app is meant to run in conjuction with a locally hosted API which contains the relevant data.

The API server src code can be found at this repo: https://github.com/tomatau/noteful-json-server

---------------------------------------------------------------
This is a simple notekeeping app that uses many capabilities of React/JS - PropType validation, error boundaries, context, API calls, routing, updating state, and so on.

The user can add new folders and an ID will be generated for that folder. Users can also add notes to any existing folders, which will also receive a randomly generated unique ID. Users can delete notes, but not folders. The API can be restarted to clear all added/ deleted data.