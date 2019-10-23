# Contributing

We would love for you to contribute to **Linearicons** and help us make this even better! Start reading this document to see it is not difficult as you might have imagined.


## Table of Contents

- [Open an Issue](#open-an-issue)
- [Submit a Pull Request](#submit-a-pull-request)
- [Style Guide](#style-guide)
- [Test](#test)
- [Code of Conduct](#code-of-conduct)
- [License](#license)


## Open an Issue

[Open an Issue](../../../issues/new) to report any problems or improvements. When necessary, use some online service like a [JS Bin](https://jsbin.com), [JSFiddle](https://jsfiddle.net/), [Codepen](http://codepen.io/), to show the problem. Be sure to include some description to explain the problem.


## Submit a Pull Request

To submit a new feature, make sure that changes are done to the source code. [Follow our style guide](#style-guide) and do not forget the tests.

Try to solve a problem for each pull request, this increases the chances of acceptance. When in doubt, open a [new issue](#open-an-issue) so we can answer you. Look existing issues for ideas or to see if a similar issue has already been submitted.

1. Fork the Github repo: `git clone https://github.com/cjpatoilo/linearicons.git`
1. Create a new branch: `git checkout -b issuenumber-feature-name`
1. Commit your changes: `git commit -m 'issuenumber-feature-name'`
1. Push to the branch: `git push origin my-feature-name`
1. Submit a pull request!


## Style Guide

Look at how the code is being maintained, we must always be consistent. We try to follow best practices as much as possible. In addition, here are some tips you should follow:

**Linearicons** uses [ESLint](http://eslint.org/), the pluggable linting utility for JavaScript.

- No semicolons.
- No unused variables.
- Use tab for indentation.
- Use `===` instead of `==`.
- Use single quotes for strings except to avoid escaping.
- Add a space after keywords.
- Add a space before a function declaration's parentheses.
- Infix operators must be spaced.
- Commas should have a space after them.
- Keep else statements on the same line as their curly braces.
- For multi-line if statements, use curly braces.
- Always handle the `err` function parameter.
- Always prefix browser globals with `window.`.
- Multiple blank lines not allowed.
- For the ternary operator in a multi-line setting, place `?` and `:` on their own lines.
- For var declarations, write each declaration in its own statement.
- Wrap conditional assignments with additional parentheses. This makes it clear that the expression is intentionally an assignment (`=`) rather than a typo for equality (`===`).

*NOTE: The best way to learn about that is to just install it and give it a try on your code. **Linearicons** uses an `.editorconfig` file, which most editors support, to enforce these coding standards.*


## Test

First install [Node.js](https://nodejs.org/en/download/). Now install all the dependencies, run `npm install` from the project directory. Once you have the dependencies installed, run `npm test`.


## Code of Conduct

Help us keep **Linearicons** open and inclusive. Please read and follow our thoughts on [Code of Conduct](http://confcodeofconduct.com/).


## License

By contributing your code, you agree to license your contribution under the [MIT license](../license).
