import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";

const socialLinkClass =
    "inline-flex transition-transform duration-200 hover:scale-110 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md";

const Socials = ({ color = "white" }) => {
    return (
        <div className="flex gap-7">
            <a
                href="https://vk.ru/kulinariya_bushe"
                className={socialLinkClass}
                aria-label="ВКонтакте"
                target="_blank"
                rel="noreferrer"
            >
                <FaVk color={color} size="30px" />
            </a>
            <a
                href="https://www.instagram.com/bushe45/"
                className={socialLinkClass}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram color={color} size="30px" />
            </a>
            <a
                href="https://ok.ru/group/54488147689552"
                className={socialLinkClass}
                aria-label="Одноклассники"
                target="_blank"
                rel="noreferrer"
            >
                <FaOdnoklassniki color={color} size="30px" />
            </a>
        </div>
    );
};

export default Socials;
