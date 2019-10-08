<!DOCTYPE html>
<html ng-app="myApp">
<head>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<script> var baseUrl = "{{ url('/') }}/";</script>
</head>
	<body ng-controller="userController">
		<div ng-view></div>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="{{ asset('bower_components/angular/angular.min.js') }}"></script>
		<script src="{{ asset('bower_components/angular-route/angular-route.min.js') }}"></script>
		<script src="{{ asset('bower_components/angular-cookies/angular-cookies.min.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
		<script type="text/javascript" src="{{ asset('js/controllers.js') }}"></script>
	</body>
</html>