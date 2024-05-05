# Generated by Django 4.2.11 on 2024-05-01 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idhalaya', '0005_alter_assesment_assesment_group_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='assesment_feedback',
            name='feedback_score',
        ),
        migrations.AddField(
            model_name='assesment_feedback',
            name='feedback_score_max',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='assesment_feedback',
            name='feedback_score_min',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='assesment',
            name='assesment_group',
            field=models.CharField(choices=[('student', 'student'), ('parent', 'parent'), ('teacher', 'teacher')], max_length=8),
        ),
        migrations.AlterField(
            model_name='assesment_feedback',
            name='feedback_group',
            field=models.CharField(choices=[('student', 'student'), ('parent', 'parent'), ('teacher', 'teacher')], max_length=8),
        ),
        migrations.AlterField(
            model_name='users',
            name='user_group',
            field=models.CharField(choices=[('student', 'student'), ('parent', 'parent'), ('teacher', 'teacher')], max_length=8),
        ),
    ]