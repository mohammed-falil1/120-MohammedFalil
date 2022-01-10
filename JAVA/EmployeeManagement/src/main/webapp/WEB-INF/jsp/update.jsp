<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>
<center>
	<div class="container">
		<div class="jumbotron">
			<h3>Update Employee : ${name}</h3>
		</div>
	</div>

</center>

<%-- 	<form action="/emp/update" method="POST">
		<input type=hidden name="Id" value="${id}" />
		<p> ID           :<input type="text" name="id" value = "${id}" disabled><br>
		<p> Name         :<input type="text" name="empName" value = "${name}"><br>
		<p> age          :<input type="text" name="age" value = "${age}"><br>
		<p> salary       :<input type="text" name="salary" value = "${salary}"><br>
		<p> department   :<input type="text" name="department" value ="${department}"><br>
		<p> aadharNumber :<input type="text" name="aadharNumber" value = "${aadhar}" ><br>
		 <input
			type="submit" value="Update">
	</form>
	 --%>
<div id="margintwo">
	<form method="post" action="/emp/update">
		<input type=hidden id="id" name="id" value="${id}" />
		<div class="form-group row">
			<label for="id" class="col-sm-1 col-form-label">Id </label>
			<div class="col-sm-10">
				<input type="text" class="form-control" 
					value="${id}" disabled="disabled">
			</div>

		</div>
		<br>
		<div class="form-group row">
			<label for="empName" class="col-sm-1 col-form-label">Name :</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" name="empName"
					placeholder="Name" value="${name}">
			</div>
		</div>
		<br>
		<div class="form-group row">
			<label for="age" class="col-sm-1 col-form-label">Age</label>
			<div class="col-sm-10">
				<input type="number" class="form-control" name="age"
					placeholder="Age" value="${age}">
			</div>
		</div>
		<br>
		<div class="form-group row">
			<label for="Salary" class="col-sm-1 col-form-label">Salary</label>
			<div class="col-sm-10">
				<input type="number" class="form-control" name="salary"
					placeholder="Salary" value="${salary}">
			</div>
		</div>
		<br>

		<div class="form-group row">
			<label for="department" class="col-sm-1 col-form-label">Department</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" name="department"
					placeholder="Department" value="${department}">
			</div>
		</div>
		<br>
		<div class="form-group row">
			<label for="aadharNumber" class="col-sm-1 col-form-label">Aadhar
				Number</label>
			<div class="col-sm-10">
				<input type="number" class="form-control" name="aadharNumber"
					placeholder="Aadhar Number" value="${aadhar}">
			</div>
		</div>
		<center>
			<input class="btn btn-primary btn-lg" type="submit" value="update">
		</center>
	</form>
</div>
<%@ include file="common/footer.jspf"%>