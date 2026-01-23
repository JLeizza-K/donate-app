import { Link } from "react-router";
import * as v from "valibot";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "DonateApp" },
		{ name: "description", content: "Bienvenid@ a DonateApp!" },
	];
}

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

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const organizationsResponse = await fetch(`${url.origin}/organizations`);

	if (!organizationsResponse) {
		throw new Error("Didn't connect to the route organizations");
	}

	const data = v.parse(
		OrganizationsResponseSchema,
		await organizationsResponse.json(),
	);

	const organizations = v.parse(
		v.array(OrganizationSchema),
		data.organizations,
	);

	return { organizations };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { organizations } = loaderData;

	return (
		<>
			<h1 className="main-title">Bienvenidos a DonateApp</h1>
			<ul>
				{organizations.map((organization: OrganizationType) => {
					return (
						<li key={organization.id} className="organization-home-button">
							<Link
								key={organization.id}
								to={`/organization/${organization.id}`}
							>
								{organization.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
