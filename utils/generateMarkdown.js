// If a license is selected, this creates an image and the template literal is
// pulling in the license link.

function renderLicenseBadge(license) {  
  
  if(license == "Apache 2.0") {        
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${renderLicenseLink(license)})`;
  }
      
  if(license == "GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "BSD 2") {
    return `[![License: BSD 2](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "BSD 3") {
    return `[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "Boost 1.0") {
    return `[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "CC0") {
    return `[![License: CC0](https://licensebuttons.net/l/zero/1.0/80x15.png)](${renderLicenseLink(license)})`;
  }

  if(license == "Eclipse 2.0") {
    return `[![License: Eclipse 2.0](https://img.shields.io/badge/License-EPL_2.0-red.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "AGPL v3") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "GPL v2") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "LGPL v3") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "MPL 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${renderLicenseLink(license)})`;
  }

  if(license == "None") {
    return "";
  }
}
 
// If a license is selected, this creates a link for the badge.

function renderLicenseLink(license) {

  if(license == "Apache 2.0") {        
    return "https://opensource.org/licenses/Apache-2.0";
  }
      
  if(license == "GPL v3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  }

  if(license == "MIT") {
    return "https://opensource.org/licenses/MIT";
  }

  if(license == "BSD 2") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  }

  if(license == "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }

  if(license == "Boost 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt";
  }

  if(license == "CC0") {
    return "http://creativecommons.org/publicdomain/zero/1.0";
  }

  if(license == "Eclipse 2.0") {
    return "https://opensource.org/licenses/EPL-2.0";
  }

  if(license == "AGPL v3") {
    return "https://www.gnu.org/licenses/agpl-3.0";
  }

  if(license == "GPL v2") {
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  }

  if(license == "LGPL v3") {
    return "https://www.gnu.org/licenses/lgpl-3.0";
  }

  if(license == "MPL 2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  }

  if(license == "Unlicense") {
    return "https://choosealicense.com/licenses/unlicense/";
  }

  if(license !== "None") {    
    return `\n * [License](#license)\n`;
  }
    return "";  

}

// If a license is selected, this creates a License section, and content
// which indicates the license of this  project.

function renderLicenseSection(license) {
  if(license !== "None") {
    return `## License

    This project is licensed under the ${license} license.`;
  }
  return "";
}

// If a license is selected, this creates a TOC entry for License.

function renderLicenseTOC(license) {
  if(license !== "None") {
    return "* [License](#license)"
  }
  return "";
}

// This is the generateMarkdown function that feeds the answers into a
// pre-formatted body.

function generateMarkdown(data) {
  return `
  
  # ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description.function}

  ${data.description.technologies}
  
  ${data.description.challenges}
    
  ${data.description.future}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseTOC(data.license)}

  * [Contributors](#contributors)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors

  ${data.contributors}
  
  ## Tests

  ${data.test}

  ## Questions

  If you have any questions about this app, please send them to ${data.email}.

  You can explore my work by going to [${data.username}](https://github.com/${data.username}/).

`;
}

// This is an object in the Node.js file. By declaring this, we are intending
// to export this information to a file.

module.exports = generateMarkdown;
