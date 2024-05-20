

export interface AboutProps {
    bio: string;
}

const About = ({bio}: AboutProps) => {
     
    return <>
        <div className="bg-[#818181] text-left text-white" >{bio}</div>
    </>;
};

export default About;