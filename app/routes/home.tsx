import React from "react";
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

type ProjectType = v.InferOutput<typeof ProjectSchema>;

export async function loader({ request }: Route.LoaderArgs) {
	const [foundations, projects] = await Promise.all([
		fetch("http://localhost:5173/foundations")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				return data.foundations.map((foundation: FoundationType) => {
					return v.parse(FoundationSchema, foundation);
				});
			}),
		fetch("http://localhost:5173/projects")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				return data.projects.map((project: ProjectType) => {
					return v.parse(ProjectSchema, project);
				});
			}),
	]);
	return { foundations, projects };
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { foundations, projects } = loaderData;

	return (
		<>
			<h1 className="main-title">Bienvenidos a DonateApp</h1>
			{foundations.map((foundation: FoundationType) => {
				return (
					<React.Fragment key={foundation.id}>
						<button type="button" className="foundation">
							{foundation.name}
						</button>
					</React.Fragment>
				);
			})}
		</>
	);
}
