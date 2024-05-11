export interface FooterProps {
    phoneNumber: string,
    email: string;
}

const Footer = ({phoneNumber, email}: FooterProps) => {
     
    return <>
        <div className="border-solid border-[#181818]">
            <div className="bg-[#181818] text-left text-white" >{phoneNumber}</div>
            <div className="bg-[#181818] text-left text-white" >{email}</div>
        </div>
       
    </>;
};

export default Footer;