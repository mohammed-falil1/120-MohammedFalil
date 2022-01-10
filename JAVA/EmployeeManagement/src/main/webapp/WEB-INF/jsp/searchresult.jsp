<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>

<br>
<center>
	<div class="container">
		<div class="jumbotron">
			<h1>Search Results</h1>
		</div>
	</div>

</center>
<br>
<table class="table table-striped">
	<thead>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Age</th>
			<th>Salary</th>
			<th>Aadhar</th>
			<th>Department</th>
			<th>Update</th>
			<th>Delete</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach items="${empList}" var="emp">
			<tr>
				<td>${emp.id}</td>
				<td>${emp.empName}</td>
				<td>${emp.age}</td>
				<td>${emp.salary}</td>
				<td>${emp.aadharNumber}</td>
				<td>${emp.department}</td>
				<td><a class="btn btn-primary" href="/emp/update/${emp.id}"
					role="button">Update</a></td>
				<td><a class="btn btn-danger" href="/emp/delete/${emp.id}" role="button">Delete</a></td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<%@ include file="common/footer.jspf"%>