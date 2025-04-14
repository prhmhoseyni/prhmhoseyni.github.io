import PageContainer from "~/components/PageContainer";
import Link from "next/link";
import Image from "next/image";

interface Project {
    href: string;
    title: string;
    subtitle: string;
    src: string;
}

export default async function Projects() {
    const response = await fetch("http://localhost:3000/data/projects.json");
    const projects: Project[] = await response.json();

    return (
        <PageContainer title="Projects">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <li key={project.title}>
                        <div className="flex flex-col">
                            <figure className="relative w-full h-40">
                                <Image src={project.src} alt={project.title} fill className="object-contain object-left" />
                            </figure>

                            <Link href={project.href} className="mt-4 flex items-center gap-2 text-brand text-xl font-bold">
                                {project.title}

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    className="fill-brand"
                                >
                                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                                </svg>
                            </Link>

                            <p>{project.subtitle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </PageContainer>
    );
}
