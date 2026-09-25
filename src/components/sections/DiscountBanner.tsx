import { useId, useState, type FormEvent } from 'react';
import { SECTION_IDS } from '../../data/navigation';

export function DiscountBanner() {
    const emailInputId = useId();
    const [email, setEmail] = useState('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: отправить email на сервер, когда появится API
        console.log('Subscribe:', email);
    };

    return (
        <div className="discount-badge container" id={SECTION_IDS.pricing}>
            <div className="discount-badge__inner">
                <div className="discount-badge__title">
                    <p>GET 50%</p>
                </div>

                <form className="discount-badge__form" onSubmit={onSubmit}>
                    <label className="visually-hidden" htmlFor={emailInputId}>
                        Enter Email Address
                    </label>
                    <input
                        id={emailInputId}
                        type="email"
                        placeholder="email@example.com"
                        className="discount-badge__form-input"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="discount-badge__form-button discount-badge__form-button--accent"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
