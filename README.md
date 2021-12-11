# This is a custom CRA template. (cra-template-s4netquest-default)

Please see the original CRA README.md contents below this custom template information.

This custom Create-React-App (CRA) template is specific to the S4 NetQuest development process. It includes our most commonly utilized npm packages and project structure. Anyone is welcome to use this template, however it may change at any time without notice and with minimal regard to your use case (please fork your own version if you really like it). Here is what this template includes in addition to the CRA defaults:

* Dependencies:
  * react-app-polyfill ( imported in index.js for 'ie11' and 'stable' )
  * react-router-dom
  * env-cmd ( load different .env configurations per environment )
  * sass ( add dart-sass compiling to CRA )
* Custom Scripts:
  * `install-dev-deps` ( install storybook, a number of storybook addons )
    * Run this command after CRA installs to install these devDependencies - these cannot be included in the custom template
  * `build:stage` ( runs a production build using the .env.staging file as environment variables )
  * `storybook` ( runs storybook dev server )
  * `build-storybook` ( builds the storybook for deployment to a server )
* Features
  * Sass compiles from any imported .sass file ( default `src/style/index.sass` is imported to `src/index.js` )
  * Bulma 0.9.2 sass files are included in `src/style/bulma_v0.9.2` and imported to project by default
  * Absolute imports from `/src` are enabled, relative imports are not necessary but still supported

### Installing
1. `npx create-react-app PROJECT_NAME --template cra-template-s4netquest-default`
2. after install, run `npm run install-dev-deps`
3. begin working on your project!

# ORIGINAL CRA README.MD CONTENTS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify