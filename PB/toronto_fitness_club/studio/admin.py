from django.contrib import admin

from classes.models import Class
from studio.models import Amenities, Image, Studio


class ImageInline(admin.TabularInline):
    model = Image
    fields = ['image']


class AmenitiesInline(admin.TabularInline):
    model = Amenities
    fields = ['type', 'quantity']


# class ClassesInline(admin.TabularInline):
#
#     model = Class
#     fields = ['name', 'description', 'coach', 'space_available', 'capacity', 'day',
#               'start_time', 'end_time', 'start_date', 'end_date', 'is_enrolled']


class StudioAdmin(admin.ModelAdmin):

    fields = ['name', 'address', 'latitude', 'longitude', 'postal_code',
              'phone_number']

    # inlines = [ImageInline, AmenitiesInline, ClassesInline]
    inlines = [ImageInline, AmenitiesInline]


admin.site.register(Studio, StudioAdmin)
admin.site.register(Image)
admin.site.register(Amenities)
