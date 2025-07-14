from django.urls import path
from accounts import views as UserViews

urlpatterns = [
	path('signup/', UserViews.RegisterView.as_view()),
]
