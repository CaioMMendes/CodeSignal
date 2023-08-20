CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	
	SELECT round(exp(sum(log(LENGTH(characters)))),2) AS combinations FROM discs;
	
END