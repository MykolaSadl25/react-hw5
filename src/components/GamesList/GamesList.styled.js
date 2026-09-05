import styled from "styled-components";

export const List = styled.ul`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
gap: 30px;
`

export const Image = styled.img`
width: 300px;
height: 300px;
object-fit:cover;
border-top-right-radius: 25px;
border-top-left-radius: 25px;
`
export const Item = styled.li`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border:2px solid ${props=>{
    switch (props.$genre) {
        case "Sandbox":
            return "red"
        case "Sports":
            return "cyan"
        case "Simulation":
            return "purple"
        case "Battle Royale":
            return "grey"
        default:
            break;
    }
}};;
border-radius:25px;
padding: 25px;
transition: all 250ms;
background-color: ${props=>{
    switch (props.$genre) {
        case "Sandbox":
            return "red"
        case "Sports":
            return "cyan"
        case "Simulation":
            return "purple"
        case "Battle Royale":
            return "grey"
        default:
            break;
    }
}};

&:hover{
    box-shadow: 0 0 19px ${props=>{
    switch (props.$genre) {
        case "Sandbox":
            return "red"
        case "Sports":
            return "cyan"
        case "Simulation":
            return "purple"
        case "Battle Royale":
            return "grey"
        default:
            break;
    }
}};;
    transform: scale(1.05);
}`

export const Difficulty = styled.p`
margin-top: 20px;
color:${props=>{
    switch (props.$difficulty) {
        case "Easy":
            return "green"
        case "Medium":
            return "orange"
        case "Hard":
            return "red"
        default:
            return "black"
    }
}};`

export const Multiplayer = styled.p`
margin-top: 10px;
color: ${props=>props.$multiplayer?"blue":"green"};
`
export const Rating = styled.p`
margin-top: 10px;
color: ${props=>props.$rating>=9?"yellowgreen":"brown"};
`