import Input from "./input";
import ProjectListItem from "./project-list-item";
import { Project } from '../models/project.model';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";


const ProjectList = () => {

    const [filter, setFilter] = useState<string>("");
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    //use this to update filer in url
    const [searchParams, setSearchparams] = useSearchParams();

    //use this to navigate to other route...
    const navigate = useNavigate();

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

    //if you send multiple requests at the same time previous ones will not be cancled
    //this can be handled by a library or cancelation tokens
    //it can be done with falg, and use conditional loading 
    useEffect(() => {
        //update filter in url...
        setSearchparams({ filter: filter });
        setLoading(true);
        fetch(`http://localhost:3000/projects?name_like=${filter}`)
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .finally(() => setLoading(false))
    }, [filter]);

    return (
        <div className="flex flex-row">
            <div>
                <Input placeholder='Search...' onUpdate={(value) => setFilter(value)}></Input>
                {
                    //conditional rendering 
                    loading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            {projects.map((proj, index) => (
                                <ProjectListItem key={proj.id} index={index} project={proj}></ProjectListItem>
                            ))}
                        </>
                    )
                }
            </div>
            <div>
                <Outlet />
                {/* //example navigate to route */}
                <button onClick={() => navigate("/authenticate")}>Click</button>
            </div>
        </div>
    )
};

export default ProjectList;