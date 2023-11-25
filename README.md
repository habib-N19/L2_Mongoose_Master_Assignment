# This application was built with TypeScript, mongoose, express , zod, with modular pattern.

## Installation Guide for `assignment_2_mongoose_master`

## Prerequisites

Before installing the application, ensure that you have the following prerequisites installed on your system:

- Node.js (LTS version recommended)
- npm (Node Package Manager) or equivalent such as yarn
- Git (for version control and to clone the repository)

## Installation Steps

1. **Clone the Repository**

   Open a terminal (command line interface) and use the following command to clone the repository to your local machine:

   ```sh
   git clone https://github.com/habib-N19/L2_Mongoose_Master_Assignment
   ```

2. **Navigate to the Project Directory**

   Once the repository is cloned, navigate to the project directory:

   ```sh
   cd assignment_2_mongoose_master
   ```

3. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```sh
   npm install
   ```

   This will install all the dependencies listed in the `package.json` file.

4. **Configure Environment Variables**

   You may need to create a `.env` file at the root of your project and define any necessary environment variables such as database URI, port number, etc.
   Or You can rename the `.env.example` file and put your environment variables.

5. **Build the Project**

   If the project is written in TypeScript and needs to be compiled to JavaScript, use the following command to build:

   ```sh
   npm run build
   ```

   This command will compile the TypeScript files based on your `tsconfig.json` settings.

6. **Start the Application**

   To start the application in development mode with hot reloading, use:

   ```sh
   npm run start:dev
   ```

   For production, you can start the built application with:

   ```sh
   npm run start:prod
   ```

## Additional Commands

- **Linting**: To check for linting issues, use:

  ```sh
  npm run lint
  ```

  To automatically fix linting issues:

  ```sh
  npm run lint:fix
  ```

- **Formatting**: To format your code with Prettier:

  ```sh
  npm run prettier
  ```

  To automatically format files:

  ```sh
  npm run prettier:fix
  ```

- **Deploying**
  You can deploy the application on vercel using vercel cli or use other platform. You can follow this article on [How to Deploy an Express API to Vercel](https://shadowsmith.com/thoughts/how-to-deploy-an-express-api-to-vercel)

## Testing the API

To test the API endpoints, you can use Postman. Click on the button below to run the collection in Postman:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/29772391-94ac3c27-1f38-4ad9-b97f-c0ca18fb1f1a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D29772391-94ac3c27-1f38-4ad9-b97f-c0ca18fb1f1a%26entityType%3Dcollection%26workspaceId%3Db244064f-bb1b-46e1-8dae-a7ee24514e9a)

This will take you to Postman and allow you to run and test the API endpoints specified in the collection.

Congratulations! You have successfully set up the `assignment_2_mongoose_master` application. Enjoy coding and testing your API.
