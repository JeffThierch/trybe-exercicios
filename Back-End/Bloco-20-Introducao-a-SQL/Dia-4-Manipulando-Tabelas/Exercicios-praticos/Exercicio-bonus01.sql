USE Pixar;

UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

SELECT * FROM BoxOffice;