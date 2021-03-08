from django.shortcuts import render
from django.contrib.auth.models import User, auth
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def register(request):
    if request.method == 'POST':
        username = request.POST('username')
        email = request.POST('email')
        password = request.POST('password')

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        print('User Created!!')
    else:
        return render(request, 'build/index.html')
