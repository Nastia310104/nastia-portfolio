import ProjectPage from "@/components/ProjectPage";

type ProjectsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ProjectsPage({
  params,
}: ProjectsPageProps) {
  return <ProjectPage params={params} />;
}