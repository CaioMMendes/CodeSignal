CREATE PROCEDURE solution()
    SELECT name
    FROM people_interests
-- O 1 e 8 são as representações em binario de 0 e 3, o 0 não é 0 porque precisa ter 
-- um 1 no numero
    WHERE interests & 1 AND interests & 8
    ORDER BY name