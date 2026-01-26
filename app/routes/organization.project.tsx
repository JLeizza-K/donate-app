import { loadMercadoPago } from "@mercadopago/sdk-js";
import * as v from "valibot";
import {
	OrganizationSchema,
	OrganizationsResponseSchema,
	type OrganizationType,
} from "~/common/schemas/organization.schema.type";
import {
	ProjectResponseSchema,
	ProjectSchema,
	type ProjectType,
} from "~/common/schemas/project.schema.type";
import { fetchData } from "~/common/utils/fetchData";
import type { Route } from "./+types/organization.project";


export async function loader({ params, request }: Route.LoaderArgs) {
	const { organizationId, projectId } = params;
	const url = new URL(request.url);
	await loadMercadoPago()
	
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

	const project = projects.find((project: ProjectType) => {
		return String(project.id) === String(projectId);
	});

	return { organization, project };
}

export default function OrganizationProject({
	loaderData,
}: Route.ComponentProps) {
	const { organization, project } = loaderData;

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
			<p className="project-title">{project?.title}</p>
			<p className="project-description">{project?.description}</p>
			<div className="donations-container">
				<button type="button">$1000</button>
				<button type="button">$3000</button>
				<button type="button">$5000</button>
				<button type="button">$10000</button>
			</div>
		</div>
	);
}
