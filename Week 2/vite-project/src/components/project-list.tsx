import Input from "./input";
import ProjectListItem from "./project-list-item";
import { Project } from '../models/project.model';
import {useState, useEffect} from 'react';


const ProjectList = () => {

    const [filter, setFilter] = useState<string>("");
    const [projects, setProjects] = useState<Project[]>([]);

    // useEffect(() =>{
    //     fetch("http://localhost:3000/projects")
    //         .then((res) => res.json())
    //         .then((data) => setProjects(data))
    // }, []);

    //this does not work
    // useEffect(() => {
    //     projects.filter((p) => 
    //         p.name.toLowerCase().includes(filter.toLowerCase())
    //     );
    // }, [filter])

    useEffect(() =>{
        fetch(`http://localhost:3000/projects?name_like=${filter}`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
    }, [filter]);

    return <div>
        <Input placeholder='Search...' onUpdate={(value)=>setFilter(value)}></Input>
        {
            <div>
                {
                    projects.map((proj, index) => {
                        return (
                            //IMPORTANT: you need to provide the key here, not inside the component
                            <ProjectListItem key={proj.id} index={index} project={proj}></ProjectListItem>
                    )
                })}
            </div>
        }
    </div>
};

export default ProjectList;