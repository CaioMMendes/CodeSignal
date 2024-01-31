CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	select name 
	from people_hobbies 
	where hobbies like '%sports%' and hobbies like '%reading%'
	order by name asc;
END