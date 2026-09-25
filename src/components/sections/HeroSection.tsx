import heroImageUrl from '../../assets/images/home-page/hero.svg';
import { SECTION_IDS } from '../../data/navigation';
import { metrics } from '../../data/metrics';
import { TrustpilotLogo } from '../icons/TrustpilotLogo';
import { LinkButton } from '../ui/LinkButton';
import { RatingView } from '../ui/RatingView';

export function HeroSection() {
    return (
        <section className="hero" id={SECTION_IDS.home}>
            <div className="hero__inner container">
                <div className="hero__main">
                    <div className="hero__body">
                        <div className="hero__info">
                            <p className="hero__subtitle">OVER 1000 USERS</p>
                            <h1 className="hero__title">
                                Enjoy Foods <span className="hidden-mobile">All</span>{' '}
                                <span className="hero__title-hidden-part">Over The World</span>{' '}
                            </h1>
                            <p className="hero__title-extra h1" aria-hidden="true">
                                Over <span className="hidden-mobile">The</span>{' '}
                                <span className="accent-text">World</span>
                            </p>
                            <p className="hero__description">
                                EatLy help you set saving goals, earn cash back offers, Go to disclaimer for
                                more details and get paychecks up to two days early.{' '}
                                <span className="accent-text">Get a $20 bonus.</span>
                            </p>
                        </div>

                        <div className="hero__actions">
                            <LinkButton variant="accent">Get Started</LinkButton>
                            <LinkButton variant="with-border">Go Pro</LinkButton>
                        </div>

                        <div className="hero__evaluation">
                            <div className="hero__feedback-logo">
                                <TrustpilotLogo />
                            </div>
                            <RatingView />
                            <p>4900+</p>
                        </div>
                    </div>

                    <div className="hero__dish">
                        <img src={heroImageUrl} alt="" />
                    </div>
                </div>
            </div>

            <div className="hero__metrics metrics">
                <dl className="metrics__list">
                    {metrics.map(({ id, label, value }) => (
                        <div key={id} className="metrics__list-item">
                            <dt className="metrics__key">{label}</dt>
                            <dd className="metrics__value">{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
