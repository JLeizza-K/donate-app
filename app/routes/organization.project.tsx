import type { Route } from "./+types/organization.project";

export async function loader({ params }: Route.LoaderArgs) {
	const { organizationId, projectId } = params;

	return { organizationId, projectId };
}

export default function OrganizationProject({
	loaderData,
}: Route.ComponentProps) {
	return (
		<div>
			<h1>Project {loaderData.projectId}</h1>
			<p>Organization: {loaderData.organizationId}</p>
		</div>
	);
}
