from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
	password = serializers.CharField(write_only=True, min_length=8, style={'input_type': 'password'})

	def create(self, validated_data):
		return User.objects.create_user(**validated_data);

	class Meta:
		model = User
		fields = ['username', 'email', 'password']
