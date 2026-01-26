import { Link } from "react-router";
import * as v from "valibot";
import {
	ProjectResponseSchema,
	ProjectSchema,
	type ProjectType,
} from "~/common/schemas/project.schema.type";
import { fetchData } from "~/common/utils/fetchData";
import {
	OrganizationSchema,
	OrganizationsResponseSchema,
	type OrganizationType,
} from "../common/schemas/organization.schema.type";
import type { Route } from "./+types/organization";

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
		<div className="container">
			<div className="header">
				<img
					className="organization-logo"
					src={organization?.imageUrl}
					alt={`{organization.name}'s logo`}
				/>
				<p className="organization-name">{organization?.name}</p>
			</div>
			<p className="organization-description">{organization?.description}</p>
			<ul>
				{projectsByOrganization.map((project) => {
					return (
						<li className="project-button" key={project.id}>
							<Link
								to={`/organization/${organization.id}/project/${project.id}`}
							>
								{project.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
