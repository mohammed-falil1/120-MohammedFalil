<%@ include file="common/header.jspf"%>
<%@ include file="common/navigation.jspf"%>

<br>
<center>
	<div class="container">
		<div class="jumbotron">
			<h1>Search Employee</h1>
		</div>
	</div>
</center>
<br>
<form action="/emp/search" method="Post">

	<center>
		<table>
			<tr>
			<td>
				<input type="text" name="search" placeholder="Search" >
			</td>
			<td>
			<input  type="submit" value="&nbsp Find &nbsp" >
			</td>
			</tr>
			</center>
		</table>
</form>





<%@ include file="common/footer.jspf"%>