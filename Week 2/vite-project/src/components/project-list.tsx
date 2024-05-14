import projects from "../assets/projects.json"
import ProjectListItem from "./project-list-item";

const ProjectList = () => {
     
    return <div>
        {
            <div>
                {
                    projects.map((proj, index) => {
                        return (
                            //you need to provide the key here, not inside the component
                            <ProjectListItem key={proj.id} index={index} project={proj}></ProjectListItem>
                    )
                })}
            </div>
        }
    </div>
};

export default ProjectList;