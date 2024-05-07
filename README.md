*** SCROLL DOWN BELLOW FOR RUNNING TASK INSTRUCTIONS! ***



----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



*** ABOUT PROJECT AND INSTRUCTIONS HOW TO RUN ***

Project was built with React using Typescript and state management Zustand. Reason why i chose Zustand is i believe it's good enough for smaller task like this so other state
management system's like Redux which are more powerful are better for bigger projects. 

As described in task i have used all necessary fetching end points for listing movies, tvshows and their details including quering for search engine. Which you can find in code. 

I have used separation of concerns and divided components from pages, stores, interfaces and vice versa so every different type of files are separated from each other for better readability and cleaner folder structure. 

*How to run:*
Simply in therminal use `npm start` command and project will start. Keep in mind that considering i had to use `API Key` from own account on moviesdb webpage, i stored it in a `.env` file. So for that matter please eihter use your `API key` and place it under a `.env` file or inside of code. I dont know any other way to implement that as moviesdb requires `API key` in order to have authorized access to get methods for end points. 
Other alternative way to access the project is by going to https://show-spot-app.vercel.app/ Vercel page where i deployed it. Thanks to Vercel's environment variables, anyone can view the content on the page.

