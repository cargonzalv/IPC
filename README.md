# Payment Component

[![node](https://img.shields.io/badge/node-v20.10.X-success.svg)](https://nodejs.dev/)
[![npm](https://img.shields.io/badge/npm-v10.2.X-yellow.svg)](https://www.npmjs.com/)

Application that allows merchants to process payments with final users with low-code/no-code implementations

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Quickstart](#quickstart)
- [Contributing](#contributing)
- [Further reading / Useful links](#further-reading--useful-links)
- [Tools implemented](#tools-implemented)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the specified node.js version
- You have installed the specified npm version
- You have configured your [GitHub access token](https://github.com/settings/tokens)

## Installation

To install this application, follow these steps:

Linux and macOS:

```bash
export NPM_TOKEN=<your_github_token>
npm ci
```

Windows:

```bash
$Env:<NPM_TOKEN> = "<your_github_token>"
npm ci
```

## Using Payment Component in Playground Mode

To use this application in playground mode follow these steps:

In a terminal run this command to watch files changes

```bash
npm run dev
```

Access to the application via
`https://localhost:5173`

## Using Payment Component in local env

Use the same steps from "Using Payment Component in Playground Mode", then you will need fo to

`src/app/features/playground/components/constants.ts`

you can set the configuration in the iframeConfig object as you wish but don't forget to set the
`isPlayground` flag to false

## Using Payment Component in embbeded mode as a real merchant

To use this application follow these steps:

In a terminal run this command to watch files changes

```bash
npm run build-stg
```

This will create a version in the dist folder with the corresponding version tag,
you will need to setup a local server for serve the js.

First, make sure that you have key.pem and cert.pem files. You can generate them using this command:

```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

You will be prompted with a few questions after entering the command.
Use 127.0.0.1 as value for "Common name" if you want to be able to install the certificate in your OS's root certificate store or browser so that it is trusted.
This generates a cert-key pair and it will be valid for roughly 10 years (3650 days to be exact).

Then you need to run the server with -S for enabling SSL and -C for your certificate file:

```bash
http-server -S -C cert.pem -o
```

You can test component or tokenizer by modifying the html (to point to the version you just generated)
and the init-iframe.js (to update the configuration you want to pull) inside the "examples/embbeded" and "examples/tokenizer" folders.

Access to the component via

```
https://127.0.0.1:8080/examples/embbeded/
```

or tokenizer via

```
https://127.0.0.1:8080/examples/tokenizer/
```

## Contributing

To contribute to <project_name>, follow these steps:

1. Create a branch: `git checkout -b <branch_name>`.
2. Make your changes and commit them: `git commit -m '<commit_message>'`
3. Push to the original branch: `git push origin <project_name>/<location>`
4. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Further reading / Useful links

- [Tutorials](https://developers.conekta.com/page/tutoriales)
- [Testing kit](https://developers.conekta.com/page/pruebas)

## Tools implemented

### Conventional commits

Conventional Commits defines a standard format commit messages.

Structure:
`<type>[optional scope]: <description> linea vacia [optional body] linea vacia [optional footer(s)]`

- The `<type>` field communicates the intent of the change that was made

  - feat: when new functionality is added.
  - fix: when an error is fixed.
  - chore: Routine tasks that are not specific to a feature or a bug, such as installing a dependency.
  - test: if we add or fix tests.
  - docs: when only the documentation is modified.
  - build: when the change affects the build of the project.
  - refactor: A code change that does not fix bugs or add functionality, but improves the code.
  - revert: Whether the commit reverts a previous commit. The hash of the commit being rolled back should be indicated.

- The `scope` field is optional and is used to tag a package or module of the product that the commit affects.
- The `<description>` field is a very short summary of the intent or content included in the comment.
- Body if necessary, additional details in the commit can be included in the body of the commit message, should focus more on explaining why a change was made rather than how.

- Footers are optional, but can provide additional metadata for a commit; be used to alert readers and tools to significant changes such as breaking changes; or can link commits to issues or pull requests.Footers are written using the format:

```
<token>: <value>
```

- The value for a BREAKING CHANGE footer is a description of the breaking change to be included in the product’s change log and release notes.

- Examples:

  - commit without body
    ```
    fix: array parsing issue when multiple spaces were contained in string
    ```
  - commit with scope
    ```
    feat(tokenizer): add 1 click payment
    ```
  - commit with body and footer breaking changes

    ```
    feat(tokenizer): add 1 click payment

    take default payment config in button to pay, refers to JIRA-11

    BREAKING CHANGES: payment config is mandatory field
    ```

Check the [convetional commits documentation](https://www.conventionalcommits.org/en/v1.0.0/)

### Git Hooks

Git hooks are scripts that Git will run before or after some actions you might take in your repo like creating a new commit or pushing code to a repository.

- pre-commit: Run before commit

- commit-msg: Run after a confirmation message is entered, it is the appropriate place to warn developers that their message does not meet their team's standards.

Check the [git hooks documentation](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

### Husky

Tool that enables us to set up Git hooks quickly

Check the [husky documentation](https://typicode.github.io/husky/#/?id=manual)

### Commitlint

Checks if its confirmation messages comply with the conventional commits format

GitHub documentation on [commitlint](https://commitlint.js.org/#/)

### Lint-staged

Package which allows you to run hooks against only the files that are staged, to avoid linting all your code or running the entire test suite of your repo each time you make a new commit.

Which you can read more about in the oficial [docs](https://github.com/okonet/lint-staged#configuration).
