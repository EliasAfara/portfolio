import { css } from "styled-components";

const variables = css`
  :root {
    --header-height: 3rem;

    /*========== Colors ==========*/
    /*Color mode HSL(hue, saturation, lightness)*/
    --title-color: hsl(0, 0%, 20%);
    --title-color-dark: #3badd4;
    --text-color: #5a6061;
    --body-color: hsl(0, 0%, 98%);
    --container-color: #fff;

    --lotion: #fafafa;
    --sonic-silver: #757575;
    --dark-charcoal: #333333;

    --moonstone-blue: #71bfc8;
    --chinese-black: #161818;

    --maximum-blue: #3badd4;

    /*========== Font and typography ==========*/
    --body-font: "Inter", sans-serif;

    /*.5rem = 8px | 1rem = 16px ...*/
    --big-font-size: 3.5rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
    --tiny-font-size: 0.625rem;

    /*========== Font weight ==========*/
    --font-normal: 400;
    --font-medium: 500;
    --font-semi-bold: 600;

    /*========== Margenes Bottom ==========*/
    /*.5rem = 8px | 1rem = 16px ...*/
    --mb-0-25: 0.25rem;
    --mb-0-5: 0.5rem;
    --mb-0-75: 0.75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;

    /* Responsive typography */
    @media screen and (max-width: 992px) {
      --big-font-size: 2.75rem;
      --h1-font-size: 1.5rem;
      --h2-font-size: 1.25rem;
      --h3-font-size: 1rem;
      --normal-font-size: 0.938rem;
      --small-font-size: 0.813rem;
      --smaller-font-size: 0.75rem;
    }

    /* For small devices */
    @media screen and (max-width: 350px) {
      --big-font-size: 2.25rem;
    }

    /*========== Brittany Chiang Variables ==========*/
    --dark-navy: #020c1b;
    // --navy: #0a192f;
    // --light-navy: #112240;
    // --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export default variables;
