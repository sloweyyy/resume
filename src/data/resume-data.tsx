import type { ResumeData } from "@/lib/types";
import { getStaticAvatarUrl } from "@/lib/dynamic-avatar";

export const RESUME_DATA: ResumeData = {
	name: "Truong Le Vinh Phuc",
	initials: "TP",
	location: "Ho Chi Minh city",
	locationLink:
		"https://www.google.com/maps/place/Ho+Chi+Minh+City,+Vietnam",
	about: "Product Engineer • Software Engineering, DevOps & Product",
	summary: (
		<>
			Product Engineer spanning software engineering, DevOps, and product
			management. Proven experience leading cross-functional teams and shipping
			end-to-end solutions — from architecture and infrastructure to roadmap
			and delivery. Strong background in Agile methodologies and translating
			technical complexity into business value across web, blockchain, and
			AI/ML domains.
		</>
	),
	avatarUrl: getStaticAvatarUrl(),
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
			degree: "Bachelor of Science in Software Engineering",
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
				"Product Engineering",
				"AI/LLM",
				"DevOps",
				"Product Owner",
			],
			title: "Product Engineer",
			start: "2025",
			end: null,
			description: (
				<>
					<ul className="list-inside list-disc">
						<li>
							Own the Katalon Support Assistant end-to-end as Product Owner and
							Engineering Lead — driving product vision, roadmap, scoping, and
							cross-team alignment while delivering the technical design and
							implementation
						</li>
						<li>
							Architect and ship a multi-agent LLM system (LangGraph, LangChain,
							Anthropic Claude) that routes queries across documentation, live
							web search, and Salesforce CRM, reducing support case volume by
							30%
						</li>
						<li>
							Build and operate AWS infrastructure (ECS, ALB, S3, DynamoDB,
							CloudFormation) with ArgoCD GitOps pipelines and separate QA/prod
							environments — handling deploy, observability, and on-call
						</li>
						<li>
							Design and ship additional internal and customer-facing AI tools
							that automate support workflows, knowledge-base authoring, and
							ticket triage for both employees and end users
						</li>
						<li>
							Instrument production observability — structured logging, LLM call
							tracing, Slack alerting, and post-conversation CSAT — and feed
							signals back into prompts, retrieval, and routing for continuous
							quality improvement
						</li>
						<li>
							Partner with Product, Engineering, and Account Management to
							translate customer feedback into prioritized backlog items, write
							PRDs and acceptance criteria, and run release planning
						</li>
						<li>
							Maintain and expand the knowledge base with high-value FAQs and
							support articles, strengthening customer self-service and AI
							retrieval quality
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
			],
			title: "Java Backend Developer Intern",
			start: "2024",
			end: "2025",
			description: (
				<>
					<ul className="list-inside list-disc">
						<li>
							Supported CI/CD improvements and streamlined deployment workflows
							for a Spring Boot API system
						</li>
						<li>
							Optimized PostgreSQL queries and improved system efficiency
							through performance-oriented fixes
						</li>
						<li>
							Worked in Agile/Scrum with Jira, contributing to sprint planning
							and delivery
						</li>
					</ul>
				</>
			),
		},
	],
	skills: [
		// Engineering
		"Go",
		".NET",
		"Java",
		"Node.js",
		"Python",
		"TypeScript",
		"React",
		"Next.js",
		"Spring Boot",
		"FastAPI",
		"gRPC",
		"Microservices",
		"Event-driven Systems",
		"System Design",
		// Cloud & DevOps
		"AWS (EKS/ECS/CloudFormation)",
		"Docker",
		"Kubernetes",
		"Helm",
		"Istio",
		"Terraform",
		"GitHub Actions",
		"ArgoCD",
		// Data
		"PostgreSQL",
		"MongoDB",
		"Redis",
		"Kafka",
		// AI / LLM
		"LangGraph",
		"LangChain",
		"Anthropic Claude",
		"Multi-agent Systems",
		"RAG",
		// Product
		"PRD Writing",
		"Roadmap Planning",
		"Agile/Scrum",
		"Stakeholder Communication",
		"Jira",
	],
	projects: [
		{
			title: "Katalon Support Assistant",
			link: {
				label: "assistant.katalon.com",
				href: "https://assistant.katalon.com",
			},
			techStack: [
				"Python",
				"FastAPI",
				"LangGraph",
				"Anthropic Claude",
				"Next.js",
				"AWS",
				"DynamoDB",
				"ArgoCD",
			],
			description:
				"Owned product and engineering for an internal AI support platform. Built a multi-agent LLM system routing queries across docs, web search, and Salesforce CRM, reducing support case volume by 30%. Deployed on AWS via CloudFormation and ArgoCD GitOps with full observability and CSAT feedback loops.",
		},
		{
			title: "llmfit – Web Dashboard for Hardware-Aware LLM Recommendation",
			link: {
				label: "github.com",
				href: "https://github.com/AlexsJones/llmfit",
			},
			techStack: [
				"React",
				"JavaScript",
				"CSS",
				"REST APIs",
				"Component Architecture",
				"Open Source",
				"Git",
				"GitHub",
			],
			description:
				"Contributed to llmfit-web, the dashboard of a 21k+ star open-source project for hardware-aware LLM model recommendation. Refactored a monolithic frontend into a modular component architecture with side-by-side model comparison, advanced filtering, and multi-theme support. Integrated UI with backend APIs to expose richer model metadata, runtime states, and download flows.",
		},
		{
			title: "Cloud-Native E-Commerce Platform",
			techStack: [
				"AWS EKS",
				"CloudFormation",
				"Kubernetes",
				"Helm",
				"Istio",
				".NET 8",
				"gRPC",
				"Prometheus",
			],
			description:
				"Architected AWS EKS infrastructure with CloudFormation IaC, multi-AZ deployment, auto-scaling, and IRSA-based zero-credential security. Built 19 Helm charts and GitHub Actions CI/CD with Trivy and CodeQL scanning. Designed 5 .NET microservices on Clean Architecture + CQRS with Istio mTLS service mesh and full Prometheus/Grafana/ELK/Jaeger observability.",
			link: {
				label: "github.com",
				href: "https://github.com/sloweyyy/cloud-native-ecommerce-platform",
			},
		},
		{
			title: "GreenLedger – Carbon Credit Management Platform",
			techStack: [
				"Go",
				"gRPC",
				"PostgreSQL",
				"Kafka",
				"Kubernetes",
				"Traefik",
				"Prometheus",
				"Grafana",
			],
			description:
				"Designed and deployed a microservices platform with 6 independent Go services for carbon credit management. Implemented JWT auth, RBAC, and Kafka event-driven messaging across services. Built production Kubernetes infrastructure with auto-scaling, full observability, and security-focused CI/CD pipelines with vulnerability scanning.",
			link: {
				label: "github.com",
				href: "https://github.com/sloweyyy/GreenLedger",
			},
		},
		{
			title: "Machine Learning Experiment Management",
			techStack: [
				"Flask",
				"Next.js",
				"React.js",
				"OpenCV",
				"TensorFlow",
				"WebSocket",
				"MySQL",
			],
			description:
				"Built a scalable ML experiment management system for MNIST classification with real-time training monitoring. Developed a web interface for hyperparameter configuration, run comparison, and sortable result tables. Implemented WebSocket-based live progress updates and a Flask backend orchestrating model training.",
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
				"Led backend development for a secure digital notarization platform on Ethereum smart contracts and NFT technology. Designed document authentication workflows and integrated tamper-proof record keeping across web and mobile clients. Managed a team of 10 with Agile methodology — won First Prize at IT Hackathon 2025.",
			link: {
				label: "github.com",
				href: "https://github.com/sloweyyy/Trustify-Backend",
			},
		},
	],
	certificates: [
		{
			name: "Applied Data Science Lab",
			issuer: "WorldQuant University",
			date: "Feb 2026",
			link: "https://www.credly.com/badges/25639ae0-6f15-4d7f-b69d-f343d502901d",
		},
		{
			name: "AWS Cloud Practitioner Essentials",
			issuer: "AWS",
			date: "Oct 2025",
			link: "https://www.coursera.org/account/accomplishments/verify/U135NA1X7RCI",
		},
		{
			name: "Katalon Expert Level Certification",
			issuer: "Katalon",
			date: "Mar 2025",
			link: "https://academy.katalon.com/mcertificate/67f7435bde1f4",
		},
		{
			name: "Developing AI Applications with Python and Flask",
			issuer: "IBM",
			date: "Feb 2025",
			link: "https://www.coursera.org/account/accomplishments/verify/3R8IYF472T6Z",
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
			name: "Google Project Management",
			issuer: "Google",
			date: "Aug 2024",
			link: "https://www.coursera.org/account/accomplishments/specialization/QHDX4GP53VT9",
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
			name: "Career Essentials In GitHub Professional Certificate",
			issuer: "LinkedIn",
			date: "May 2024",
		},
		{
			name: "Complete Guide To Apache Kafka",
			issuer: "LinkedIn",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/51e829b46de5a3927a332cd4261c0243ca4657099ea797169e0f8dd1dbbd65b8",
		},
		{
			name: "AWS Essential Training For Developers",
			issuer: "LinkedIn",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/89a52801acfc17eef35c5b30cdef3814ba9cc581769df6d0cb812e5b6289de64",
		},
		{
			name: "Agile Software Development",
			issuer: "LinkedIn",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/c4d2979167054d8518c4120b429c13c93537bb714be993dc9b669496b397b558",
		},
		{
			name: "Software Development Life Cycle (SDLC)",
			issuer: "LinkedIn",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/8868d0ed533902f52728d2f5425348933cb86584de4e0bdb7ce441845833538c",
		},
		{
			name: "Aha! Product Management Professional Certificate",
			issuer: "LinkedIn & Aha!",
			date: "May 2024",
			link: "https://www.linkedin.com/learning/certificates/e76eefcade4c7063399910e918af91d5357f31251ee8fe26611e052f3750a837",
		},
	],
	awards: [
		{
			title: "First Prize at IT Hackathon 2025 – Solana Pragmatic",
			issuer:
				"Youth Union – Student Association, Faculty of Computer Science and Engineering, International University – VNUHCM",
			date: "May 2025",
			description:
				"Won First Prize in the IT Hackathon 2025 (Solana Pragmatic track) with “Trustify,” a blockchain-powered online-notarization platform that leverages the Solana blockchain to mint NFT certificates, guaranteeing tamper-proof, transparent, and legally compliant remote notarization.",
		},
		{
			title: "Top 30 at Web3 HackFest 2025 – Web3 & AI Convergence",
			issuer: "VBI Academy",
			date: "Jan 2025",
			description:
				"Achieved Top 30 in the Web3 HackFest 2025 with “Trustify”, a decentralized platform developed for secure and transparent online notarization leveraging blockchain technology and AI.",
		},
		{
			title: "Consolation Prize at SEAPP Contest 2024",
			issuer: "Department of Software Engineering – UIT, VNUHCM",
			date: "Nov 2024",
			description:
				"Awarded the Consolation Prize for the project “Enigma – A Dropshipping Design and Sales Platform,” recognized as one of the top innovations. The platform showcased advanced mobile development, seamless integration of AI-powered machine learning, and e-commerce solutions, enabling efficient product customization, order management, and a user-friendly shopping experience.",
		},
		{
			title: "2nd Runner-up at GDSC IDEA CONTEST 2023: THiNK",
			issuer: "Google Developer Student Club – HCMUT",
			date: "Jun 2023",
			description:
				"Achieved Third Place in the GDSC IDEA CONTEST 2023 with “FutureConnect”, a platform designed to bridge the gap between students and businesses.",
		},
	],
} as const;
