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
 Collaborator's name: ${data.collaborator1}
 GitHub: ![github](https://github.com/${data.github1})
//  Collaborator's name: ${data.collaborator2}
//  GitHub: ![github](https://github.com/${data.github2})
//  Collaborator's name: ${data.collaborator3}
//  GitHub: ![github](https://github.com/${data.github3})
//  Collaborator's name: ${data.collaborator4}
//  GitHub: ![github](https://github.com/${data.github4})
//  Collaborator's name: ${data.collaborator5}
//  GitHub: ![github](https://github.com/${data.github5})
 ## License
 Licensed under the ${data.license}.
  
`};


module.exports = generateMarkdown;
