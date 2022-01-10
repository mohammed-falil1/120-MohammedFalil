<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Kendo UI Snippet</title>

    <link rel="stylesheet" href="https://kendo.cdn.telerik.com/2021.3.1207/styles/kendo.default-v2.min.css"/>

    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://kendo.cdn.telerik.com/2021.3.1207/js/kendo.all.min.js"></script>
</head>
<body>
  
<div id="grid"></div>
<script>
$("#grid").kendoGrid({
  columns: [
    { field: "Id" },
    { field: "Name" },
    { field: "Age" },
    { field: "Salary" },
    { field: "Role" }
  ],
  dataSource: {
    data: [
      { Id: 1, Name: "Mohammed", Age: 21, Salary: 20000, Role: "Trainee" },
      { Id: 2, Name: "Falil", Age: 24, Salary: 35000, Role: "Senior Engineer" },
      { Id: 3, Name: "Ahmedh", Age: 27, Salary: 45000, Role: "Team Lead" },
      { Id: 4, Name: "Suresh", Age: 28, Salary: 55000, Role: "Manager" },
      { Id: 5, Name: "Abdul", Age: 25, Salary: 30000, Role: "Software Associate" }
    ]
  }
});
</script>
</body>
</html>