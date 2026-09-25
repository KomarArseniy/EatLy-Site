import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SECTION_IDS } from '../../data/navigation';
import { reviews } from '../../data/reviews';
import { ReviewCard } from '../cards/ReviewCard';

export function ReviewsSection() {
    return (
        <section className="section" id={SECTION_IDS.reviews}>
            <div className="swiper-section container">
                <h2 className="swiper-section__title">
                    <span className="accent-text">Customer</span> Say
                </h2>

                <div className="swiper-section__reviews-wrapper">
                    <div className="swiper-section__swiper">
                        <Swiper
                            className="mySwiper"
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView="auto"
                            speed={800}
                            loop
                            pagination={{
                                type: 'bullets',
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            breakpoints={{
                                // ширина окна >= 1024px
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {reviews.map((review) => (
                                <SwiperSlide key={review.id}>
                                    <ReviewCard review={review} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
