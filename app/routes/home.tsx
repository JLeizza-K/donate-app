import React from "react";
import { Form } from "react-router";
import * as v from "valibot";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "DonateApp" },
		{ name: "description", content: "Bienvenid@ a DonateApp!" },
	];
}

const FoundationSchema = v.object({
	id: v.number(),
	name: v.string(),
	description: v.string(),
});

const ProjectSchema = v.object({
	id: v.number(),
	foundationId: v.number(),
	title: v.string(),
	description: v.string(),
});

type FoundationType = v.InferOutput<typeof FoundationSchema>;

export async function action({ request }: Route.LoaderArgs) {
	const formData = await request.formData();
	const foundationId = formData.get("foundationId");
	const url = new URL(request.url);

	if (!foundationId) {
		return { error: "foundationId does not exist" };
	}

	url.searchParams.set("foundation", JSON.stringify(foundationId));
}
export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const foundationsResponse = await fetch(`${url.origin}/foundations`);

	if (!foundationsResponse) {
		throw new Error("Didn't connect to the route organizations");
	}

	const data = await foundationsResponse.json();
	const foundations = v.parse(v.array(FoundationSchema), data.foundations);

	return { foundations };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { foundations } = loaderData;

	return (
		<>
			<h1 className="main-title">Bienvenidos a DonateApp</h1>
			{foundations.map((foundation: FoundationType) => {
				return (
					<Form key={foundation.id}>
						<input
							type="hidden"
							name="foundationId"
							value={foundation.id}
						></input>
						<button type="submit" className="foundation">
							{foundation.name}
						</button>
					</Form>
				);
			})}
		</>
	);
}
