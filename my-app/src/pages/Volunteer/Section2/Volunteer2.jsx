import "./Volunteer2.css";
import Ngo from "./NGO/Ngo";
import NgoImg from "../../../assets/ngo.jpg"

export default function Volunteer2() {
  return (
    <div className="volunteer2 container">
        <div className="ngos">
            <Ngo heading="Karna Foundation" location="Ahemdabad, Vastrapur" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat vero voluptates ratione, molestias aliquam assumenda consequuntur, pariatur optio natus ipsam quia facilis itaque ipsum numquam. Asperiores, error ipsam odio quae fuga itaque accusantium? Aliquid vitae cumque repellat repellendus iure consequuntur deserunt fuga odit sapiente. " image={NgoImg}  />
            <Ngo heading="Karna Foundation" location="Ahemdabad, Vastrapur" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat vero voluptates ratione, molestias aliquam assumenda consequuntur, pariatur optio natus ipsam quia facilis itaque ipsum numquam. Asperiores, error ipsam odio quae fuga itaque accusantium? Aliquid vitae cumque repellat repellendus iure consequuntur deserunt fuga odit sapiente. " image={NgoImg}  />
            <Ngo heading="Karna Foundation" location="Ahemdabad, Vastrapur" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat vero voluptates ratione, molestias aliquam assumenda consequuntur, pariatur optio natus ipsam quia facilis itaque ipsum numquam. Asperiores, error ipsam odio quae fuga itaque accusantium? Aliquid vitae cumque repellat repellendus iure consequuntur deserunt fuga odit sapiente. " image={NgoImg}  />
        </div>
    </div>
  )
}
