from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import BinVO, Shoes


class BinVOEncoder(ModelEncoder):
    model = BinVO
    properties = [
        "closet_name",
        'import_href',
        "bin_number",
        "id",
    ]


class ShoesListEncoder(ModelEncoder):
    model = Shoes
    properties = [
        "brand",
        "id",
    ]

    def get_extra_data(self, o):
        return {"bin": o.bin.closet_name}

class ShoesDetailEncoder(ModelEncoder):
    model = Shoes
    properties = [
        "brand",
        "model_name",
        "color",
        "style",
        "photo_url",
    ]

    encoders = {
        "bin_storage": BinVOEncoder(),
    }

    def get_extra_data(self, o):
        return {"bin_storage": o.bin_storage.closet_name}





@require_http_methods(["GET", "POST"])
def api_list_shoes(request, bin_vo_id=None):
    if request.method == "GET":
        if bin_vo_id is not None:
            bin_storage = BinVO.objects.filter(bin_storage=bin_vo_id)
            print("this is the bin shoes: ", bin_storage)
        else:
            shoes = Shoes.objects.all()
            print("shoesssssss:", shoes)
        return JsonResponse (
            {"shoes": shoes},
            encoder=ShoesListEncoder,
        )

    else:
        content = json.loads(request.body)
        print("this is the content ", content)

        try:
            print("content bin storage!!!!!!!!!!", content["bin_storage"])
            bin_storage = BinVO.objects.get(id=12)
            print("binnnnnn storage", bin_storage)
            content["bin_storage"] = bin_storage
            print("content with storg", content["bin_storage"])

        except BinVO.DoesNotExist:
            return JsonResponse (
                {"message": "Invalid Bin id"},
                status=400,
            )

        shoe = Shoes.objects.create(**content)
        return JsonResponse(
            shoe,
            encoder=ShoesDetailEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_shoes(request, id):
    if request.method == "GET":
        try:
            shoe = Shoes.objects.get(id=id)
            return JsonResponse(
                shoe,
                encoder= ShoesDetailEncoder,
                safe=False,
            )

        except Shoes.DoesNotExist:
            response = JsonResponse({"message": "Shoes id is not in the system"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            shoe = Shoes.objects.get(id=id)
            shoe.delete()
            return JsonResponse(
                shoe,
                encoder=ShoesDetailEncoder,
                safe=False,
            )
        except Shoes.DoesNotExist:
            return JsonResponse({"message": "Shoes id is not in the system"})
