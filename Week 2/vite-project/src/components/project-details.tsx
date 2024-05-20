import {Project} from "../models/project.model"

export interface ProjectDetailsProps{
    project: Project;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    return(
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600">ID: {project.id}</p>
        </div>
    );
};

export default ProjectDetails;