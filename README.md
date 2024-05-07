# React & TypeScript Technical Test


Thank you for the opportunity to demonstrate my capabilities on this project. I thoroughly enjoyed the challenge and am eager to discuss my methods and results in more detail.

I am excited about the prospect of joining such an innovative company that leverages cutting-edge technology to enhance healthcare accessibility and affordability. I am deeply inspired by Legit.Health's commitment to improving health outcomes worldwide and am enthusiastic about contributing to your team, driving forward these advancements with my skills and passion.


In the next paragraph are the instructions to install and run the app in local and a link to the live demo, after that a brief description about what was the goal, more information and next steps that I would do with more time.

PD: I was surprised that the CTO was Gerardo because I was fan of the "Receta javascriptera de los miércoles" and I watched a few videos of the "Latte and Code", Thank you Gerardo for help me and other to learn more about development.

## Demo

Visit the deployed application: [User list](https://legit-health.vercel.app)

## Installation

To set up this project locally, follow these steps:

1. **Clone the Repository**

   First, clone the project repository to your local machine using Git:

   ```bash
   git clone https://github.com/incari/legit-health
   cd your-repository-name

   ```

2. **Install**

   ```bash
   npm install  or yarn install

   ```

3. **Run the App**

   ```bash
   npm run dev  or yarn dev
   ```

## Description

As requested I used the following libs:
- Typescript
- Tamstack query (react query) for data fetching and cache
- Material UI for styled components
- React hook form to manage form data 
- React router dom for the routing system (I used a old version Routes + Route but I know that the new version have different ways to create this browser router system)


The architecture folders used for this app was a simple 
- api: For the fetching functions
- components: Small reusable blocks of elements 
- pages: For each of the rendered individual pages.

For the Api fns, I used plain fetch fn and Tamnstack React Query lib to managing the state of the data through the app. There are a few next steps that I would like to do to improve the UX, like adding new users data to local storage and adding it after requesting the users lists. This will simulate creating the new user and will not interfere with the data fetching or manipulating it. But it will take some time, specially for the pagination system. Also I would like to use try-catch to manage errors in the api response.
The typescript of the data is here too.

The app work basically requesting the user list on the Home page (Home.tsx) and rendering a list of Cards. Each card have a link to the detail page (Detail.tsx) that redirect to the user to the path "/user/:id" and it do another fetch with the data of the user. I choose this approach to be able to open the url of the user directly. It should be noted that when you request the user list in the Home page, React query generate a data state for each user, so when the user clicks and goes to the detail page, all the information is already available in the cache, so is not making a new request when is redirected.

When the user is NOT in the home page, the "Go back" button is enable with a small handler that helps to prevent to the user clicking back and going to the previous website (that can be other that the original one) and sending it to the home page instead.

In the top left is a create user button that redirects to a form page, This form is using the react-form lib that manage the validation of the fields and clicking the submit button send the post request to create a new user. It have a feedback snackbar to display the results of success/error, the button is disabled when is loading to prevent to send multiple request with the same data and clear the input field on success to create a new user from scratch.

A basic not found page with a redirect to home page in case that the user types a wrong url.

### Next steps

- They are missing some key part of the app like the testing.
- I would like to add a search bar to filter users data.
- I would use Suspense with fallback with the skeletons for each component or card
- The skeletons are not quite right and I would like to spend more time to match the designs of the cards.
- As I commented before, I like the idea of adding the new users created to a local storage to keep the data locally.


## Farewell

Thank you again for the opportunity.

Best, Martin.


## Objective
Your main objective is to create a simple React application using TypeScript to consume the API exposed by [https://reqres.in/](https://reqres.in/).

**Duration:** 3 to 4 hours.

## Core Features
1. **User List Page:**
   - Create a page that lists users fetched from the API. Each user entry should display at least:
     - Profile picture
     - First and last name
     - Email
2. **User Details Page:**
   - Upon clicking a user entry in the User List Page, navigate to a User Details Page that displays:
     - Profile picture
     - First and last name
     - Email
     - Any additional details provided by the API for that specific user.
3. **User Creation Form:**
   - Implement a form to create a new user:
     - Fields should include first name, last name, and email.
     - On submission, simulate an API call to "create" the user (using the POST API provided by reqres.in). Inform the user about the success or failure of the operation.

## Bonus Features (Not Mandatory, but a Plus)
- Pagination on the User List Page.
- Error handling for API calls (e.g., show a message if data fetching fails).
- An appealing design or UI touches.
- Any additional features that you believe would make this application stand out!
- Use React Hook Form library to handle the form

## Requirements
- Use React & TypeScript.
- It would be beneficial (but not mandatory) if you use any of the following libraries: NextJS, Mui, React Query, React Router, React Hook Forms.
- Use fetch to make API calls.

## Documentation
- Provide a README in your repository. This should explain:
  - How to run your application.
  - Any design or architectural choices you made and why.
  - Any additional features or functionalities you added and a brief reasoning behind them.

## Submission
- Push your code to a Git repository.
- Share the link to the repository with us for review.

## Tips
- Your understanding and application of React and TypeScript are essential. Focus on showcasing this.
- Clean, modular, and well-commented code is always appreciated.
- Feel free to be creative. Any additional features or innovative ideas you bring to the table are a plus!