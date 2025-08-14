"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Certificate = (typeof RESUME_DATA)["certificates"][number];

interface CertificateItemProps {
	certificate: Certificate;
}

/**
 * Individual certificate card component
 */
function CertificateItem({ certificate }: CertificateItemProps) {
	const { name, issuer, date, link } = certificate;

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between gap-x-2 text-base">
					<h3
						className="font-semibold leading-none"
						id={`certificate-${name.toLowerCase().replace(/\s+/g, "-")}`}
					>
						{link ? (
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-x-1 underline decoration-dotted underline-offset-2 hover:text-blue-600"
							>
								{name}
								<svg
									className="size-3"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						) : (
							name
						)}
					</h3>
					<div className="text-sm tabular-nums text-muted-foreground">
						{date}
					</div>
				</div>
			</CardHeader>
			<CardContent
				className="mt-2 text-foreground/80 print:text-[12px]"
				aria-labelledby={`certificate-${name
					.toLowerCase()
					.replace(/\s+/g, "-")}`}
			>
				{issuer}
			</CardContent>
		</Card>
	);
}

interface CertificatesListProps {
	certificates: readonly Certificate[];
}

/**
 * Main certificates section component
 * Renders a list of certificates with show more/less functionality
 */
export function Certificates({ certificates }: CertificatesListProps) {
	const [showAll, setShowAll] = useState(false);

	if (!certificates || certificates.length === 0) {
		return null;
	}

	const INITIAL_COUNT = 3;
	const displayedCertificates = showAll
		? certificates
		: certificates.slice(0, INITIAL_COUNT);
	const hasMore = certificates.length > INITIAL_COUNT;

	return (
		<Section>
			<h2 className="text-xl font-bold" id="certificates-section">
				Certificates
			</h2>
			<div
				className="space-y-4"
				role="feed"
				aria-labelledby="certificates-section"
			>
				{displayedCertificates.map((item) => (
					<article key={item.name}>
						<CertificateItem certificate={item} />
					</article>
				))}
			</div>

			{hasMore && (
				<div className="mt-4 print:hidden">
					<Button
						variant="outline"
						onClick={() => setShowAll(!showAll)}
						className="w-full text-sm"
						aria-expanded={showAll}
						aria-controls="certificates-section"
					>
						{showAll ? (
							<>
								Show Less
								<svg
									className="ml-2 size-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 15l7-7 7 7"
									/>
								</svg>
							</>
						) : (
							<>
								Show More ({certificates.length - INITIAL_COUNT} more)
								<svg
									className="ml-2 size-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</>
						)}
					</Button>
				</div>
			)}
		</Section>
	);
}
