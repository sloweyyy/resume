import React from "react";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Award = (typeof RESUME_DATA)["awards"][number];

interface AwardItemProps {
	award: Award;
}

function AwardItem({ award }: AwardItemProps) {
	const { title, issuer, date, link } = award;
	const slug = title.toLowerCase().replace(/\s+/g, "-");

	return (
		<div className="flex items-baseline justify-between gap-x-2 text-sm">
			<div className="min-w-0 flex-1">
				<span className="font-medium" id={`award-${slug}`}>
					{link ? (
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="underline decoration-dotted underline-offset-2 hover:text-blue-600"
						>
							{title}
						</a>
					) : (
						title
					)}
				</span>
				<span className="text-muted-foreground"> — {issuer}</span>
			</div>
			<span className="shrink-0 tabular-nums text-muted-foreground">
				{date}
			</span>
		</div>
	);
}

interface AwardsListProps {
	awards: readonly Award[];
}

export function Awards({ awards }: AwardsListProps) {
	if (!awards || awards.length === 0) {
		return null;
	}

	return (
		<Section className="print:hidden">
			<h2 className="text-xl font-bold" id="awards-section">
				Awards
			</h2>
			<div
				className="space-y-1"
				role="feed"
				aria-labelledby="awards-section"
			>
				{awards.map((item) => (
					<AwardItem key={item.title} award={item} />
				))}
			</div>
		</Section>
	);
}
