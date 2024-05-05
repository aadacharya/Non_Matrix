# Generated by Django 4.2.11 on 2024-05-03 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idhalaya', '0006_remove_assesment_feedback_feedback_score_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='assesment',
            name='assesment_answer',
        ),
        migrations.AddField(
            model_name='assesment',
            name='assesment_score_1',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='assesment',
            name='assesment_score_2',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='assesment',
            name='assesment_score_3',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='assesment',
            name='assesment_score_4',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='assesment',
            name='assesment_group',
            field=models.CharField(choices=[('teacher', 'teacher'), ('parent', 'parent'), ('student', 'student')], max_length=8),
        ),
        migrations.AlterField(
            model_name='assesment_feedback',
            name='feedback_group',
            field=models.CharField(choices=[('teacher', 'teacher'), ('parent', 'parent'), ('student', 'student')], max_length=8),
        ),
        migrations.AlterField(
            model_name='users',
            name='user_group',
            field=models.CharField(choices=[('teacher', 'teacher'), ('parent', 'parent'), ('student', 'student')], max_length=8),
        ),
    ]