from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator , MinLengthValidator, MaxLengthValidator

ASSESMENT_GROUP_CHOICES = {
    ("teacher","teacher"),
    ("student","student"),
    ("parent","parent"),
}

SCORE_RANGE = {"MIN":0,"MAX":100}

class Course_Meta(models.Model):
    course_meta = models.CharField(max_length=20)
    course_tile = models.CharField(max_length=200)
    course_about = models.TextField()
    course_explanation_video = models.FileField(upload_to='course_explanation_file')
    course_who_for = models.TextField()
    course_learn_what = models.TextField()
    course_trainer = models.CharField(max_length=30)
    course_about_trainer = models.TextField()
    course_requirement = models.TextField()
    course_testimonial = models.TextField()
    course_price = models.IntegerField(validators=[MinValueValidator(0)])
    course_time_seconds = models.IntegerField()
    course_display = models.BooleanField()
    published_date = models.DateTimeField("Date Published")
class Course_FAQ(models.Model):
    course_title = models.ForeignKey(Course_Meta,on_delete=models.CASCADE)
    course_question = models.TextField()
    course_answer = models.TextField()
class Course_Video(models.Model):
    course_title = models.ForeignKey(Course_Meta, on_delete=models.CASCADE)
    course_video = models.FileField(upload_to='course_video_file/')
class Assesment(models.Model):
    assesment_group = models.CharField(max_length=8,choices=ASSESMENT_GROUP_CHOICES)
    assesment_question = models.TextField()
    assesment_answer_1 = models.CharField(max_length=200)
    assesment_answer_2 = models.CharField(max_length=200)
    assesment_answer_3 = models.CharField(max_length=200)
    assesment_answer_4 = models.CharField(max_length=200)
    assesment_score_1 = models.CharField(max_length=200)
    assesment_score_2 = models.CharField(max_length=200)
    assesment_score_3 = models.CharField(max_length=200)
    assesment_score_4 = models.CharField(max_length=200)
class Assesment_FeedBack(models.Model):
    feedback_group = models.CharField(max_length=8,choices=ASSESMENT_GROUP_CHOICES)
    feedback_score_min = models.IntegerField()
    feedback_score_max = models.IntegerField()
    feedback_text = models.TextField()
    
class Users(models.Model):
    user_firstname = models.CharField(max_length=20)
    user_lastname = models.CharField(max_length=20)
    user_email = models.CharField(max_length = 50)
    user_phone = models.CharField(max_length=10, validators=[MaxLengthValidator(10),MinLengthValidator(10)])
    user_group = models.CharField(max_length=8,choices=ASSESMENT_GROUP_CHOICES)
    