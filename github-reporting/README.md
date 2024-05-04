## A Cypress project that tests and uploads artifacts

### Packages and Frameworks
---
- [ ] [Cypress](https://www.cypress.io/) 
- [ ] [@badeball/cypress-cucumber-preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor) 
- [ ] [multiple-cucumber-html-reporter](https://www.cypress.io/) 
- [ ] [cypress-mailslurp](https://www.cypress.io/) 
- [ ] [@faker-js/faker](https://www.cypress.io/) 

### Installation Guide
---
1. Clone the repository: `git clone` command
2. Navigate into the cloned repository
3. Run `npm ci` to execute a clean install via the `package-lock.json`. This ensures all dependencies are installed with the specified versions. Or run `npm i` or `npm install` to execute an installation using the `package.json`

### Constraints
---
- To run locally, signup on [Mailslurp](https://www.mailslurp.com) to get a API Key
- Copy the created key and create a new `cypress.env.json` file to paste the key like this:
> {
    "MAILSLURP_API_KEY": "<paste-key-here>"
}

### Contributor
---
- [ ] [Ademola Bhadmus](https://www.bhadmusautomates.com)
- [ ] [LinkedIn](https://www.linkedin.com/in/ademola-bhadmus)