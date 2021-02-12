// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
 ## The Repository
 ${data.description}
 
   ## Table of Contents
   ### [Installation](#installation)
   ### [Usage](#usage)
   ### [Credits](#credits)
   ### [License](#license)
 
 ## Installation
 ${data.installation}
 ## Usage
 ${data.usage}
 ## Contribution
 Collaborators: 
 * Name: ${data.collaborator1}
 * GitHub: ![github](https://github.com/${data.github1})

 ## License
 Licensed under the ${data.license}.
  
`};


module.exports = generateMarkdown;
