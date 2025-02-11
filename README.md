# Seattle Computing Resourcing

## Contribution Guide
You must have [Node.js](https://nodejs.org/en/download/) installed to follow this guide.

First, create a fork of our repository. This can be done by heading over to our main repository page [here](https://github.com/Seattle-Computing-Resourcing/scr-learning), clicking the "Fork" button, and then click "Create a new fork." You can modify your code there, pushing changes to your forked repository. 

Once you fork the repository, clone it onto your machine. If you are unsure about how to do this, feel free to search it up.

Open the folder where your repository is and enter the following command to install dependencies: 
```
npm install
```

You can test code by running these commands.
```
npm run docs:build
npm run docs:preview
```

A build site will be made at `https://localhost:4173/`, where you can preview your changes.

Alternatively, you can run
```
npm run docs:dev
```
But it sometimes doesn't display errors in the build site, making it not as reliable.

When you believe you are done, make a pull request on [this page](https://github.com/Seattle-Computing-Resourcing/scr-learning/pulls). 
Our development team will discuss your changes with you shortly after.