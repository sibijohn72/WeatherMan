# weather-man

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* 'git clone <repository-url>' this repository
* 'cd weather-man'
* 'npm install'

## Running / Development

* 'ember serve'
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try 'ember help generate' for more details

### Running Tests

* 'ember test'
* 'ember test --server'

### Linting

* 'npm run lint:js'
* 'npm run lint:js -- --fix'

### Building

* 'ember build' (development)
* 'ember build --environment production' (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)




QUESTION

Welcome to the interview task :)
===============================

If something is not clear or you need help - just ask :smile:. Nobody knows everything!

1. Read the task
2. Create a project
3. Please implement the project according to your own best standards, possibly
   - Tests, tdd
   - Code guidelines
   - Structure / architecture
   - Refactoring
   - Conventions
4. For the layout bootstrap or plain design is enough.
5. Make sure to commit frequently and feel free to stop working on it after 1-2 hours
6. Provide an overview which points you would improve if you had more time to work on the project

Scenario - Weathermap api client
---------------------------

Your app should be a client for the [Open Weather Map API](http://openweathermap.org/API#weather) JSON api

Features that should work:

* Display the weather at random geographic coordinates
* A form with city and country that fetches and displays the weather in this city
  - optional: cache the fetched weather data
* Gracefully handle the case where the city could not be found (display the information to the user)

Have fun!
