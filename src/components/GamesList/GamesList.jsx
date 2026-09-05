import { List,Image,Item,Difficulty,Multiplayer,Rating } from "./GamesList.styled";
import { LuGamepad2 } from "react-icons/lu";
import { ImCool } from "react-icons/im";
import { FcRating } from "react-icons/fc";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiShardSword } from "react-icons/gi";
function GameList({games}) {
    return(
        <List>{games.map(({id,title,genre,rating,multiplayer,logo,difficulty})=>{
            return <Item key={id} $genre={genre}>
                <Image src={logo} alt={title} />
                <h2><LuGamepad2/>{title}</h2>
                <p><ImCool />{genre}</p>
                <Rating $rating={rating}><FcRating />{rating}</Rating>
                <Multiplayer $multiplayer={multiplayer}><FaPeopleGroup />{multiplayer?"Single and Multiplayer":"Singleplayer Only"}</Multiplayer>
                <Difficulty $difficulty={difficulty}><GiShardSword />{difficulty}</Difficulty>
            </Item>
        })}</List>
    )
}

export default GameList