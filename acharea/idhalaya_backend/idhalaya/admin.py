from django.contrib import admin

# Register your models here.

from .models import Course_Meta , Course_Video , Assesment , Assesment_FeedBack, Users , Course_FAQ
admin.site.register([Course_Meta , Course_Video , Assesment , Assesment_FeedBack, Users , Course_FAQ])

# from .models import Question,Choice
# admin.site.register([Question,Choice])