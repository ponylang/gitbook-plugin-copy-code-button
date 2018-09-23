# Releasing a new version

## Requirements to release

- npmjs.com account
- permission to publish new package versions.
- a local npm installation 

To be granted permissions to publish new package versions, contact @seantallen or @jemc.

## Version and tag

Update package.json to the new version number. After committing that change, create a git tag for the version and push your change and version.

## Login to npmjs

npm commands should be run from the top level of the plugin repo.

```bash
npm login
```

## Publish the package

npm commands should be run from the top level of the plugin repo.

```bash
npm publish --access public
```
