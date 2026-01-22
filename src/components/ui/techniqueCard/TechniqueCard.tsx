import type { Technique } from "@/types/common/technique";

import "./TechniqueCard.css";
import { Button } from "@/components/ui";

interface TechniqueCardProps {
    technique: Technique;
}

export const TechniqueCard = ({ technique }: TechniqueCardProps) => {
    return (
        <article className="card">
            <header className="card-header">
                <span>{technique.proficiency}</span>
                <h3 className="technique-name">{technique.name}</h3>
                <span>
                    {technique.position} • {technique.type}
                </span>
            </header>
            <footer className="card-footer">
                <p>Practiced 2 days ago</p>
                <Button className="card-button">Practiced</Button>
            </footer>
        </article>
    );
};
