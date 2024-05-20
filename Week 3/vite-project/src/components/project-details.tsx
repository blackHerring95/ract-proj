import { useParams, useSearchParams } from "react-router-dom";
import { Project } from "../models/project.model"
import { useState, useEffect } from "react";

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project, setProject] = useState<Project>();

    //use this for getting query parameters
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("<some_q_param_name>"));

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${projectId}`)
            .then((res) => res.json())
            .then((data) => setProject(data));
    }, [projectId]);

    //project can be undefined
    //workaround with this
    if (!project) {
        return <div>Project Not found...</div>
    }

    return (
        <div className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-600">ID: {project.id}</p>
        </div>
    );
};

export default ProjectDetails;