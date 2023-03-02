from django.db import models
from django.urls import reverse

# Create your models here.
class LocationVO(models.Model):
    import_href = models.CharField(max_length=200)
    closet_name = models.CharField(max_length=100)


class Hats(models.Model):
    name = models.CharField(max_length=200, null=True)
    fabric = models.CharField(max_length=200, null=True)
    style_name = models.CharField(max_length=200, null=True)
    color = models.CharField(max_length=200, null=True)
    picture_url = models.CharField(max_length=250, null=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.style_name

    def get_api_url(self):
        return reverse("api_show_hat", kwargs={"id": self.id})
