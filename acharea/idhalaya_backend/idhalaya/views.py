from django.shortcuts import render
from django.http import JsonResponse
from django.http import StreamingHttpResponse
from django.core.serializers import serialize

from .models import Course_Meta , Course_Video , Assesment , Assesment_FeedBack, Users , Course_FAQ


# Create your views here.
def courses_list_all(request):
    course_meta_db = Course_Meta.objects.all()
    data = {"data":[serialize('json', [obj]) for obj in course_meta_db ]}
    return JsonResponse(data)
def courses_list_display(request):
    course_meta_db = Course_Meta.objects.filter(course_display=True)
    data = {"data":[serialize('json', [obj]) for obj in course_meta_db ]}
    return JsonResponse(data)

def course_video(request,coursemeta):
    course_video = Course_Video.objects.filter(course_title__course_meta=coursemeta)
    data = {"data":[serialize('json', [obj]) for obj in course_video ]}
    return JsonResponse(data)

def course_faqs(request,coursemeta):
    course_video = Course_FAQ.objects.filter(course_title__course_meta=coursemeta)
    data = {"data":[serialize('json', [obj]) for obj in course_video ]}
    return JsonResponse(data)

def student_assesment_all(request):
    assesment_meta_db = Assesment.objects.filter(assesment_group="student")
    data = {"data":[serialize('json', [obj]) for obj in assesment_meta_db ]}
    return JsonResponse(data)
def teacher_assesment_all(request):
    assesment_meta_db = Assesment.objects.filter(assesment_group="teacher")
    data = {"data":[serialize('json', [obj]) for obj in assesment_meta_db ]}
    return JsonResponse(data)
def parent_assesment_all(request):
    assesment_meta_db = Assesment.objects.filter(assesment_group="parent")
    data = {"data":[serialize('json', [obj]) for obj in assesment_meta_db ]}
    return JsonResponse(data)

def student_assesment_feedback(request,score):
    feedback_db = Assesment_FeedBack.objects.filter(feedback_group="student",feedback_score_min__gte=score,feedback_score_max__lte=score)
    data = {"data":[serialize('json', [obj]) for obj in feedback_db ]}
    return JsonResponse(data)
def teacher_assesment_feedback(request,score):
    feedback_db = Assesment_FeedBack.objects.filter(feedback_group="teacher",feedback_score_min__gte=score,feedback_score_max__lte=score)
    data = {"data":[serialize('json', [obj]) for obj in feedback_db ]}
    return JsonResponse(data)
def parent_assesment_feedback(request,score):
    feedback_db = Assesment_FeedBack.objects.filter(feedback_group="parent",feedback_score_min__gte=score,feedback_score_max__lte=score)
    data = {"data":[serialize('json', [obj]) for obj in feedback_db ]}
    return JsonResponse(data)
