import type { Route } from "./+types/foundations";

export async function loader({ request }: Route.LoaderArgs) {
	const FOUNDATIONS = [
		{
			id: 1,
			name: "Fundación Raíces",
			description: "Promotes community development and social inclusion.",
		},
		{
			id: 2,
			name: "Fundación Horizonte",
			description: "Supports educational projects and job training programs.",
		},
		{
			id: 3,
			name: "Fundación Vida Verde",
			description:
				"Works for environmental conservation and sustainable development.",
		},
		{
			id: 4,
			name: "Fundación Futuro Digital",
			description: "Encourages access to technology and digital literacy.",
		},
		{
			id: 5,
			name: "Fundación Manos Unidas",
			description:
				"Provides social and food support to vulnerable communities.",
		},
		{
			id: 6,
			name: "Fundación Salud para Todos",
			description: "Promotes prevention and access to healthcare.",
		},
		{
			id: 7,
			name: "Fundación Arte Vivo",
			description: "Supports community-based cultural and artistic projects.",
		},
		{
			id: 8,
			name: "Fundación Puentes",
			description:
				"Facilitates social and educational integration of young people.",
		},
		{
			id: 9,
			name: "Fundación Agua Clara",
			description: "Works to ensure access to clean water and sanitation.",
		},
		{
			id: 10,
			name: "Fundación Camino",
			description: "Supports social and job reintegration processes.",
		},
	];

	return { foundations: FOUNDATIONS };
}
