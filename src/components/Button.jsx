import styled from "styled-components";
import { motion } from "framer-motion";
export default function Button({color,background,width,height,transition,hover,children, onClick}){


    const Button = styled(motion.button)`

        width:${width}px;
        height:${height}px;
        cursor:pointer;
        border: none;
        border-radius: 15px;
        box-shadow: 1px 2px 2px black;
        font-family:Montserrat;
        font-weight: 500;
        font-size: 20px;
        color:${color};
        background-color:${background};
        transition:${transition};
        margin:1em;


        &:hover{

            ${hover};
            outline:solid;
            outline-width:2px;
            outline-color:gray;
        }
        
        &:active{
            transform:scale(0.9);

        
        }

        &:focus{
            outline:none;
        }
        
    `


    return(

        <Button onClick={onClick} color={color} whileTap={{scale:0.9, transition:{type:'spring',duration:0.001}}} whileHover={{scale:1.1,transition:{type:'spring',duration:0.05}}}>{children}</Button>
    )


}
