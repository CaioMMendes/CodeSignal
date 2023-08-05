CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	
	select  item_name, item_type, count(*)as item_count from availableItems GROUP BY item_name,item_type order by item_type asc,item_name asc;
	
END