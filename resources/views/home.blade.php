<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Single Page Forum</title>
</head>
<body>
    <div id="app">
        <v-app>            
            <app-Home />
        </v-app>
    </div>
</body>
<script src="{{asset('js/app.js')}}"></script>
</html>