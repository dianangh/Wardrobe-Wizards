from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json

from .models import LocationVO, Hat
from common.json import ModelEncoder


class LocationVoDetailEncoder(ModelEncoder):
    model = LocationVO
    properties = ["id", "closet_name", "import_href"]


class HatListEncoder(ModelEncoder):
    model = Hat
    properties = [
        "name",
        "fabric",
        "color",
        "style_name",
        "picture_url",
        "location",
    ]
    encoders = {
        "location": LocationVoDetailEncoder(),
    }

    def get_extra_data(self, o):
        return {"location": o.location.closet_name}

class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "name",
        "fabric",
        "style_name",
        "color",
        "picture_url",
        "location",
    ]
    encoders = {
        "location": LocationVoDetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id is not None:
            location = LocationVO.objects.filter(location=location_vo_id)
        else:
            hats = Hat.objects.all()
            print(hats)
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )
    else:
        content = json.loads(request.body)
        print(content)

        try:
            # print(content["location"])
            # location_id = content["location"]
            # location_href = f"api/locations/{location_id}/"
            # print("location_href: ", location_href)
            # print(LocationVO.objects.all())
            # # print("id", LocationVO.objects.get(id=3))
            # print("Get with href: ", LocationVO.objects.get(import_href=location_href))
            location = LocationVO.objects.get(id=content["location"])
            print("location: ", location)
            content["location"] = location

        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400,
            )

        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_hat(request, id):
    if request.method == "GET":
        try:
            hat = Hat.objects.get(id=id)
            return JsonResponse(
                hat,
                encoder=HatDetailEncoder,
                safe=False,
            )
        except Hat.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            hat = Hat.objects.get(id=id)
            hat.delete()
            return JsonResponse(
                hat,
                encoder=HatDetailEncoder,
                safe=False,
            )
        except Hat.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
