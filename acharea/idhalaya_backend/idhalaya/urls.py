from django.urls import path
from . import views

urlpatterns = [
    # path("",views.courses_list, name="course_list")
    
    path("allcourse",views.courses_list_all,name="allcourse"),
    path("displaycourse",views.courses_list_display,name="displaycourse"),
    path("coursevideo/<str:coursemeta>",views.course_video,name="coursefaqs"),
    path("coursefaqs/<str:coursemeta>",views.course_faqs,name="coursefaqs"),
    
    
    path("studentassesment",views.student_assesment_all,name="studentassesment"),
    path("teacherassesment",views.teacher_assesment_all,name="teacherassesment"),
    path("parentassesment",views.parent_assesment_all,name="parentassesment"),
    
    path("studentassesmentfeedback/<int:score>/",views.student_assesment_feedback,name="studentassesmentfeedback"),
    path("teacherassesmentfeedback/<int:score>/",views.teacher_assesment_feedback,name="teacherassesmentfeedback"),
    path("parentassesmentfeedback/<int:score>/",views.parent_assesment_feedback,name="parentassesmentfeedback"),
    
    
]