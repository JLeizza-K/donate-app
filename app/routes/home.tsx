import { Link } from "react-router";
import * as v from "valibot";
import { fetchData } from "~/common/utils/fetchData";
import {
	OrganizationSchema,
	OrganizationsResponseSchema,
	type OrganizationType,
} from "../common/schemas/organization.schema.type";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "DonateApp" },
		{ name: "description", content: "Welcome to DonateApp!" },
	];
}

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const organizations = await fetchData(
		`${url.origin}/organizations`,
		OrganizationsResponseSchema,
		v.array(OrganizationSchema),
		"organizations",
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
