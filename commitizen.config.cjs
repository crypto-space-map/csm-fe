const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable');
const defaultTypes = require('@digitalroute/cz-conventional-changelog-for-jira/types');

module.exports = custom({
  types: defaultTypes,
  skipScope: false,
  jiraPrefix: 'CSM',
  jiraPrepend: '[',
  jiraAppend: ']',
});
