<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<title>Home</title>
</head>
<body>

<p><a href="/spring_mvc_hibernate/home">AddUser</a></p>
<p><a href="/spring_mvc_hibernate/getUsersList">UserList</a></p>



<table border="1">
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Email</th>
			<th>Update</th>
			<th>Delete</th>
		</tr>
		<c:forEach items="${uList}" var="usr">
			<tr>
				<td>${usr.id}</td>
				<td>${usr.userName}</td>
				<td>${usr.userEmail}</td>
				<td><a href="/spring_mvc_hibernate/updateList/${usr.id}">Update</a></td>
				<td><a href="/spring_mvc_hibernate/delete/${usr.id}">Delete</a></td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>