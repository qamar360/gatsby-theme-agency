const initialOptions = {
  blogBasePath: ``, // indicate "/blog" if you want posts URL as "/blog/my-post" or leave empty if you want "/my-post"
  blogPostPath: `contents/blog`,
  testimonialPath: `contents/testimonial`,
  servicesPostPath: `contents/services`,
  title: `Business`,
  description: `I showcase my expertise in this website`,
  siteUrl: `clever-twilight-016104.netlify.app`,
  siteName: `GTX360`,
  giHubPostBaseURL: `https://github.com/Ibaslogic/gatsby-site-agency/tree/master/contents/blog/`,
  menuLinks: [
    { name: `blog`, title: `Blog`, url: `` },
    {
      name: `services`,
      title: `Services`,
      url: ``, // must include "/" e.g "/services"
    },
    {
      name: `contact`,
      title: `Contact Us`,
      url: ``,
    },
    { name: `about`, title: `About Us`, url: `` },
    {
      name: `testimonials`,
      title: `Testimonials`,
      url: ``,
    },
  ],
  // Color for menu links
  linkMenuColor: { color: "#2d2d2d", hover: "#b2924e" },
  // needed for blog post share
  twitter: `ibaslogic`,
  // for follow
  social: [
    // icons supported for "instagram" and "googlePlus". Just add the exact name and link here.
    // To support others, visit src/components/footerBottomLayer/footerBottom and add their respective fontAwesome icons and update the "socialIcon" variable.
    { name: `linkedIn`, link: `https://www.linkedin.com/in/ibaslogic` },
    { name: `twitter`, link: `https://twitter.com/ibaslogic` },
    { name: `github`, link: `https://github.com/ibaslogic` },
    { name: `facebook`, link: `https://facebook.com/ibaslogic` },
  ],
  email: `ibas@ibaslogic.com`,
  companyAddress: `XYZ, Sanusi Fafunwa, Victorial Island, Lagos.`,
  mobileNumber: `+234 813 9542 386`,
  author: `Ibas Majid`,
  homePage: {
    hero_content: {
      headingText: `Web Development Services`,
      descriptionText: `For clients who want to ditch the stress of complicated websites and have a modern and user friendly site.`,
      buttonText: `contact us`,
      typeWriter: [
        `Want to take your business and brand to the next level?`,
        `Then, you need a user friendly website.`,
        `<strong><span style="color: #27ae60;">That is why we are here </span></strong>😎.`,
        `We listen and create an astonish project for our clients`,
        `The question is: Are you ready to talk about your project?`,
        `Then, go ahead and get in touch`,
      ],
      homeHero: ``, ///specify image file for the home page hero image and add in the images folder e.g home_hero_bg.jpg
    },
    ourClients: {
      heading: `Our Clients are awesome! Are you ready to join this amazing list?`,
      subHeading: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque reprehenderit suscipit facilis tenetur sunt sint modi esse culpa quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      images: [
        // add clients images in the images folder.
        { image: `verizon.png` },
        { image: `bosch.png` },
        { image: `samsung.png` },
        { image: `yamaha_.png` },
        { image: `carlson__.png` },
        { image: `williams.png` },
      ],
    },
    services: {
      arrowText: `learn more`,
      headingText: `featured services`,
      buttonText: `explore`,
      buttonTextLinkTo: `/services`,
    },
    // testimonial section homepage
    testimonial: {
      headingText: `words from our clients`,
      linkText: `read more`,
      buttonText: `all testimonial`,
      buttonTextLinkTo: `/testimonials`,
    },
  },
  servicesPage: {
    // single page
    hero_content: {
      buttonText: `start a project`,
    },
    // listing page
    listingPage: {
      heading: `At your service`,
      subHeading: `Lorem ipsum dolor sit amet consectetur adipisicing elit spernatur eaque reprehenderit suscipit. Aspernatur eaque reprehenderit suscipit.`,
    },
  },
  // testimonial page
  testimonialPage: {
    heading: `Testimonials`,
    subHeading: `Lorem ipsum dolor sit amet consectetur adipisicing elit spernatur eaque reprehenderit suscipit. Aspernatur eaque reprehenderit suscipit.`,
  },
  // contact page
  contactPage: {
    heading: `Let's talk about your project`,
    subHeading: `Lorem ipsum dolor sit amet consectetur adipisicing elit spernatur eaque reprehenderit suscipit.`,
    showContactForm: true, // Not hosting on netlify? set to false. Else, set to true and start receiving submissions in your Netlify site admin panel.
  },
  footerSection: {
    consultation: {
      heading: `Need a consultation?`,
      subHeading: `Then let's talk! We are here to provide you the best service.`,
      buttonText: `contact us`,
      buttonTextLinkTo: `/contact-us`,
    },
  },
}

module.exports = (userOptions = {}) => {
  const options = Object.fromEntries(
    Object.entries(Object.assign({}, initialOptions, userOptions)).map(
      ([key, value]) => {
        let newValue = value

        if (Array.isArray(value)) {
          newValue = [
            ...new Map(
              [...initialOptions[key], ...value].map(item => [item.name, item])
            ).values(),
          ]
        } else if (typeof value === "object") {
          newValue = { ...initialOptions[key], ...value }
        }

        return [key, newValue]
      }
    )
  )

  const {
    blogBasePath,
    blogPostPath,
    testimonialPath,
    servicesPostPath,
    title,
    description,
    siteUrl,
    siteName,
    giHubPostBaseURL,
    menuLinks,
    linkMenuColor,
    twitter,
    social,
    email,
    companyAddress,
    mobileNumber,
    author,
    homePage,
    servicesPage,
    testimonialPage,
    contactPage,
    footerSection,
  } = options

  return {
    siteMetadata: {
      blogBasePath,
      blogPostPath,
      testimonialPath,
      servicesPostPath,
      title,
      description,
      siteUrl,
      siteName,
      giHubPostBaseURL,
      menuLinks,
      linkMenuColor,
      twitter,
      social,
      email,
      companyAddress,
      mobileNumber,
      author,
      homePage,
      servicesPage,
      testimonialPage,
      contactPage,
      footerSection,
    },

    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: { maxWidth: 750, linkImagesToOriginal: false },
            },
          ],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `blog`,
          path: blogPostPath, //`src/contents/blog`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `testimonial`,
          path: testimonialPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `services`,
          path: servicesPostPath,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: `#b2924e`,
          // Disable the loading spinner.
          showSpinner: false,
        },
      },
    ],
  }
}
