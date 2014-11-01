'use strict';

var requestp = require('requestp');

var SEARCH_URI = 'https://www.kickstarter.com/projects/search.json?term={{term}}';
var SORT_BY_KEY = 'launched_at';

exports.search = function getData(term) {
  return requestp({
    uri: getSearchUri(term),
    json: true
  }).then(function (data) {
    return {
      term: term,
      projects: transformData(data.projects)
    };
  });
};

function getSearchUri(term) {
  return SEARCH_URI.replace('{{term}}', term.trim());
}

function transformData(projects) {
  return projects.map(function (project) {
    // Convert timestamps to Date objects.
    [
      'created_at',
      'deadline',
      'launched_at',
      'state_changed_at'
    ].forEach(function (key) {
      // Convert seconds to milliseconds.
      project[key] = new Date(project[key] * 1000);
    });
    return project;
  }).sort(sortBy(SORT_BY_KEY));
}

function sortBy(key) {
  return function (projectA, projectB) {
    return projectB[key] - projectA[key];
  };
}
