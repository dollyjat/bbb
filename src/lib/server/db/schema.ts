import { pgTable, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const post = pgTable('post', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	title: text('title').notNull(),
	slug: text('slug').notNull(),
	tags: text('tags').notNull().array(),
	description: text('description').notNull(),
	createdAt: timestamp('createdAt').defaultNow(),
	updatedAt: timestamp('updatedAt').defaultNow()
});

export const postData = pgTable('post_data', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	postId: text('postId')
		.notNull()
		.references(() => post.id),
	content: text('content').notNull()
});

export const tag = pgTable('tag', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: text('name').notNull(),
	slug: text('slug').notNull(),
	description: text('description').notNull()
});
