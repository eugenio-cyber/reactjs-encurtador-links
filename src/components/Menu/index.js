import { BsYoutube, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <div className='menu'>
      <a
        href='https://www.youtube.com/channel/UCM_B05YSytgVGxFPz5mkG2A/videos'
        className='social'
        target='blank'
      >
        <BsYoutube color='#eeeeee' size={28} />
      </a>
      <a
        href='https://github.com/eugenio-cyber'
        className='social'
        target='blank'
      >
        <BsGithub color='#eeeeee' size={24} />
      </a>

      <Link className='menu-item' to='/links'>
        Meus Links
      </Link>
    </div>
  );
}
