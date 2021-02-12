// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ![badge](https://img.shields.io/badge/License-${data.license}-brightgreen)
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

 ## Tests
  No test required.
## Video demo
Here is the demo video.
 ## License
 Licensed under the ${data.license}.
  
`};


module.exports = generateMarkdown;
