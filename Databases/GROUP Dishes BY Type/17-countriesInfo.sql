CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	
	select 
	(select count(name) from countries) as number,
	(select avg(population)  from countries) as average,
	(select sum(population)  from countries) as total;
	

END


