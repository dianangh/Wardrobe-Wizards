# Wardrobify

Team:

* Diana Angarita - Shoes
* Emily Arai - Hats


## Design
We'll be using Bootstrap to customize the architecture of the project

## Shoes microservice

We used the Bin model within the Wardrobe microservice to store shoes in a closet bin; I created a corresponding BinVo in my models.py as a value object to access the existing bin models in the microservice. This enabled the poller to retrieve the current bin models in the Wardrobe microservice.

## Hats microservice

In addition to the specified fields, my Hat model has a name field for user's to name their hat. I have a foreign key, location, that references the LocationVO model. The LocationVO utilizes the poller in poller.py in order to sink data with the Location model in the wardrobe. It utilizes the href field on the Location model (import_href on LocationVO) to sink the data between the two microservices.
