// function to generate markdown for README
function generateMarkdown (data) {
    return `
  # ${data.projectTitle}
  ![badge](https://img.shields.io/badge/license-${JSON.stringify(data.licenses)}-brightgreen)<br />
 ## The Repository
 ${data.description}
 ## ${data.contents} {
   ## Table of Contents
   ### [Installation](#installation)
   ### [Usage](#usage)
   ### [Credits](#credits)
   ### [License](#license)
 },
 ## Installation
 ${data.installation}
 ## Usage
 ${data.usage}
 ## Contribution
 Collaborator's name: ${data.collaborators}
 GitHub: ![github](https://github.com/${data.github})
 ## License
 Licensed under the ${data.license}.
  
`};


module.exports = generateMarkdown;
