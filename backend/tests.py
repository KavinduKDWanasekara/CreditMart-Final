import pytest

from django.contrib.auth.models import User

#
# @pytest.mark.django_db
# def test_user_create():
#     User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
#     assert User.objects.count() == 1
#
# from django.urls import reverse
#
#
# @pytest.mark.django_db
# def test_view(client):
#     url = reverse('user_signup')
#     response = client.get(url)
#     assert response.status_code == 200
from backend.models import Company


class TestCompany:

    @pytest.mark.unit
    def test_create_company(self, client) -> None:
        # assert Company.objects.count() == 0
        pass
