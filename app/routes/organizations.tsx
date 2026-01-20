import type { Route } from "./+types/organizations";

export async function loader({ request }: Route.LoaderArgs) {
	const ORGANIZATIONS = [
		{
			id: 1,
			name: "Greenpeace",
			description:
				"Independent global campaigning network that uses peaceful protest to expose global environmental problems.",
			imageUrl:
				"https://victoryeste.com/wp-content/uploads/2021/03/greenpeace-1.jpg",
		},
		{
			id: 2,
			name: "Doctors Without Borders",
			description:
				"Provides medical assistance to people affected by conflict, epidemics, disasters, or exclusion from healthcare.",
			imageUrl:
				"https://www.msf.org.ar/wp-content/uploads/sites/3/2024/01/foto-logo-saradlr-2.png",
		},
		{
			id: 3,
			name: "World Wildlife Fund (WWF)",
			description:
				"The leading organization in wildlife conservation and endangered species protection.",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsBTL5aiW_sR_QgI9KVSOVVJ8uK8I6ncZ4w&s",
		},
		{
			id: 4,
			name: "Save the Children",
			description:
				"Global organization dedicated to improving the lives of children through better education, health care, and economic opportunities.",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGqv0b2j-rvktWupTw_iOLoKNNXktFlPaLQ&s",
		},
		{
			id: 5,
			name: "Unicef",
			description:
				"Works in over 190 countries and territories to save children's lives, to defend their rights, and to help them fulfill their potential.",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkkRztaQtoEB5aTpimSEPa9t3KMD4Mjab5Q&s",
		},
		{
			id: 6,
			name: "Amnesty International",
			description:
				"A global movement of more than 10 million people who take injustice personally.",
			imageUrl:
				"https://www.escr-net.org/es/wp-content/uploads/sites/2/2015/06/niwj1nyd.jpeg",
		},
		{
			id: 7,
			name: "Red Cross",
			description:
				"Providing emergency assistance, disaster relief, and health education worldwide.",
			imageUrl:
				"https://elordenmundial.com/wp-content/uploads/2022/05/Que-es-la-Cruz-Roja-y-como-brinda-ayuda-humanitaria-en-el-mundo.png",
		},
		{
			id: 8,
			name: "Habitat for Humanity",
			description:
				"Helps families build and improve places to call home through affordable housing solutions.",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fhG7cq_Z7xydHmJCgnEwwLSOT4fqsR16hQ&s",
		},
		{
			id: 9,
			name: "Make-A-Wish Foundation",
			description:
				"Creates life-changing wishes for children with critical illnesses.",
			imageUrl:
				"https://worldwish.org/wp-content/uploads/2025/03/Social-image-1.jpg",
		},
		{
			id: 10,
			name: "Bill & Melinda Gates Foundation",
			description:
				"Works to help all people lead healthy, productive lives by fighting poverty, disease, and inequity.",
			imageUrl:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0s9Rf2oXqeP4WLB_9I3iFb7EYIw6RZXtzXw&s",
		},
	];

	return { organizations: ORGANIZATIONS };
}
