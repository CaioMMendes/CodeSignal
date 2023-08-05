CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	select id,name,surname from suspect where height<=170 and lower(name) like 'b%' and lower(surname) like 'Gre_n';
	
END