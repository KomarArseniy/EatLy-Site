import appImageUrl from '../../assets/images/home-page/app.svg';
import { SECTION_IDS } from '../../data/navigation';
import { Icon } from '../ui/Icon';
import { LinkButton } from '../ui/LinkButton';

const advantages = [
    'Premium quality food is made with ingredients that are packed with essential vitamins, minerals.',
    'These foods promote overall wellness by support healthy digestion and boosting immunity',
];

export function AdvantagesSection() {
    return (
        <section className="section" id={SECTION_IDS.about} aria-labelledby="advantages-title">
            <div className="advantages__inner container">
                <div className="advantages__image-container image-container image-container--top-right-ico">
                    <img src={appImageUrl} alt="" width={304} height={609} />
                </div>

                <div className="advantages__info">
                    <h2 className="visually-hidden" id="advantages-title">
                        Our advantages
                    </h2>

                    <div className="advantages__title">
                        <p>
                            Premium <span className="accent-text">Quality</span> For Your Health
                        </p>
                    </div>

                    <ul className="advantages__list">
                        {advantages.map((text) => (
                            <li key={text} className="advantages__list-item">
                                {text}
                            </li>
                        ))}
                    </ul>

                    <LinkButton variant="accent" withIcon thin>
                        <Icon name="white-arrow">Download</Icon>
                    </LinkButton>
                </div>
            </div>
        </section>
    );
}
