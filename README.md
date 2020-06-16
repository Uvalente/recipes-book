# CookBook101

### Description

CookBook101 is a fully responsive web app.  
As a user, you can register for an account and record your cooking recipes online.  
At the moment your recipe collection is private, in future it will be implemented the option to make it public and browse other user's collections.  
The app has been built as a SPA in React, storing data with Google Firebase, styled with Taildwind CSS, and using Jest and Cypress for TDD.  
The live version can be found at: [CookBook101](https://cook101.herokuapp.com/)

## Run it locally

### Setup

`yarn install`

To install all dependencies.

To connect to the database, create `.env.development.local` && `.env.test.local` files and set the React variables as the following example.

```
REACT_APP_FIREBASE_API_KEY=[key_here]
REACT_APP_FIREBASE_AUTH_DOMAIN=[domain_here]
REACT_APP_FIREBASE_DATABASE_URL=[db_url_here]
REACT_APP_FIREBASE_PROJECT_ID=[project_id_here]
REACT_APP_FIREBASE_STORAGE_BUCKET=[bucket_here]
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=[messaging_sender_here]
REACT_APP_FIREBASE_APP_ID=[app_id_here]
REACT_APP_FIREBASE_MEASUREMENT_ID=[measurement_id_here]
```


## Usage

`yarn start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  

`yarn test`

Launches the test runner in the interactive watch mode.  

`npx cypress run`

Launches Cypress integration test.  
Remember to have the app running before launching Cypress.


## To Do List

- Form
  - Add recipe tag
  - Add visibility option
  - Add standalone course type
  - Add % and TT to measures
- Firebase db
  - Look for other users
  - Display other user recipes
  - Add timestamp
  - Add different display order methods
  - Add visibility option and update db rules
- Change favicon
- Improve loading message
- Improve route protection
- Resolve double rendering
- User reset password
- Edit recipe
- Delete recipe
- Clean up index.html
- Update `<head>` and project name
- Picture modal
- CSS
  - Remove image from Recipe if not present
  - Remove ingredients from Recipe if not present
