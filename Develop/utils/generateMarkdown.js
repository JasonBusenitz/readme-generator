// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  switch (data.license) {
    case 'MIT License':
      '## MIT License';
      break;
    case 'Apache License 2.0':
      '## Apache License 2.0';
      break;
    case 'GNU General Public License (GPL) v3':
      '## GNU General Public License (GPL) v3';
      break;
    case 'Mozilla Public License 2.0':
      ' ## Mozilla Public License 2.0';
      break;
    case 'BSD 3-Clause License':
      '## BSD 3-Clause License';
      break;
    default:
      '';
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data.license) {
    case 'MIT License':
      ' https://opensource.org/license/mit';
      break;
    case 'Apache License 2.0':
      ' https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'GNU General Public License (GPL) v3':
      'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'Mozilla Public License 2.0':
      'https://www.mozilla.org/en-US/MPL/2.0/';
      break;
    case 'BSD 3-Clause License':
      'https://opensource.org/license/bsd-3-clause';
      break;
    default:
      '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}

${renderLicenseSection(data.license)}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[Credits]{#credits}
-[Contribution]{#How can you Contribute?}
-[Tests]{#tests}
-[Questions]{#questions}

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
Email: ${data.email}
Git Hub: ${data.gitHUbUserName}
${data.gitHUbLink}
`;
}

export default generateMarkdown;
