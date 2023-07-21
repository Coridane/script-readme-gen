// These are the packages that we need. Inquirer for the questions,
// generateMarkdown for the HTML, and fs to write the file.
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// This is the array of questions. Added requirement for the title because
// it makes sense that the user would want to click past stuff that they either
// don't want to define now or ever, but the title is important.
// Also broke the description into different paragraphs - one for the function
// of the app, another for the technologies, another for the challenges, and
// the last one for future plans. All of that will be combined in the markdown.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of this project (required)?",        
        validate: function(message) {
            pass = message !== "";
            if (pass) {
                return true;                
            }
            return console.log("Invalid entry. Try again.")
        }
    },
    {
        type: "input",
        name: "description.function",
        message: "What does the application do?",
        suffix: " (Start by typing: The function of this application is) ",        
    },
    {
        type: "input",
        name: "description.technologies",
        message: "What technologies were used?",
        suffix: " (Start by typing: The technologies used in the development or operation of this application include) ",
        
    },
    {
        type: "input",
        name: "description.challenges",
        message: "What were the challenges (if any come to mind)?",
        suffix: " (Start by typing: The challenges of developing this application include) ",        
    },
    {
        type: "input",
        name: "description.future",
        message: "What are future changes (if any are slated yet)?",
        suffix: " (Start by typing: Future development of this application will introduce) ",
        
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install this application?",        
    },
    {
        type: "input",
        name: "usage",
        message: "What steps are required to use this application?",        
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to this (excluding the author)?",
        default: "Research was mostly through articles on GeeksforGeeks which helped a lot with this project."
    },
    {
        type: "input",
        name: "test",
        message: "What steps were taken to test this application?",        
    },
    {
        type: "list",
        name: "license",
        message: "Select a license",
        choices: ["None", "Apache 2.0", "GPL v3", "MIT", "BSD 2", "BSD 3", "Boost 1.0", "CC0", "Eclipse 2.0", "AGPL v3", "GPL v2", "LGPL v3", "MPL 2.0", "Unlicense"],
    },
    {
        type: "input",
        name: "username",
        message: "What is your Git Hub user name?",
        default: "Coridane",
    },
    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?",
        default: "danielmarkwilliams@gmail.com"
    },    
];

// This is the writeToFile function which, if there are no issues, creates a
// file called README.md and displays a success message.
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./README.md", data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve({
                ok: true,
                message: console.log("A README file was carefully crafted around your answers. Have a look!")                
            });
        })
    })
}

// This is the init function which is returning all of the questions above,
// using the Inquirer module and the prompt method.

const init = () => {
    return inquirer.prompt(questions);    
}

// This is where our journey begins. We call the init function and, if there
// are no issues, we call the generateMarkdown function, in the generateMarkdown.js,
// which feeds the answers into a pre-formatted body, and then the writeToFile function,
// to write that HTML to a file. If there are issues then we perform the .catch.

init()
.then(input => {
    return generateMarkdown(input);
})
.then(file => {
    return writeToFile(file);
})
.catch(err => {    
    console.log(err);
})
