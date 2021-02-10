// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.licenses}-brightgreen)<br />
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
 ${data.collaborators}

 ## License
 Licensed under the ${data.license}.
  
`;
}

module.exports = generateMarkdown;
