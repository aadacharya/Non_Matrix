# Generated by Django 4.2.11 on 2024-05-01 14:13

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Assesment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('assesment_group', models.CharField(choices=[('student', 'Students'), ('teacher', 'Teacher'), ('parents', 'Parents')], max_length=8)),
                ('assesment_question', models.CharField(max_length=200)),
                ('assesment_answer_1', models.CharField(max_length=200)),
                ('assesment_answer_2', models.CharField(max_length=200)),
                ('assesment_answer_3', models.CharField(max_length=200)),
                ('assesment_answer_4', models.CharField(max_length=200)),
                ('assesment_answer', models.CharField(choices=[(1, 'Option 1 '), (2, 'Option 2 '), (3, 'Option 3 '), (4, 'Option 4 ')], max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Assesment_FeedBack',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('feedback_group', models.CharField(choices=[('student', 'Students'), ('teacher', 'Teacher'), ('parents', 'Parents')], max_length=8)),
                ('feedback_score', models.IntegerField(validators=[django.core.validators.MinValueValidator(0), django.core.validators.MaxValueValidator(100)])),
                ('feedback_text', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Course_Meta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_tile', models.CharField(max_length=200)),
                ('course_about', models.TextField()),
                ('course_explanation_video', models.FileField(upload_to='course_explanation_file')),
                ('course_who_for', models.TextField()),
                ('course_learn_what', models.TextField()),
                ('course_about_trainer', models.TextField()),
                ('course_requirement', models.TextField()),
                ('course_testimonial', models.TextField()),
                ('course_price', models.IntegerField(validators=[django.core.validators.MinValueValidator(0)])),
                ('published_date', models.DateTimeField(verbose_name='Date Published')),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_firstname', models.CharField(max_length=20)),
                ('user_lastname', models.CharField(max_length=20)),
                ('user_email', models.CharField(max_length=50)),
                ('user_phone', models.CharField(max_length=10, validators=[django.core.validators.MaxLengthValidator(10), django.core.validators.MinLengthValidator(10)])),
                ('user_group', models.CharField(choices=[('student', 'Students'), ('teacher', 'Teacher'), ('parents', 'Parents')], max_length=8)),
            ],
        ),
        migrations.CreateModel(
            name='Course_Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_video', models.FileField(upload_to='course_video_file/')),
                ('course_title', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='idhalaya.course_meta')),
            ],
        ),
        migrations.CreateModel(
            name='Course_FAQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course_question', models.TextField()),
                ('course_answer', models.TextField()),
                ('course_title', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='idhalaya.course_meta')),
            ],
        ),
    ]
