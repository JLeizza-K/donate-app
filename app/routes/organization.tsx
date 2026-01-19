import { Link } from "react-router";
import * as v from "valibot";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "DonateApp" },
		{ name: "description", content: "Bienvenid@ a DonateApp!" },
	];
}

export async function loader({ request }: Route.LoaderArgs) {
	const url = new URL(request.url);
	const params = url.searchParams.get("organization");
	console.log(params);
}

export default function Home({ loaderData }: Route.ComponentProps) {
	return <div>Hola</div>;
}
