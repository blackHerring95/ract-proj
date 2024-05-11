export interface HeaderProps {
    name: string;
    tagline: string;
}

const Header2 = ({name, tagline}: HeaderProps) => {
     
    return <>
        <div className="rounded border-2 border-solid border-[#ff9900] bg-[#ff9900] text-left" >{name} "{tagline}"</div>
    </>;
};

export default Header2;