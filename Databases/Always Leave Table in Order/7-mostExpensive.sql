CREATE PROCEDURE solution()
BEGIN


SELECT  X.NAME FROM (SELECT name, (price*quantity)AS valor  from products  )as x order by valor desc,name asc limit 1;







END