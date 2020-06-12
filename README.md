# Recipes Book

## Work In Progress Application

App where you can create your own recipe book.
Created using React and Jest.

## Setup

`yarn install`

To install all dependencies.

To connect to the database, create `.env.development.local` && `.env.test.local` files to set the React variables as the following example.

```
REACT_APP_FIREBASE_API_KEY=key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=domain_here
REACT_APP_FIREBASE_DATABASE_URL=db_url_here
REACT_APP_FIREBASE_PROJECT_ID=project_id_here
REACT_APP_FIREBASE_STORAGE_BUCKET=bucket_here
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=messaging_sender_here
REACT_APP_FIREBASE_APP_ID=app_id_here
REACT_APP_FIREBASE_MEASUREMENT_ID=measurement_id_here
```


## Usage

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## To Do List

- Form
  - Add recipe tag
- Firebase db
  - Look for other users
  - Display other user recipes
  - Add timestamp
  - Add different display order methods
  - Add writing rules to db
- Improve loading message
- Improve route protection
- Resolve double rendering
- Add Express
- User reset password
- Edit recipe
- Delete recipe
- CSS
 - Fix minimum h of App
 - Fix file upload input
 - Add logo
- Add footer content
- Credit images in footer