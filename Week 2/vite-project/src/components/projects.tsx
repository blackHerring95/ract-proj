import projects from "../assets/projects.json"

const ProjectsList = () => {
     
    return <div>
        {
            <div>
                {
                    projects.map((proj, index) => {
                        return (
                            <div className="pt-2" key={`${proj.id}_${proj.name}`}>{proj.id}. {proj.name}</div>
                    )
                })}
            </div>
        }
    </div>
};

export default ProjectsList;