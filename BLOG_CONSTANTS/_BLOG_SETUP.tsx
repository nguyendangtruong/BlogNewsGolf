import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

/**
 * EXAMPLE AUTHOR
 * 
 export const AUTHOR_NAME: IAuthor = {
    name: "Full Name",
    designation: "Work Designation",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePic: "",
     social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/'
        },
    ]
}
 */

export const MAYUR: IAuthor = { // Đây là tên tác giả mặc định. Bạn có thể thay đổi thành tên của bạn.
    name: "Golf Game", // Đây là tên tác giả mặc định. Bạn có thể thay đổi thành tên của bạn.
    designation: "Sport Game", // Đây là tên tác giả mặc định. Bạn có thể thay đổi thành tên của bạn.
    bio: "Golf Game PG GOLF - 2023",
    profilePic: "",
    // social: [
    //     {
    //         icon: <AiFillGithub />,
    //         link: 'https://github.com/nmayur'
    //     },
    //     {
    //         icon: <AiFillLinkedin />,
    //         link: 'https://www.linkedin.com/in/mayur-nalwala/'
    //     },
    // ]
}

export const RUPALI: IAuthor = {
    name: "PG GOLD Sport",
    designation: "Sport News",
    bio: "Golf Game PG GOLF",
    profilePic: "",
    // social: [
    //     {
    //         icon: <AiFillGithub />,
    //         link: 'https://github.com/rupali-yadav'
    //     },
    // ]
}


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Blog News Golf - PG GOLD Sport';
export const WEBSITE_URL: string = ' http://localhost:3000/'; // https://nextjs-simple-blog-template.web.app/

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'Blog News Golf',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        // {
        //     // to open a link in new tab pass newTab: true
        //     label: 'Support Us',
        //     path: 'https://www.buymeacoffee.com/BlogNewsGolf13z',
        //     newTab: true
        // },
        // {
        //     label: 'Github Repo',
        //     path: 'https://github.com/BlogNewsGolf13/blog-template-using-nextjs-typescript-tailwindcss',
        //     newTab: true
        // },
        // {
        //     label: 'Contact Us',
        //     path: '/contact-us'
        // }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        // {
        //     label: 'Support Us',
        //     path: 'https://www.buymeacoffee.com/BlogNewsGolf13z',
        //     newTab: true
        // },
        // {
        //     label: 'Github Repo',
        //     path: 'https://github.com/BlogNewsGolf13/blog-template-using-nextjs-typescript-tailwindcss',
        //     newTab: true
        // },
        // {
        //     label: 'Contact Us',
        //     path: '/contact-us'
        // }
    ],
    socials: [
        // {
        //     link: 'https://www.facebook.com/',
        //     icon: <AiFillFacebook />
        // },
        // {
        //     link: 'https://www.instagram.com/',
        //     icon: <AiFillInstagram />
        // },
        // {
        //     link: 'https://twitter.com/BlogNewsGolf',
        //     icon: <AiOutlineTwitter />
        // },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Blog News Golf - PG GOLD Sport", //Golf Game PG GOLD
    description: "Update sports news about golf",
    keywords: "Blog News Golf,  PG GOLD Sport, Golf Game PG GOLD,",
    url: WEBSITE_URL,
    author: `${RUPALI.name}`,
    twitterHandle: '@null', // đây là tên tài khoản twitter của bạn. Bạn có thể thay đổi thành tên tài khoản của bạn.
    ogImage: '/public/images/og-image.jpg'
}