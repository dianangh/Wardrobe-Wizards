# Wardrobify

Team:

* Diana Angarita - Shoes
* Emily Arai - Hats


## Design
We'll be using Bootstrap to customize the architecture of the project

## Shoes microservice

Explain your models and integration with the wardrobe
microservice, here.

## Hats microservice

In addition to the specified fields, my Hat model has a name field for user's to name their hat. I have a foriegn key, location, that references the LocationVO model. The LocationVO utilizes the poller in poller.py in order to sink data with the Location model in the wardrobe. It utlizes the href field on the Location model (import_href on LocationVO) to sink the data between the two microservices. 
