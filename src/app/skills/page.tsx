import PageContainer from "~/components/PageContainer";

interface Skill {
    title: string;
    items: string[];
}

export default async function Skills() {
    const response = await fetch("http://localhost:3000/data/skills.json");
    const skills: Skill[] = await response.json();

    return (
        <PageContainer title="Skills">
            <ul className="flex flex-col gap-8">
                {skills.map((skill) => (
                    <li key={skill.title} className="flex flex-col gap-2">
                        <div className="text-prose-primary text-lg">📌 {skill.title}</div>
                        <div className="text-prose-seconday leading-8">{skill.items.join(", ")}.</div>
                    </li>
                ))}
            </ul>
        </PageContainer>
    );
}
