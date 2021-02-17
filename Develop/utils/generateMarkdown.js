// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ![badge](https://img.shields.io/badge/License-${data.license}-brightgreen)
 ## The Repository
 ${data.description}
 
   ## Table of Contents
   ### * [Installation](#installation)
   ### * [Usage](#usage)
   ### * [Credits](#credits)
   ### * [License](#license)
 
 ## Installation
 ${data.installation}
 ## Usage
 ${data.usage}

 * ${data.usage1}
 ![index](https://github.com/Koffidanh/readmegenerator/blob/main/Develop/images/index_js.png)
 * ${data.usage2}
 ![open terminal](https://github.com/Koffidanh/readmegenerator/blob/main/Develop/images/openterminal.png)
 * ${data.usage3}
 ![install inquirer](https://github.com/Koffidanh/readmegenerator/blob/main/Develop/images/npmi.png)
 * ${data.usage4}
 ![run code](https://github.com/Koffidanh/readmegenerator/blob/main/Develop/images/runcode.png)
 * ${data.usage5}
 ![answer questions](https://github.com/Koffidanh/readmegenerator/blob/main/Develop/images/questions.png)

 ## Contribution
 Collaborators: 
 * Name: ${data.collaborator1}
 * GitHub: ![github](https://github.com/${data.github1})

 ## Tests
  No test required.
## Video demo
Here is the demo video.
![demo](https://github.com/Koffidanh/readmegenerator/blob/main/Develop/images/demo.gif)
 ## License
 Licensed under the ${data.license}.
  
`};


module.exports = generateMarkdown;
