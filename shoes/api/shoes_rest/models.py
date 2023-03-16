dofrom django.db import models
from django.urls import reverse

class BinVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    closet_name = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"{self.id}-{self.import_href}"

class Shoes(models.Model):
    brand = models.CharField(max_length=100, null=True, blank=True)
    model_name = models.CharField(max_length=100, null=True, blank=True)
    color = models.CharField(max_length=100, null=True, blank=True)
    style = models.CharField(max_length=50)
    photo_url = models.URLField(null=True)
    bin_storage = models.ForeignKey(BinVO, related_name="shoes", on_delete=models.CASCADE)

    def get_api_url(self):
        return reverse("api_show_shoes", kwargs={"id": self.id})

    def __str__(self):
        return self.name
