CREATE TABLE "todoapp" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (240) NOT NULL,
	"complete" BOOLEAN DEFAULT FALSE  	
);

INSERT INTO "todoapp" 
	("task") 
	VALUES 
	('finish to do app assignment');

SELECT * FROM "todoapp";