import type { Route } from "./+types/projects";

export async function loader({ request }: Route.LoaderArgs) {
	const PROJECTS = [
		{
			id: 101,
			organizationId: 1,
			title: "Protect the Oceans",
			description:
				"Campaigning for a global network of marine sanctuaries to protect biodiversity.",
		},
		{
			id: 102,
			organizationId: 1,
			title: "Renewable Energy Revolution",
			description:
				"Promoting the transition from fossil fuels to 100% renewable energy sources.",
		},

		{
			id: 103,
			organizationId: 2,
			title: "Emergency Medical Response",
			description:
				"Rapid deployment of medical teams to conflict zones and natural disaster areas.",
		},
		{
			id: 104,
			organizationId: 2,
			title: "Vaccination Campaigns",
			description:
				"Mass immunization programs to prevent outbreaks of measles, cholera, and meningitis.",
		},

		{
			id: 105,
			organizationId: 3,
			title: "Save the Tigers",
			description:
				"Working across landscapes to double the number of wild tigers worldwide.",
		},
		{
			id: 106,
			organizationId: 3,
			title: "Climate Action Policy",
			description:
				"Advocating for global policies to limit global warming to 1.5°C.",
		},

		{
			id: 107,
			organizationId: 4,
			title: "Every Child Reads",
			description:
				"Literacy programs to ensure children gain basic reading skills in early grades.",
		},
		{
			id: 108,
			organizationId: 4,
			title: "Child Protection Systems",
			description:
				"Creating safe environments to protect children from violence and exploitation.",
		},

		{
			id: 109,
			organizationId: 5,
			title: "WASH (Water & Sanitation)",
			description:
				"Providing clean water and basic toilets to keep children healthy and in school.",
		},
		{
			id: 110,
			organizationId: 5,
			title: "Global Nutrition Program",
			description:
				"Treating severe acute malnutrition and promoting healthy growth for infants.",
		},

		{
			id: 111,
			organizationId: 6,
			title: "Write for Rights",
			description:
				"The world's biggest letter-writing campaign to free prisoners of conscience.",
		},
		{
			id: 112,
			organizationId: 6,
			title: "Human Rights Education",
			description:
				"Training youth leaders to defend human rights in their own communities.",
		},

		{
			id: 113,
			organizationId: 7,
			title: "Blood Donation Drives",
			description:
				"Organizing community events to maintain critical blood supplies for hospitals.",
		},
		{
			id: 114,
			organizationId: 7,
			title: "First Aid Training",
			description:
				"Empowering citizens with life-saving skills through certified workshops.",
		},

		{
			id: 115,
			organizationId: 8,
			title: "Home Build Challenge",
			description:
				"Volunteers helping families build their own homes from the ground up.",
		},
		{
			id: 116,
			organizationId: 8,
			title: "Urban Slum Upgrading",
			description:
				"Improving infrastructure and safety in overcrowded informal settlements.",
		},

		{
			id: 117,
			organizationId: 9,
			title: "The Wish Journey",
			description:
				"Coordinating unique experiences for children facing life-threatening illnesses.",
		},
		{
			id: 118,
			organizationId: 9,
			title: "Wish Granting Volunteers",
			description:
				"Training community members to help identify and fulfill child wishes.",
		},

		{
			id: 119,
			organizationId: 10,
			title: "Polio Eradication",
			description:
				"Final push to eliminate polio worldwide through surveillance and vaccination.",
		},
		{
			id: 120,
			organizationId: 10,
			title: "Agricultural Development",
			description:
				"Supporting smallholder farmers with tools to increase crop yields and income.",
		},
	];
	return { projects: PROJECTS };
}
