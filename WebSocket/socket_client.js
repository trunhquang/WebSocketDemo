$(document).ready(function(){
	var socket = io.connect('http://127.0.0.1:8080');


	socket.on('greeting', function(data)
	{
	alert(data);
	})


	$('#go').click(function()
	{
		socket.emit('user-join',$('#name').val());
	})

	socket.on('new-user', function(data)
	{
	alert(data + ' Have joined!');
	})
})
