****Agent Chat Application****
This project allows you to create a custom chat agent using the usdk platform. Below are the instructions to get started and run the application.

****Prerequisites****
**Node.js (version >= 21)**
**USDK Command Line Tool**

****Steps to Set Up and Run****
**1. Install Node.js (Version >= 21)**
To use the usdk platform, ensure that you have Node.js installed with a version greater than or equal to 21.

**Steps to Install Node.js:**
Go to the official Node.js website: https://nodejs.org/
Download and install the latest version of Node.js (>= 21).
After installing Node.js, verify the installation by running the following command in your terminal:
`node -v`
Ensure that the output shows a version that is **greater than or equal to 21.**

Example:
`v21.3.0`

**2. Install USDK Command Line Tool**
Install the USDK command-line tool globally using npm. Run the following command in your terminal:
`npm install -g usdk`
This will install the usdk tool globally on your system.

**3. Log In Using USDK**
Once the usdk tool is installed, log in to your account using the following command:
`usdk login`
You will be prompted to enter your credentials. Follow the instructions to authenticate and log in.

**4. Create a New Project Folder**
To create a new project for your agent, use the following command:
`usdk create`
This will create a folder with all the necessary files and configurations for your agent. You can then navigate to this folder to start developing your agent.

**5. Run Your Agent Chat**
To run the chat agent, use the following command:
`usdk chat`

This will start the agent and allow you to interact with it. Make sure that you are inside the correct directory where the agent files are located.

**6. Navigate to the Agents Directory**
To run the chat agent, you need to navigate to the agents directory first. Use the cd command to navigate to the correct folder inside the agents directory.

For example:
`cd agents/AOjbMHyl `
Then, you can start the agent using:

`usdk chat`

**7. Troubleshooting**
If you encounter any issues, ensure the following:
You are using the correct Node.js version (>= 21).
All dependencies are installed correctly.
You are in the correct directory before running the usdk chat command.

**Additional Notes**
Ensure that the agents folder contains all the required files and configurations.
If the agent is not running as expected, check the logs or console for any error messages.
For additional customization and usage, refer to the official USDK documentation.
