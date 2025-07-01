import { caseStudies } from "@/app/_data/projects";
import ProjectDetails from "../_components/ProjectDetails";
import { notFound } from "next/navigation";
import FeaturedProjects from "@/app/_components/FeaturedProjects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);
  console.log(project);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <ProjectDetails project={project} />
      <FeaturedProjects/>
    </>
  );
}
