import { footerLinks, SECTION_IDS } from '../../data/navigation';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../icons/SocialIcons';
import { Logo } from './Logo';

const socials = [
    { name: 'Instagram', Icon: InstagramIcon },
    { name: 'LinkedIn', Icon: LinkedinIcon },
    { name: 'Facebook', Icon: FacebookIcon },
    { name: 'Twitter', Icon: TwitterIcon },
];

export function Footer() {
    return (
        <footer className="footer" id={SECTION_IDS.contact}>
            <div className="footer__inner container">
                <div className="footer__body">
                    <Logo className="footer__logo" />

                    <nav className="footer__menu">
                        <ul className="footer__menu-list">
                            {footerLinks.map(({ label, href }) => (
                                <li key={label} className="footer__menu-list-item">
                                    <a href={href} className="header__menu-link base-link">
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="footer__extra">
                    <div className="footer__copyright">
                        <p>© 2025 EATLY All Rights Reserved.</p>
                    </div>

                    <div className="footer__soc1als soc1als">
                        {socials.map(({ name, Icon }) => (
                            <a key={name} href="#" className="soc1als-link base-link">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
