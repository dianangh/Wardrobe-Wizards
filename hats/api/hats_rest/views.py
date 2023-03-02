from django.shortcuts import render
from models import LocationVO, Hats

from common.json import ModelEncoder


class LocationVoDetailEncoder(ModelEncoder):
    model = LocationVO
    properties = ["closet_name", "import_href"]


class HatListEncoder(ModelEncoder):
    model = Hats
    properties = ["name"]
