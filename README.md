# PUSL2020 Node.js App

This is a simple Node.js and Express application that accepts a user's name from a form and displays a greeting.

## Requirements

- Node.js
- npm

## Installation

```bash
npm install
```

## Run The App

```bash
npm start
```

The server runs on `http://localhost:3001`.

## Available Routes

- `GET /` displays a form to submit a name
- `POST /submit-name` stores the submitted name and redirects to the greeting page
- `GET /hello` shows the greeting for the submitted name

## Project Structure

- `server.js` Express server and route handling
- `package.json` project metadata and scripts

## Notes

- The submitted name is stored in memory and resets when the server restarts.