import { pgTable, integer, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const post = pgTable("post", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "post_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	title: text().notNull(),
	slug: text().notNull(),
	tags: text().array(),
	description: text().notNull(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow(),
});

export const postData = pgTable("post_data", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "post_data_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	postId: text().notNull(),
	content: text().notNull(),
});

export const tag = pgTable("tag", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "tag_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	name: text().notNull(),
	slug: text().notNull(),
	description: text().notNull(),
});
