# Generated by Django 3.0.3 on 2020-03-10 21:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0004_auto_20200310_2049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courseenrollment',
            name='course_offered',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='course.CourseOffering'),
        ),
    ]
