import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shoes_project.settings")
django.setup()

# Import models from hats_rest, here.
from shoes_rest.models import BinVO

def get_bin():
    response = requests.get("http://wardrobe-api:8000/api/bins/")
    print("Response:", response)
    content = json.loads(response.content)
    print("content", content)
    for bin_storage in content["bin"]:
        BinVO.objects.update_or_create(
            import_href=bin_storage["href"],
            defaults={"closet_name": bin_storage["closet_name"]},
        )

def poll():
    while True:
        print('Shoes poller polling for data')
        try:
            get_bin()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
