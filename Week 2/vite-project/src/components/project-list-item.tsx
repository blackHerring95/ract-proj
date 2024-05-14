//to import model...
import {Project} from "../models/project.model"

//create your own interface for receiving parameters
//when invoking this compontent
export interface ProjectListItemProps{
    project: Project;
    index: number;
}

const ProjectListItem = ({project, index}: ProjectListItemProps) => {
     
    return <div>
        {
            <div className="pt-2">
                {index}. {project.name}
            </div>
        }
    </div>
};

export default ProjectListItem;