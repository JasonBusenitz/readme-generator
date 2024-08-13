// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  switch (data) {
    case 'MIT License':
      return 'MIT License';
    case 'Apache License 2.0':
      return 'Apache License 2.0';
    case 'GNU General Public License (GPL) v3':
      return 'GNU General Public License (GPL) v3';
    case 'Mozilla Public License 2.0':
      return 'Mozilla Public License 2.0';
    case 'BSD 3-Clause License':
      return 'BSD 3-Clause License';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(data) {

  switch (data) {
    case 'MIT License':
      return 'https://opensource.org/license/mit';
    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'GNU General Public License (GPL) v3':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'Mozilla Public License 2.0':
      return 'https://www.mozilla.org/en-US/MPL/2.0/';
    case 'BSD 3-Clause License':
      return 'https://opensource.org/license/bsd-3-clause';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

  switch (data) {
    case 'None':
      return [];
    default:
      return `
  ${renderLicenseBadge(data)}
  
 More info on ${renderLicenseBadge(data)} at: ${renderLicenseLink(data)}.
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}

${renderLicenseSection(data.license)}


## Table of Contents
>* [Installation](#installation)
>* [Usage](#usage)
>* [Credits](#credits)
>* [Contribution](#how-can-you-contribute?)
>* [Tests](#tests)
>* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credits}

## How can you Contribute?
${data.contribution}

## Tests
${data.tests}

## Questions

 If you have any questions feel free to reach out to me!

>* Email: ${data.email}

>* Git Hub: ${data.gitHUbUserName}

>* Git Hub Repo Link: ${data.gitHUbLink}
`;
}

export default generateMarkdown;
