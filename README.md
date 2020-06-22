# CookBook101

### Description

This project was initially created as a learning experience to improve and fiddle around with React and Cloud Firestore, while applying a TDD approach using Jest and introducing later on Cypress for integration testing.  
The app is styled with Tailwind CSS, utilizing PostCSS to purge the unused classes and automatically add prefixes for maximum compatibility.

It has since evolved in a fully responsive single page app, where a user can create an account and upload his cooking recipes, providing all the information needed and an optional picture.

At the moment your recipe collection is private, in future it will be implemented the option to make it public and browse other user's collections.
  
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
- Firebase db
  - Look for other users
  - Display other user recipes
  - Add timestamp
  - Add different display order methods
  - Add visibility option and update db rules
- User reset password
- Edit recipe
- Delete recipe
- Picture modal
- Extract common element in components
- Change default image
- Improve security
- Name on new user
- Add logo link