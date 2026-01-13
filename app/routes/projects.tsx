import type { Route } from "./+types/foundations";

export async function loader({ request }: Route.LoaderArgs) {
	const PROJECTS = [
		{
			id: 101,
			foundationId: 1,
			title: "Huertas Comunitarias",
			description:
				"Creación de huertas urbanas para mejorar la alimentación local.",
		},
		{
			id: 102,
			foundationId: 1,
			title: "Talleres de Oficios",
			description: "Capacitación en oficios para vecinos del barrio.",
		},

		{
			id: 103,
			foundationId: 2,
			title: "Becas de Estudio",
			description: "Otorgamiento de becas para jóvenes de bajos recursos.",
		},
		{
			id: 104,
			foundationId: 2,
			title: "Centro de Capacitación",
			description: "Espacio para formación en habilidades laborales.",
		},
		{
			id: 105,
			foundationId: 2,
			title: "Mentorías Profesionales",
			description: "Acompañamiento de estudiantes por profesionales.",
		},

		{
			id: 106,
			foundationId: 3,
			title: "Reforestación Urbana",
			description: "Plantación de árboles en zonas urbanas.",
		},
		{
			id: 107,
			foundationId: 3,
			title: "Educación Ambiental",
			description: "Charlas y talleres sobre cuidado del ambiente.",
		},

		{
			id: 108,
			foundationId: 4,
			title: "Aulas Digitales",
			description: "Equipamiento tecnológico para escuelas.",
		},
		{
			id: 109,
			foundationId: 4,
			title: "Programar es Futuro",
			description: "Cursos introductorios de programación.",
		},

		{
			id: 110,
			foundationId: 5,
			title: "Comedores Solidarios",
			description: "Apoyo a comedores comunitarios.",
		},
		{
			id: 111,
			foundationId: 5,
			title: "Red de Voluntarios",
			description: "Organización de voluntariado social.",
		},
		{
			id: 112,
			foundationId: 5,
			title: "Donación de Ropa",
			description: "Recolección y distribución de ropa.",
		},

		{
			id: 113,
			foundationId: 6,
			title: "Clínicas Móviles",
			description: "Atención médica en zonas alejadas.",
		},
		{
			id: 114,
			foundationId: 6,
			title: "Campañas de Vacunación",
			description: "Promoción de la vacunación preventiva.",
		},

		{
			id: 115,
			foundationId: 7,
			title: "Escuela de Arte",
			description: "Talleres de pintura, música y teatro.",
		},
		{
			id: 116,
			foundationId: 7,
			title: "Festivales Barriales",
			description: "Eventos culturales en barrios.",
		},

		{
			id: 117,
			foundationId: 8,
			title: "Tutorías Escolares",
			description: "Apoyo educativo para estudiantes.",
		},
		{
			id: 118,
			foundationId: 8,
			title: "Puente al Trabajo",
			description: "Orientación laboral para jóvenes.",
		},

		{
			id: 119,
			foundationId: 9,
			title: "Pozos de Agua",
			description: "Construcción de pozos en comunidades rurales.",
		},
		{
			id: 120,
			foundationId: 9,
			title: "Filtros Familiares",
			description: "Entrega de filtros de agua potable.",
		},

		{
			id: 121,
			foundationId: 10,
			title: "Capacitación Laboral",
			description: "Cursos para reinserción laboral.",
		},
		{
			id: 122,
			foundationId: 10,
			title: "Acompañamiento Social",
			description: "Seguimiento y apoyo personalizado.",
		},
	];
    return {projects: PROJECTS}
}
