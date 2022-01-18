<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<title>Home</title>
</head>
<body>
	<h1>Hello world!</h1>
	<p><a href="/spring_mvc_hibernate/getUsersList">UserList</a></p>
	
	<P>The time on the server is ${serverTime}.</p>

	<form action="user" method="POST">
		<p> User Name :<input type="text" name="userName"><br>
		<p> User Email:<input type="text" name="userEmail"><br>
		<input type="hidden" name="id" value=1 >
		 <input
			type="submit" value="add">
	</form>
</body>
</html>