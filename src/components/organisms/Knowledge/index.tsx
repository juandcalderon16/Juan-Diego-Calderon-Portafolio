import React from 'react';
import CardKnowledge from '@/components/molecules/CardKnowledge/index';
import TitleKnowledge from '@/components/molecules/TitleKnowledge/index';

const features = [
	{
		title: 'Desarrollo Frontend',
		text: 'Experiencia con React, Next.js, TypeScript, Tailwind CSS y diseño responsive.',
		icon: 'material-symbols:code',
	},
	{
		title: 'Desarrollo Backend',
		text: 'Node.js, Express, bases de datos relacionales y no relacionales (MongoDB, PostgreSQL).',
		icon: 'material-symbols:cloud',
	},
	{
		title: 'Control de Versiones',
		text: 'Uso avanzado de Git y GitHub para control y colaboración en proyectos.',
		icon: 'material-symbols:sync',
	},
	{
		title: 'Metodologías Ágiles',
		text: 'Trabajo en equipos Scrum y Kanban, enfoque en entrega continua y mejora constante.',
		icon: 'material-symbols:check-circle',
	},
	{
		title: 'Testing',
		text: 'Pruebas unitarias y de integración con Jest y React Testing Library.',
		icon: 'material-symbols:checklist',
	},
	{
		title: 'Inglés',
		text: 'Nivel intermedio para lectura técnica y comunicación básica en proyectos internacionales.',
		icon: 'material-symbols:language',
	},
];

const Index = () => {
	return (
		<div className='flex flex-col gap-10 w-[970px]'>
			<TitleKnowledge />
			<div className='flex flex-row flex-wrap items-center justify-center gap-5'>
				{features.map((feature) => (
					<CardKnowledge
						key={feature.title}
						title={feature.title}
						text={feature.text}
						icon={feature.icon}
					/>
				))}
			</div>
		</div>
	);
};

export default Index;