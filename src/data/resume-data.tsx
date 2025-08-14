import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
	name: "Truong Le Vinh Phuc",
	initials: "TP",
	location: "Di An, Binh Duong",
	locationLink: "https://www.google.com/maps/place/Di+An,+Binh+Duong,+Vietnam",
	about:
		"Versatile DevOps/Software Engineer skilled in Java, .NET, Node.js, Python, and cloud-native development.",
	summary: (
		<>
			Versatile DevOps/Software Engineer skilled in Java, .NET, Node.js, Python,
			and cloud-native development. Experienced in designing microservices,
			DevOps automation, CI/CD, and real-time data systems using Docker,
			Kubernetes, Kafka, and Prometheus. Strong record of leading teams and
			delivering end-to-end solutions across web, blockchain, and AI/ML
			projects.
		</>
	),
	avatarUrl: "https://avatars.githubusercontent.com/u/37492460?v=4",
	personalWebsiteUrl: "https://slowey.dev",
	contact: {
		email: "truonglevinhphuc2006@gmail.com",
		tel: "+84 367 855 090",
		social: [
			{
				name: "GitHub",
				url: "https://github.com/sloweyyy",
				icon: "github",
			},
			{
				name: "LinkedIn",
				url: "https://linkedin.com/in/sloweyne",
				icon: "linkedin",
			},
		],
	},
	education: [
		{
			school:
				"University of Information Technology - Vietnam National University, Ho Chi Minh city",
			degree: "Bachelor of Software Engineering",
			start: "2022",
			end: "2026",
		},
	],
	work: [
		{
			company: "KATALON",
			link: "https://katalon.com/",
			badges: [
				"On-site/Remote",
				"Product Support",
				"AI",
				"Testing",
				"Research",
			],
			title: "AI Product Support Engineer",
			start: "2025",
			end: null,
			description: (
				<>
					<ul className="list-inside list-disc">
						<li>
							Respond to customer inquiries, troubleshoot technical issues, and
							provide timely solutions
						</li>
						<li>
							Collaborate with cross-functional teams, including Product,
							Engineering, and Account Management, to improve the product and
							address customer needs
						</li>
						<li>
							Maintain and expand the knowledge base with FAQs and support
							articles for better customer self-service
						</li>
						<li>
							Work on enhancing product functionality by gathering feedback and
							suggesting improvements
						</li>
						<li>
							Contribute to a new AI project, exploring innovative solutions to
							improve support and automation
						</li>
						<li>
							Stay up to date with new features and technologies to provide the
							best support experience
						</li>
					</ul>
				</>
			),
		},
		{
			company: "FPT SOFTWARE",
			link: "https://www.fpt-software.com/",
			badges: [
				"On-site",
				"Java",
				"Spring Boot",
				"PostgreSQL",
				"CI/CD",
				"Scrum Master",
			],
			title: "Java Backend Developer Intern",
			start: "2024",
			end: "2025",
			description: (
				<>
					<ul className="list-inside list-disc">
						<li>
							Led a team of 7 as Scrum Master to develop RESTful APIs for an
							online course platform using Spring Boot
						</li>
						<li>
							Optimized PostgreSQL database performance, enhancing system
							efficiency
						</li>
						<li>Streamlined deployment processes using CI/CD pipelines</li>
					</ul>
				</>
			),
		},
	],
	skills: [
		"Go",
		".NET Core",
		"Java",
		"Spring Boot",
		"Node.js",
		"NestJS",
		"React.js",
		"Next.js",
		"Python",
		"Flask",
		"FastAPI",
		"Docker",
		"Kubernetes",
		"Helm",
		"Istio",
		"Traefik",
		"PostgreSQL",
		"MongoDB",
		"Redis",
		"Kafka",
		"RabbitMQ",
		"Prometheus",
		"Grafana",
		"ELK Stack",
		"GitHub Actions",
		"CI/CD",
		"gRPC",
		"Microservices",
		"OAuth2",
		"JWT",
		"Blockchain",
		"Solidity",
		"Ethereum",
		"Team Leadership",
	],
	projects: [
		{
			title: "GreenLedger – Carbon Credit Management Platform",
			techStack: [
				"Go",
				"Gin",
				"gRPC",
				"PostgreSQL",
				"Redis",
				"Kafka",
				"Docker",
				"Kubernetes",
				"Traefik",
				"Prometheus",
				"Grafana",
				"GitHub Actions",
			],
			description:
				"Designed, developed, and deployed a DevOps-ready, microservices-based platform for carbon credit management and environmental impact tracking. Architected six independent Go microservices with clean architecture, JWT authentication, RBAC, and Kafka-powered event-driven messaging.",
			link: {
				label: "github.com",
				href: "https://github.com/sloweyyy/GreenLedger",
			},
		},
		{
			title: "Cloud-Native E-Commerce Platform",
			techStack: [
				".NET Core",
				"RabbitMQ",
				"MongoDB",
				"Redis",
				"PostgreSQL",
				"SQL Server",
				"Ocelot",
				"Docker",
				"Kubernetes",
				"Helm",
				"Istio",
				"ELK Stack",
				"Prometheus",
				"Grafana",
				"IdentityServer4",
			],
			description:
				"Designed and implemented a cloud-native e-commerce platform using modern microservices architecture. Built five independent microservices with event-driven communication, polyglot persistence, and centralized API Gateway with Istio service mesh.",
			link: {
				label: "github.com",
				href: "https://github.com/sloweyyy/cloud-native-ecommerce-platform",
			},
		},
		{
			title: "Machine Learning Experiment Management",
			techStack: ["Flask", "Next.js", "React.js", "OpenCV", "TensorFlow"],
			description:
				"Developed a scalable ML experiment management system for MNIST classification tasks with real-time training progress monitoring using WebSocket, customizable hyperparameters, and sortable result comparison tables.",
			link: {
				label: "github.com",
				href: "https://github.com/sloweyyy/ExperimentHub",
			},
		},
		{
			title: "Blockchain-based Online Notarization Platform",
			techStack: [
				"React.js",
				"Node.js",
				"React Native",
				"Firebase",
				"MongoDB",
				"Ethereum",
				"Solidity",
				"Alchemy",
			],
			description:
				"Developed a Blockchain-based Online Notarization Platform offering secure digital notarization services. Leveraged Ethereum blockchain with Solidity smart contracts and NFT technology for document authenticity and ownership verification.",
			link: {
				label: "github.com",
				href: "https://github.com/sloweyyy/Trustify-Backend",
			},
		},
		{
			title: "Resort Management System",
			techStack: [
				"NestJS",
				"React.js",
				"MongoDB",
				"Railway",
				"Netlify",
				"GitHub Actions",
				"Jest",
			],
			description:
				"Led team development of a scalable Resort Management System using NestJS and MongoDB. Implemented JWT authentication, Google OAuth 2.0, PayOS payment integration, and comprehensive management features for reservations, rooms, billing, and employees.",
			link: {
				label: "github.com",
				href: "https://github.com/FiveD-SE/ResortManagementSystem-BE",
			},
		},
		{
			title: "T-Shirt and Tote Bag Design Platform Powered by AI",
			techStack: ["React Native", "Node.js", "Firebase", "Railway"],
			description:
				"Developed an intuitive design tool for creating custom t-shirts and tote bags, integrating Stable Diffusion API for AI-generated product features. Built a robust e-commerce platform with product listings, orders, and sales tracking.",
			link: {
				label: "github.com",
				href: "https://github.com/FiveD-SE/Enigma-Frontend",
			},
		},
	],
	certificates: [
		{
			name: "Aha! Product Management Professional Certificate",
			issuer: "LinkedIn & Aha!",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/e76eefcade4c7063399910e918af91d5357f31251ee8fe26611e052f3750a837",
		},
		{
			name: "Google Project Management",
			issuer: "Google",
			date: "Aug 2024",
			link: "https://www.coursera.org/account/accomplishments/specialization/QHDX4GP53VT9",
		},
		{
			name: "Agile Software Development",
			issuer: "LinkedIn",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/c4d2979167054d8518c4120b429c13c93537bb714be993dc9b669496b397b558",
		},
		{
			name: "AWS Essential Training For Developers",
			issuer: "LinkedIn",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/89a52801acfc17eef35c5b30cdef3814ba9cc581769df6d0cb812e5b6289de64",
		},
		{
			name: "Software Development Life Cycle (SLDC)",
			issuer: "LinkedIn",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/8868d0ed533902f52728d2f5425348933cb86584de4e0bdb7ce441845833538c",
		},
		{
			name: "Katalon Expert Level Certification",
			issuer: "Katalon",
			date: "Mar 2025",
			link: "https://academy.katalon.com/mcertificate/67f7435bde1f4",
		},
		{
			name: "Hands-on Introduction to Linux Commands and Shell Scripting",
			issuer: "IBM",
			date: "Feb 2025",
			link: "https://www.coursera.org/account/accomplishments/verify/GCRBNMIPY2BL",
		},
		{
			name: "Python for Data Science, AI & Development",
			issuer: "IBM",
			date: "Feb 2025",
			link: "https://www.coursera.org/account/accomplishments/verify/I1CAESQS26K7",
		},
		{
			name: "Developing AI Applications with Python and Flask",
			issuer: "IBM",
			date: "Feb 2025",
			link: "https://www.coursera.org/account/accomplishments/verify/3R8IYF472T6Z",
		},
		{
			name: "Developing Back-End Apps with Node.js and Express",
			issuer: "IBM",
			date: "Dec 2024",
			link: "https://www.coursera.org/account/accomplishments/verify/1AB26J2N5Z75",
		},
		{
			name: "Developing Front-End Apps with React",
			issuer: "IBM",
			date: "Nov 2024",
			link: "https://www.coursera.org/account/accomplishments/verify/S20V58OFUIKA",
		},
		{
			name: "Master Web & Mobile Design: Figma, UI/UX Essentials",
			issuer: "Udemy",
			date: "Aug 2024",
			link: "https://www.udemy.com/certificate/UC-38f667a7-4599-45fb-bb79-fe591882eeec/",
		},
		{
			name: "Frontend Developer (React) Certificate",
			issuer: "HackerRank",
			date: "Jul 2024",
			link: "https://www.hackerrank.com/certificates/5ba8b825963b",
		},
		{
			name: "Software Engineer Certificate",
			issuer: "HackerRank",
			date: "Jul 2024",
			link: "https://www.hackerrank.com/certificates/321a6aee56e6",
		},
		{
			name: "Data Science Math Skills",
			issuer: "Duke University",
			date: "Jul 2024",
			link: "https://www.coursera.org/account/accomplishments/verify/YE7MSQ8K4UEG",
		},
		{
			name: "Getting Started With Microservices",
			issuer: "LinkedIn",
			date: "Jun 2024",
			link: "https://www.linkedin.com/learning/certificates/60a36c85a8bef42d2c84daf89fe7038c45faba19f7b353821f8d64bda545957b",
		},
		{
			name: "Complete Guide To Apache Kafka",
			issuer: "LinkedIn",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/51e829b46de5a3927a332cd4261c0243ca4657099ea797169e0f8dd1dbbd65b8",
		},
	],
} as const;
