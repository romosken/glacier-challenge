
-----

# Robot Pick Event Logger: Running the Applications

This document explains how to get the Robot Pick Event Logger up and running. This application consists of a **FastAPI backend** and a **React frontend**, working together to simulate, log, and display robot pick events.

-----

## 1\. Prerequisites

Before you start, make sure you have the following installed on your system:

  * **Python 3.8+**: Necessary for the FastAPI backend.
  * **Node.js and npm**: Required for the React frontend. You can download them from [nodejs.org](https://nodejs.org/).

-----

## 2\. Running the Backend (FastAPI)

The backend handles the logging and retrieval of robot pick events.

### 2.1. Navigate to the Backend Directory

Open your terminal or command prompt and change your current directory to the src folder where the backend files (e.g., `main.py` and `requirements.txt`) are located.

### 2.2. Activate the venv

if using Linux, just activate the venv for the application using the following command in the teminal:

```bash
source .venv/bin/activate
```

If using Windows, you'll need to create a new venv:
```bash
python3 -m venv .newvenv
```

Then activate it
```bash
newvenv\Scripts\activate.bat
```

Then, run the following command:

```bash
pip install -r requirements.txt
```

### 2.3. Start the Backend Server

Once the dependencies are installed, you can start the FastAPI application using Uvicorn:

```bash
uvicorn main:app --reload
```

  * `main`: Refers to your Python file (e.g., `main.py`).
  * `app`: Refers to the FastAPI application instance (e.g., `app = FastAPI()`).
  * `--reload`: This is optional but highly recommended for development. It automatically restarts the server when you make changes to your code.

Your backend API will now be running, typically accessible at **`http://127.0.0.1:8000`**.

-----

## 3\. Running the Frontend (React)

The frontend provides the user interface to interact with the backend.

### 3.1. Navigate to the Frontend Directory

Open a **new terminal or command prompt window** (keep your backend terminal running) and change your current directory to your React project folder (e.g., `frontend/robot-pick-frontend`). This folder should contain `package.json` and the `src` directory.

### 3.2. Install Node.js Dependencies

Install the required Node.js packages for the React application:

```bash
npm install
# Or, if you use yarn:
# yarn install
```

### 3.3. Start the Frontend Development Server

After installing the dependencies, you can start the React development server:

```bash
npm start
# Or, if you use yarn:
# yarn start
```

This command will usually open your default web browser to **`http://localhost:3000`**, where you'll see the Robot Pick Event Logger interface.

-----

## 4\. Usage

With both the backend and frontend running:

1.  Open your web browser and go to **`http://localhost:3000`**.
2.  **Simulate Pick Events**: Click the "**Simulate Random Pick**" button to send new pick events to the backend. The event log on the page will automatically update.
3.  **Filter Events**: Use the "**Filter by Robot ID**" input field to dynamically narrow down the displayed events based on the robot ID.

You're all set to monitor your simulated robot pick events\!