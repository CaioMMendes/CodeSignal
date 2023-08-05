CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	
	select full_year.subscriber from full_year 
	where full_year.newspaper like '%Daily%'
	 union 
	 select half_year.subscriber from half_year where half_year.newspaper like '%Daily%' order by subscriber asc;
END

