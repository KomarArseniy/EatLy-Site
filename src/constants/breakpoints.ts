import { pxToRem } from '../utils/pxToRem';

/** Должно совпадать с $mobile в styles/helpers/_media.scss */
export const MOBILE_BREAKPOINT_PX = 767.98;

/** Первая ширина, на которой бургер-меню уже не нужно (десктопная вёрстка) */
export const DESKTOP_MIN_WIDTH_PX = 768;

export const MOBILE_MEDIA_QUERY = `(width <= ${pxToRem(MOBILE_BREAKPOINT_PX)}rem)`;
