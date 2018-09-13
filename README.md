# Introduction

This project is my solution for the hiring challenge at kloeckner.i GmbH. It has been developed with <b>Ember.JS</br>. This app uses the Google Places API and also the OpenWeatherMap API.

1. When the user first uses the application, he sees a Search Bar powered by the Google Places API and also an I'm Feeling Lucky button like the one on the Google Home Page.

![page 1](https://user-images.githubusercontent.com/7763098/45510569-3d976e80-b7b8-11e8-99ea-ab30759beab9.png)

2. He can search for any place around the world in the search bar and when he presses enter, the application fetches the Weather data from the OpenWeatherMap API.
![page 3](https://user-images.githubusercontent.com/7763098/45510572-3d976e80-b7b8-11e8-8d2f-ae291c314d8a.png)

3. He can also click on the "I'm Feeling Lucky Button" which will fetch the weather of randomly generated coordinates.

![page 2](https://user-images.githubusercontent.com/7763098/45510570-3d976e80-b7b8-11e8-9816-2d82da5ec572.png)


# Design Overview
  The core code that talks to the web service has been wrapped into a Promise and encapsulated into an Ember Service.
  The API keys and the Base API url has been externalized into an external property file in "public/data/properties.json"
  An instance initializer was used to inject these API Keys and Base URLs into the controller at application instantiation.
  The Google Places Search Box has been wrapped into an Ember Component using the Ember Run loop for easy integration with Ember.
  The Weather widget has been extracted into a separate Ember component for future reuse.
  An Ember helper was used to convert Temperature from Kelvin to Celsius.
  
# Next Steps
The tasks were being tracked on Trello. 
![trello](https://user-images.githubusercontent.com/7763098/45510925-476da180-b7b9-11e8-9c1a-d12045d0d420.png)


What i would like to do further given more time is :
1. Securing the API keys : The API keys are currently in a property file. I would like to implement a service which would act as a proxy for the client to talk to the WeatherMap API.
2. Deploy on Heroku and build a CI/CD pipeline.
3. The tests currently are limited in function. I would like to enhance the testing framework further.
4. Client side caching has not been implemented yet.
5. I would prefer to make the information a lot more visual using charts.
6. WeatherMap API gives a lot of data using which we can build a lot more functionalities that could benefit the end user.
7. Show Temperature both in Celsius and Fahrenheit.

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
