import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";

const Socials = ({color="white"}) => {
    return (
        <div className='flex gap-7'>
            <a href='https://vk.ru/kulinariya_bushe'>
                <FaVk color={color} size="30px" />
            </a>
            <a href='https://www.instagram.com/bushe45/'>
                <FaInstagram color={color} size="30px" />
            </a>
            <a href='https://ok.ru/group/54488147689552'>
                <FaOdnoklassniki color={color} size="30px" />
            </a>
        </div>
    )
}

export default Socials;