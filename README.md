# Blockmaster

Revive an iconic movie rental store with a modern twist—Blockmaster returns as a streaming platform!

This application is built using **ReactJS + Redux** and utilizes Firebase as a backend-as-a-service. The UI is designed with **Chakra UI**.

You can check out the live deployment [here](https://lewiscontreras.github.io/blockmaster-movies/).

## Requirements

Ensure you have **Node.js v12** and **npm** installed to run this project without compatibility issues.

## How to Get Started

### Clone the Project

Use the following command to clone the repository:

```bash
$ git clone https://github.com/LewisContreras/blockmaster-movies.git
```

Once cloned, navigate to the project directory:

```bash
$ cd blockmaster-movies
```

### Install Dependencies

Run the following command to install the necessary dependencies:

```bash
$ npm install
```

### Start the Project

To start the project in a local development server, use:

```bash
$ npm start
```

## Features

- **Authentication**: Login is implemented using Firebase Authentication.
- **Form Handling**: Forms are managed with **Formik** and validated using **Yup**.
- **Infinite Scrolling**: The application uses an observer to load movies progressively, avoiding large fetches.
- **Admin Module**: Includes functionality for administrators to create, edit, update, and delete movies.
- **State Management**: Data is fetched only once from the Firebase database and is locally cached to minimize unnecessary API calls.
- **Watchlist**: Users can save movies to a "watch later" list.

## Project Views

### Mobile

![Mobile View 1](https://i.imgur.com/rwfsmdJ.png)
![Mobile View 2](https://i.imgur.com/oyit5XV.png)

### Desktop

![Desktop View 1](https://i.imgur.com/jvChYsG.png)

## Notes

- The project is designed to run on **Node.js v12**. Using other versions might cause unexpected issues.
- Ensure you have a Firebase project set up with the appropriate configurations to run the application.

---

Feel free to contribute or report any issues by opening a ticket in the repository!



