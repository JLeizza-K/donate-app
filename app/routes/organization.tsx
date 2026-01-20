import { Link } from "react-router";
import * as v from "valibot";
import type { Route } from "./+types/organization";
import {
	OrganizationSchema,
	OrganizationsResponseSchema,
	type OrganizationType,
} from "./home";

type ProjectType = v.InferOutput<typeof ProjectSchema>;

const ProjectSchema = v.object({
	id: v.number(),
	organizationId: v.number(),
	title: v.string(),
	description: v.string(),
});

export const ProjectResponseSchema = v.object({
	projects: v.array(ProjectSchema),
});

export async function loader({ request, params }: Route.LoaderArgs) {
	const organizationId = params.organizationId;
	const url = new URL(request.url);
	const organizations = await fetchData(
		`${url.origin}/organizations`,
		OrganizationsResponseSchema,
		v.array(OrganizationSchema),
		"organizations",
	);
	const projects = await fetchData(
		`${url.origin}/projects`,
		ProjectResponseSchema,
		v.array(ProjectSchema),
		"projects",
	);

	const organization = organizations.find((organization: OrganizationType) => {
		return String(organization.id) === String(organizationId);
	});

	const projectsByOrganization = projects.filter((project: ProjectType) => {
		return String(project.organizationId) === String(organizationId);
	});

	return { organization, projectsByOrganization };
}

export default function Organization({ loaderData }: Route.ComponentProps) {
	const { organization, projectsByOrganization } = loaderData;
	return (
		<div>
			<img src={organization?.imageUrl} alt={`{organization.name}'s logo`} />
			<p>{organization?.name}</p>
			<p>{organization?.description}</p>
			<ul>
				{projectsByOrganization.map((project) => {
					return (
						<Link
							key={project.id}
							to={`/organization/${organization.id}/project/${project.id}`}
						>
							{project.title}
						</Link>
					);
				})}
			</ul>
		</div>
	);
}

async function fetchData<TResponse, TData>(
	url: string,
	responseSchema: v.BaseSchema<unknown, TResponse, v.BaseIssue<unknown>>,
	schema: v.BaseSchema<unknown, TData, v.BaseIssue<unknown>>,
	key: keyof TResponse,
): Promise<TData> {
	const response = await fetch(url);
	if (!response) {
		throw new Error("Didn't connect to the route");
	}
	const data = v.parse(responseSchema, await response.json());
	const validData = v.parse(schema, data[key]);
	return validData;
}
