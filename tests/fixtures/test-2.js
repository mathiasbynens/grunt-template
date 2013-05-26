<!DOCTYPE html>
<title>Test</title>
<ul>
<% _.forEach(people, function(name) { %>
	<li><%= name %></li>
<% }); %>
</ul>
