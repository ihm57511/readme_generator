
function renderLicenseBadge(license) {
  return `![readmeLicense](https://img.shields.io/badge/license-${license}-red.svg)`
}

function renderLicenseLink(license) {
  if (`${license}` === 'MIT') {
    return `Licensed under the **[MIT](https://github.com/git/git-scm.com/blob/master/MIT-LICENSE.txt)** license.  `
  } else if (`${license}` === 'BSD3') {
    return `Licensed under the **[BSD3](https://opensource.org/licenses/BSD-3-Clause)** license.  `
  } else if (`${license}` === 'APACHE2.0') {
    return `Licensed under the **[APACHE2.0](https://www.apache.org/licenses/LICENSE-2.0)** license.  `
  } else return `This project is not licensed.  `
}

function renderTableOfCont() {
  return `[Installation](##Installation)  
  [Usage](##Usage)  
  [License](##License)  
  [Contributiing](##Contributing)  
  [Tests](##Tests)  
  [Questions](##Questions)
  `
}

function renderQuestions(email, gitHub) {
  return `I can be reached at ${email} for further information.  
  Please feel free to also check me out at https://github.com/${gitHub}`
}
function renderData(data) {
  return `${data}`
}

function generateMarkdown(data) {
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)  }  
  ## Description  
  ${renderData(data.description)  }  
  ## Table of Contents   
  ${renderTableOfCont()  }  
  ## Installation  
  ${renderData(data.installation)  }  
  ## Usage  
  ${renderData(data.usage)  }  
  ## License   
  ${renderLicenseLink(data.license)  }  
  ## Contributing  
  ${renderData(data.contribute)  }  
  ## Tests   
  ${renderData(data.testing)  }  
  ## Questions  
  ${renderQuestions(data.email, data.gitHub) }
`;
}

module.exports = generateMarkdown;