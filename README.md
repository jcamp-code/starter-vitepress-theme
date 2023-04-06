# @jcamp/starter-typescript

Setup an empty repo for TypeScript / NPM packages for an easy start for future projects.

# Integrations

## [Changelogen](https://github.com/unjs/changelogen)

Creates / updates CHANGELOG.md; has GH Action for automatic release creation on GitHub

Note for prerelease versions (0.x.x), considers the 0.x.0 as the major, with the 0.0.x as the minor.

## [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)

Easily allows GitHub hooks in a project \
Used for commitlint and lintstaged below

## [commitlint](https://commitlint.js.org/#/)

Ensures commit messages follow conventions

## [lint-staged](https://github.com/okonet/lint-staged)

Lints all staged files to ensure code formatting is consistent.

## [Eslint Config](https://github.com/jcamp-code/eslint-config)

My preferred eslint / prettier setup; extends [@antfu's config](https://github.com/antfu/eslint-config)

## [Prettier](https://prettier.io/)

Standardized code formatting

## [Netlify](https://www.netlify.com)

Standard deploy file (obviously delete if not needed)

## [Unbuild](https://github.com/unjs/unbuild)

Easy to use unified build system

# Workflow

- Make changes
- push commits / merge branches
- `pnpm release` - updates changelog and release version, commits, tags and pushes; publishes too by default
- GitHub Action creates GitHub release from the version (`v*`) tag
