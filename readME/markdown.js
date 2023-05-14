// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
  }
  
  // Function that returns the license link and returns an empty string if there's no license
  function licenseLink(license) {
    if (license !== 'None') {
      return `\n  * [License](#license)\n`;
    }
    return '';
  }
  
  // Function that returns the license section of README and returns just the title if there's no license
  function licenseSection(license) {
    if (license !== 'None') {
      return `## License
  
  This project is licensed under the ${license} License.`;
    }
    return '';
  }
  
  // Function to generate README content
  function generateMarkdown(data) {
    return `# ${data.title}
  ${licenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)
  ${licenseLink(data.license)}
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Contact Information](#contact-information)
  
  ## Installation
  
  To install dependencies run the following command in the terminal:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ${licenseSection(data.license)}
    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command in the terminal:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Contact Information
  
  For repo questions or more info, open an issue or contact me directly at ${data.email}. 
  
  More of my work available at https://github.com/${data.github}/`;

  }
  
  module.exports = generateMarkdown;