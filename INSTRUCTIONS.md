# Node Express Sequelize

### Overview

In this assignment, you'll create a burger logger with MySQL, Node, Express, and Sequelize. Be sure to follow the MVC design pattern; use Node and Sequelize to query and route data in your app and your public folder to store front-end code.

### Read This

When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

### Important

- **This assignment must be deployed.** Be sure to utilize the [Sequelize Heroku Deployment Guide](../../03-Supplemental/SequelizeDBDeploy.md) in order to deploy your assignment.

### Before You Begin

- Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

- Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

- Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

- Your app will store every burger in a database, whether devoured or not.

- [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

  **please note that this is a slightly modified version and we are not using handlebars**

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

- Committing often is a signal to employers that you are actively working on your code and learning.

  - We use the mantra “commit early and often.” This means that when you write code that works, add it and commit it!

  - Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

- Be clear and descriptive in your commit messaging.

  - When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

- We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

- **This assignment must be deployed.** \* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

## Instructions

#### App Setup

1. Create a GitHub repo called `burger` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Create a server.js file.

5. Install MySQL and sequelize npm packages : `npm install mysql2 sequelize`.

6. Require the following npm packages inside of the server.js file:
   - express

#### DB Setup

1.  Initialize your config: `sequelize init:config`

2.  Edit `config.js` with your connection information for `development` and `test`.

3.  Initialize the models folder: `sequelize init:models`

4.  Inside of the new models folder, create a file called `burger.js` and create your burger model.
5.  **Optional**

          Create a `seeders` folder and inside of that folder, create `seeds.js`
          In `seeds.js`, create code that will "seed" your database with data using sequelize

#### Controller setup

1. Inside your `burger` directory, create a folder named `controllers`.

2. In `controllers`, create the `burgers_controller.js` file.

3. Inside the `burgers_controller.js` file, import the following:

   - Express
   - `models`

4. Create the `router` for the app, and export the `router` at the end of your file.

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   └── config.json
│ 
├── controllers
│   └── burgers_controller.js
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │    ├── css
│   │    │   └── burger_style.css
│   │    ├── img
│   │    │   └── burger.png
│   │    └── js
│   │        └── burger.js
│   │
│   └── index.html
│
└── server.js
```

### Reminder: Submission on BCS

- Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

---

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.

---

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

---

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

- [About READMEs](https://help.github.com/articles/about-readmes/)

- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

---

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

---

### One More Thing

This is a really tough homework assignment, but we want you to put in your best effort to finish it.

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

### Reminder

When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

**Good Luck!**
