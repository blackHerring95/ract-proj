//to import model...
import { Link } from "react-router-dom";
import { Project } from "../models/project.model"

//create your own interface for receiving parameters
//when invoking this compontent
export interface ProjectListItemProps {
    project: Project;
    index: number;
}

const ProjectListItem = ({ project, index }: ProjectListItemProps) => {

    return <div>
        {
            <div>
                <Link className="pt-2" to={`/projects/${project.id}`}>
                    {index}. {project.name}
                </Link>
            </div>
        }
    </div>
};

export default ProjectListItem;