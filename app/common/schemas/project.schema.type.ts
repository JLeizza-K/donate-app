import * as v from "valibot";

export type ProjectType = v.InferOutput<typeof ProjectSchema>;

export const ProjectSchema = v.object({
	id: v.number(),
	organizationId: v.number(),
	title: v.string(),
	description: v.string(),
});

export const ProjectResponseSchema = v.object({
	projects: v.array(ProjectSchema),
});
