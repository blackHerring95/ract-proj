import projects from "../assets/projects.json"

const ProjectsList = () => {
     
    return <div>
        {
            projects.map((proj, index) => {
                return (<div>{proj.id}. {proj.name}</div>)
            })
        }
    </div>
};

export default ProjectsList;