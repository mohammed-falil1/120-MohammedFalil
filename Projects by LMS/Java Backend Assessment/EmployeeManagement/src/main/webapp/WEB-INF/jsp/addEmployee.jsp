<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>



<center>
<div class="container">
  <div class="jumbotron">
    <h3>Add Employee</h3>
  </div>
</div>
</center>
<br>
<div id="two">

<form method="post" action="/emp/add">

	<div class="form-group row">
	<label for="empName" class="col-sm-1 col-form-label">Name</label>
		<div class="col-sm-5">
			<input type="text" class="form-control" name="empName"
				placeholder="Name">
		</div>
	</div>
	<br>
	<div class="form-group row">
		<label for="age" class="col-sm-1 col-form-label">Age</label>
		<div class="col-sm-5">
			<input type="number" class="form-control" name="age"
				placeholder="Age">
		</div>
	</div>
	<br>
	<div class="form-group row">
		<label for="Salary" class="col-sm-1 col-form-label">Salary</label>
		<div class="col-sm-5">
			<input type="number" class="form-control" name="salary"
				placeholder="Salary">
		</div>
	</div>
	<br>

	<div class="form-group row">
		<label for="department" class="col-sm-1 col-form-label">Department</label>
		<div class="col-sm-5">
			<input type="text" class="form-control" name="department"
				placeholder="Department">
		</div>
	</div>
	<br>
	<div class="form-group row">
		<label for="aadharNumber" class="col-sm-1 col-form-label">Aadhar
			Number</label>
		<div class="col-sm-5">
			<input type="number" class="form-control" name="aadharNumber"
				placeholder="Aadhar Number">
		</div>
	</div>
		<input class="btn btn-primary btn-lg" type="submit"
			value="Add Employee" style="width: 300px; margin-left: 15% ;">
			
</form>

</div>
<%@ include file="common/footer.jspf"%>