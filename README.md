# Ember-country-region-data

Exports `benkeen/country-region-data` as an Ember service.

## Usage

`import ConfigRegionData from 'ember-country-region-data/services/country-region-data';`

In your component, controller, etc.

`countryRegionData: new ConfigRegionData()`

Access the data

`this.get('countryRegionData.data')`
