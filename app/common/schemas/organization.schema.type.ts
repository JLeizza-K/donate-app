import * as v from "valibot";

export const OrganizationSchema = v.object({
	id: v.number(),
	name: v.string(),
	description: v.string(),
	imageUrl: v.string(),
});

export const OrganizationsResponseSchema = v.object({
	organizations: v.array(OrganizationSchema),
});

export type OrganizationType = v.InferOutput<typeof OrganizationSchema>;
