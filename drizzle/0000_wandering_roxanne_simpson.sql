-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "post" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "post_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" text NOT NULL,
	"slug" text NOT NULL,
	"tags" text[],
	"description" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "post_data" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "post_data_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"postId" text NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tag" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "tag_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"description" text NOT NULL
);

*/