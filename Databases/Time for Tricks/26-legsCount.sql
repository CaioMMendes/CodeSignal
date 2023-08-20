DROP PROCEDURE IF EXISTS solution;
CREATE PROCEDURE solution()
    SELECT sum(
     CASE
        WHEN type = 'human' THEN 2
        ELSE 4
    end)
    as summary_legs
    FROM creatures
    ORDER BY id;
    
   
