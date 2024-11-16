# Agent Chat Application

This project allows you to create a custom chat agent using the **USDK** platform. Follow the instructions below to set up and run the agent.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation Steps](#installation-steps)
    - [Install Node.js](#1-install-nodejs)
    - [Install USDK Command Line Tool](#2-install-usdk-command-line-tool)
3. [Setting Up the Project](#setting-up-the-project)
    - [Log In to USDK](#3-log-in-to-usdk)
    - [Create a New Project](#4-create-a-new-project)
4. [Running the Chat Agent](#running-the-chat-agent)
    - [Navigate to the Agent Directory](#5-navigate-to-the-agent-directory)
    - [Start the Agent](#6-start-the-agent)
5. [Troubleshooting](#troubleshooting)
6. [Additional Notes](#additional-notes)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version >= 21)
- **USDK Command Line Tool**

## Installation Steps

### 1. Install Node.js

To use the **USDK** platform, you need to have **Node.js** version **21** or higher.

#### Steps to Install Node.js:
1. Go to the official **Node.js** website: [https://nodejs.org/](https://nodejs.org/)
2. Download and install the latest version (>= 21) for your system.

After installation, confirm that **Node.js** is installed by running the following command in your terminal:

```bash
node -v
```
You should see a version number that is **21 or higher**. For example:

```bash
v21.3.0
```

# 2. Install USDK Command Line Tool

To use the **USDK** platform for creating and managing agents, you need to install the **USDK** command-line tool globally on your system.

## Steps to Install the USDK Command Line Tool

1. Open your terminal.

2. Run the following command to install **USDK** globally using **npm**:

```bash
   npm install -g usdk
```
  


# Setting Up the Project

## 3. Log In to USDK

Once the **USDK** tool is installed, you need to log in using your **USDK** credentials.

### Steps to Log In:
1. Open your terminal.
2. Run the following command to log in to **USDK**:

```bash
   usdk login
```

## 4. Create a New Project

After logging in, create a new agent project using the following command:

```bash
   usdk create
```
This will generate the necessary files and folders for your agent. You can now modify and customize these files as needed.



# Running the Chat Agent

## 5. Navigate to the Agent Directory

Before running the agent, make sure you're in the correct directory. Use the `cd` command to navigate to the agents folder, where the **agent** files are located. For example:

```bash
   cd agents/YourAgentDirectory
```

Replace **YourAgentDirectory** with the name of the directory created during the project setup.

## 6. Start the Agent

Once you're inside the correct directory, run the following command to start the chat agent:

```bash
   usdk chat
```
This will initiate the agent and allow you to interact with it via the terminal.



# Troubleshooting

If you encounter any issues during setup or while running the agent, consider the following:

1. **Ensure Node.js is Installed Correctly**  
   Make sure that **Node.js** is correctly installed and that its version is **>= 21**. You can check this by running the following command:

   ```bash
   node -v
   ```
   Check the terminal for any error messages that might provide clues to fix the issue.


   
# Additional Notes

- **Correct Directory**  
  You must be inside the correct directory (where the agent files are located) when running the `usdk chat` command. If you're not in the right directory, the command will not work as expected.

- **Customization**  
  If you're customizing the agent, you can modify the agent files to suit your needs. This includes adjusting the agent's responses and adding new functionalities. Customizing the agent allows you to tailor its behavior to your specific use case.

- **USDK Documentation**  
  For more information about USDK and its additional features, refer to the official [USDK Documentation](https://docs.upstreet.ai/install). This documentation provides in-depth details about the platform and how you can utilize all its capabilities to create and manage agents effectively.


