CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	/*'_%\%firstname\_secondname\%%'*/
	select * from users where attribute like concat('_%\%', first_name,'\_', second_name, '\%%')
	COLLATE utf8_bin
	order by attribute asc;
	
END