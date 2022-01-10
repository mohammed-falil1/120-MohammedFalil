<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>

<center>
	<div class="container">
		<div class="jumbotron">
			<h1>List of Employees</h1>
		</div>
	</div>

</center>

<table class="table table-striped">

	<thead>
		<tr> 
			<th>&nbsp Id</th>
			<th>&nbsp Name</th>
			<th>&nbsp Age</th>
			<th>&nbsp Salary</th>
			<th>&nbsp Aadhar</th>
			<th>&nbsp Department</th>
			<th>&nbsp Update</th>
			<th>&nbsp Delete</th>
		</tr>
	</thead>
	<tbody>
		
		<c:forEach items="${empList}" var="emp">
			<tr>
				<td>&nbsp ${emp.id}</td>
				<td>&nbsp ${emp.empName}</td>
				<td>&nbsp ${emp.age}</td>
				<td>&nbsp ${emp.salary}</td>
				<td>&nbsp ${emp.aadharNumber}</td>
				<td>&nbsp ${emp.department}</td>
				<td><a class="btn btn-primary" href="/emp/update/${emp.id}"
					role="button">Update</a></td>
				<td><a class="btn btn-danger" href="/emp/delete/${emp.id}"
					role="button">Delete</a></td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<%@ include file="common/footer.jspf"%>