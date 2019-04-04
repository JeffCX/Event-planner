NYU IT Event plant front-end developer challange:
https://docs.google.com/document/d/18419yHn-j6S3TLxR8yFMUjlcMqJKDHUJ4K3nqpKxqZY/edit

Deployed Website:
https://event-planner-69441.firebaseapp.com/

I use ReactJs and material UI to implement the application. 
I use cutting-edge react hook to manage the state, since the state is not overly complicated, I did not 
use context API or redux. If the web is sacled, redux.

I also integrate google Map API to render marker and Yelp API to retrieve and sort events by location and distance.

I implement a lightweight nodjs backend as a proxy server to make Yelp fusion api call. 

I use firebase hosting service to host this single page application.

I test the app on mobile device, google chrome and firefox, it all looks good.

## future improvement: 
refractor the aysnchrous code to api folder to increase modularity and scalablity.
Add SASS to write scalable style sheet (Material UI comes with JSS by default)
improve UI.

## Error handling:
if the user do not share the geolocaiton or the backend server (my server or Yelp server crahsed), the frontend app is 
unable to fetch events information.

## Run the project: front end 

In the project directory, you can run:

### npm start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Run the project: back end 

### cd event-yelp-api && npm install 
note that you need to go to yelp website and sign up for an developer account
https://www.yelp.com/developers/documentation/v3/authentication
then set up the environment variable: 
export key=[YOUR_API_KEY]

### npm start 
run the app, free to test the app using postman or curl

### deployment:
make sure you install firebase-cli
https://firebase.google.com/docs/cli/
npm run build && firebase deploy







