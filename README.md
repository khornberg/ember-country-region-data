# Ember-country-region-data

Exports `benkeen/country-region-data` as an Ember service.

[![Build Status](https://travis-ci.org/khornberg/ember-country-region-data.svg?branch=master)](https://travis-ci.org/khornberg/ember-country-region-data)

## Usage

`import ConfigRegionData from 'ember-country-region-data/services/country-region-data';`

In your component, controller, etc.

`countryRegionData: new ConfigRegionData()`

Access the data

`this.get('countryRegionData.data')`
