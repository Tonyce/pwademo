import MobileDetect from 'mobile-detect';

export const isMobile = (userAgent: string) => {
    const md = new MobileDetect(userAgent);
    return !!md.mobile();
};