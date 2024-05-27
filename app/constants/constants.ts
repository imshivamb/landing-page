import { BsTwitterX } from "react-icons/bs";

export const cardData = [
    {
        title: "Enterprise E-Commerce",
        percent: "60%",
        backgroundColor: "bg-red-400/30",
        description1: "Tech cost reduced with QPe's full-stack solution for enterprise e-commerce.",
        description2: "Launch enterprise-grade e-commerce stores tailored for optimal performance."
      },
      {
        title: "Launch with No-Code",
        percent: "40%",
        description1: "More profits on average for QPe sites due to no-code setup. Save time and cost on coding, increase profits. ",
        backgroundColor: "bg-teal-400/30",
        description2: "Pick a domain, upload products, customize themes and start selling online in minutes. Powering the future of e-commerce with no-code solutions."
      },
      {
        title: "QPe Pro Plus",
        percent: "55%",
        backgroundColor: "bg-yellow-400/30",
        description1: "Higher revenue for QPe sites using QPe Pro Plus as they get dedicated resources to eliminate the downtime, and improve performance matrix.",
        description2: "Drive down tech costs with dedicated resources in QPe Pro Plus and boost sales revenue with our fully customized, all-in-one solution."
      },
      {
        title: "Retail E-Commerce",
        percent: "45%",
        backgroundColor: "bg-orange-400/30",
        description1: "Increase in sales and cost down by 30% due to all in one retail e-commerce solution of QPe",
        description2: "Manage, run and grow retail & e-commerce from a common platform. From manual orders to faster transactions, QPe leverages automation to run business efficiently."
      },
]


export const sliderCardData = [
  { id: "card1",
    title: "Sell on your e-commerce website",
    description: "Launch your products on your custom e-commerce website. Leverage powerful tools and features to attract and convert visitors into loyal customers.",
    link: "https://example.com/image1",
    image: "/images/sell1.png",
    backgroundColor: "#FFE4E1" 
  },
  {
    id: "card2",
    title: "Sell on marketplaces",
    description: "Sell on top marketplaces like eBay, Etsy, Amazon, and Flipkart. Manage all your sales seamlessly from your QPe dashboard.",
    link: "https://example.com/image2",
    image: "/images/card6.png",
    backgroundColor: "#F0F8FF" 
  },
  {
    id: "card3",
    title: "Sell on social media ",
    description: "Sell on social media platforms with ease. Use integrated tools to grow your audience and boost sales on Facebook, Instagram, and more.",
    link: "https://example.com/image3",
    image: "/images/card3.jpg",
    backgroundColor: "#D3D3D3"
  },
  {
    id: "card4",
    title: "Sell in-person",
    description: "Sell in-person with a comprehensive POS system designed for seamless integration between your online and retail stores. Easily create manual orders, accept payments, and generate KOT/bills in your physical store.",
    link: "https://example.com/image3",
    image: "/images/card4.jpg",
    backgroundColor: "#FFE5B4"
  },
  {
    id: "card5",
    title: "Sell globally",
    description: "Expand your business horizons globally and optimize cross-border sales effortlessly through your QPe store. Seamlessly enter international markets with multilingual capabilities, currency conversion, and a wide array of trusted payment options.",
    link: "https://example.com/image3",
    image: "/images/sellglobal.png",
    backgroundColor: "#FFE5E4"
  },
  
];

export const footerLinks = [
  {
    "title": "Product",
    "subtitle": ["Website Templates", "Website Builder", "Website Design", "QPe Features", "App Market", "Web Hosting", "Domain Names", "Website Accessibility", "Mobile App Builder"],
    "links": ["link1", "link2", "link3", "link4", "link5", "link6", "link7", "link8", "link9"]
  },
  {
    "title": "Solutions",
    "subtitle": ["Online Store", "Online Booking", "Restaurant Website", "Blog Website", "Portfolio Website", "eCommerce Website", "QPe Studio", "Enterprise Solutions", "Student Website", "Professional Tools", "Logo Maker"],
    "links": ["link1", "link2", "link3", "link4", "link5", "link6", "link7", "link8", "link9", "link10", "link11"]
  },
  {
    "title": "Learn",
    "subtitle": ["QPe Blog", "Privacy and Security Hub", "SEO Learning Hub", "QPe Encyclopedia"],
    "links": ["link1", "link2", "link3", "link4"]
  },
  {
    "title": "Support",
    "subtitle": ["Help Center", "Hire a Professional", "Report Abuse", "System Status"],
    "links": ["link1", "link2", "link3", "link4"]
  },
  {
    "title": "Company",
    "subtitle": ["About", "Contact Us", "Press & Media", "Investor Relations", "QPe Capital", "Accessibility Statement", "Patent Notice", "Sitemap", "Careers"],
    "links": ["link1", "link2", "link3", "link4", "link5", "link6", "link7", "link8", "link9"]
  }
]


interface SocialMediaIcon {
  link: string;
  icon: string;
}
export const socialMediaIcons:SocialMediaIcon[] = [
  
    {
      "link": "www.facebook.com",
      "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.99998 0C-2.39853 0.363158 -3.66273 17.7606 8.42945 20L8.42924 12.9695H5.87725V10.0611H8.42945V7.84463C8.50061 3.78653 11.7617 3.63768 14.4762 4.12674V6.60274H13.2086C11.96 6.60274 11.5705 7.37832 11.5705 8.17389V10.0613H14.3583L13.9126 12.9695H11.5705V20C23.6654 17.7585 22.3955 0.361684 9.99998 0Z\" fill=\"black\"></path></svg>"
    },
    {
      "link": "www.youtube.com",
      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-youtube\"><path d=\"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17\"/><path d=\"m10 15 5-3-5-3z\"/></svg>"
    },
    {
      "link": "www.instagram.com",
      "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-instagram\"><rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"/><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"/><line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"/></svg>"
    },
    {
      "link": "www.pinterest.com",
      "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.0007 0C4.47762 0 0 4.47716 0 9.99908C0 14.0948 2.46192 17.6124 5.98615 19.1589C5.95632 18.4601 5.97962 17.6228 6.15862 16.8633C6.35194 16.051 7.44671 11.4133 7.44671 11.4133C7.44671 11.4133 7.12761 10.7748 7.12761 9.83173C7.12761 8.34944 7.98629 7.24293 9.05506 7.24293C9.96567 7.24293 10.4041 7.92655 10.4041 8.74407C10.4041 9.65792 9.82171 11.0264 9.52204 12.2927C9.27172 13.3538 10.0538 14.2193 11.0993 14.2193C12.9944 14.2193 14.2708 11.7849 14.2708 8.90232C14.2708 6.71111 12.7946 5.07053 10.1096 5.07053C7.07568 5.07053 5.1871 7.33243 5.1871 9.85894C5.1871 10.7306 5.44266 11.3445 5.84606 11.8199C6.0303 12.0391 6.05622 12.1273 5.98877 12.3777C5.94076 12.5619 5.83178 13.0049 5.7851 13.18C5.71886 13.4336 5.51397 13.5237 5.28442 13.431C3.88748 12.8596 3.23759 11.3309 3.23759 9.61057C3.23759 6.76944 5.63335 3.36379 10.3833 3.36379C14.2019 3.36379 16.7158 6.12577 16.7158 9.09164C16.7158 13.0146 14.534 15.9458 11.3185 15.9458C10.2393 15.9458 9.2237 15.3614 8.87606 14.6986C8.87606 14.6986 8.29499 17.0033 8.17312 17.4476C7.96037 18.2181 7.54528 18.9896 7.16647 19.5901C8.06543 19.8554 9.01616 20 10.0007 20C15.5237 20 20 15.5229 20 9.999C20 4.47716 15.5237 0 10.0007 0Z\" fill=\"black\"></path></svg>"
    },
    {
      "link": "www.x.com",
      "icon": "<svg width=\"19\" height=\"20\" viewBox=\"0 0 19 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0.0435362 0.0627804C0.0799483 0.116592 7.33071 10.9874 7.39562 11.0852L7.41857 11.1194L3.75203 15.5084C1.73591 17.9225 0.0664917 19.9209 0.0427447 19.9486L0 20H0.83827H1.67654L4.91801 16.119C6.70062 13.9845 8.16027 12.2381 8.16265 12.2381C8.16502 12.2381 9.33179 13.9845 10.755 16.119L13.3435 20H16.1717H19L18.977 19.9649C18.9644 19.9462 17.2356 17.3551 15.1364 14.2071C13.0363 11.0591 11.3178 8.47778 11.3178 8.47044C11.317 8.46392 12.9041 6.55768 14.8435 4.23563C16.7828 1.91358 18.3715 0.0105991 18.3723 0.00652313C18.3739 0.00326157 17.9995 0 17.5403 0H16.7052L13.6387 3.67061C11.9527 5.68936 10.5698 7.34203 10.5651 7.34285C10.5611 7.34448 9.45528 5.69262 8.10803 3.67305L5.65892 0H2.82985H0.000791568L0.0435362 0.0627804ZM5.33912 2.01142C7.58559 5.32083 16.6942 18.7428 16.6989 18.7501C16.7037 18.7583 16.4456 18.7607 15.4189 18.7607H14.1327L11.4334 14.7843C9.94921 12.5968 7.28401 8.6702 5.51169 6.0587C3.73937 3.44721 2.28921 1.30779 2.28921 1.30371C2.28921 1.29963 2.82985 1.29637 3.57155 1.29637H4.8531L5.33912 2.01142Z\" fill=\"black\"></path></svg>"
    },
    {
      "link": "www.linkedin.com",
      "icon": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.5219 0.00281552C15.4459 -0.00581603 4.10042 0.00871023 1.47811 0.00281552C0.662105 0.00281552 0 0.644708 0 1.43523V18.568C0 19.3587 0.662105 20 1.47811 20H18.5219C19.3383 20 20 19.3587 20 18.5678V1.43523C20 0.644708 19.3383 0.00281552 18.5219 0.00281552ZM6.07811 16.7379H3.08505V7.735H6.0779V12.8339C6.07916 13.7659 6.07747 15.7924 6.07811 16.7379ZM4.58211 6.50616C3.57389 6.51689 2.90653 5.82153 2.90863 4.9508C2.90568 2.89038 6.26653 2.86723 6.27516 4.95101C6.27516 5.81479 5.62547 6.50616 4.58211 6.50616ZM16.8697 16.7379H13.8773V11.9221C13.8773 10.7118 13.4438 9.88636 12.3613 9.88636C11.2499 9.92509 10.6977 10.7872 10.7272 11.711V16.7381L7.73453 16.7383C7.73453 16.7383 7.7739 8.58004 7.73474 7.73563H10.7274L10.7074 9.04088C11.1013 8.42636 11.8103 7.52426 13.4246 7.52426C15.3935 7.52426 16.8699 8.81099 16.8699 11.5762V16.7379H16.8697Z\" fill=\"black\"></path></svg>"
    }
  ]
  


  export const testimonials = [
    
      {
        "text": "The user interface is intuitive, making transactions a breeze. Whether I am making purchases or managing my diverse portfolio of digital currencies.",
        "name": "John Doe",
        "avatar": "/images/test1.png",
        "company": "ABC Inc.",
        "companyLogo": "/images/testlogo.png"
      },
      {
        "text": "I'm a freelancer, and managing my earnings across different digitalplatforms used to be a hassle. That's until I discovered Block.",
        "name": " John Doe",
        "avatar": "/images/test2.png",
        "company": "ABC Inc.",
        "companyLogo": "/images/testlogo.png"
      },
      {
        "text": "its user-friendly interface makes it accessible for both beginners and experienced traders. I can not think of my trading business without Block.",
        "name": "John Doe",
        "avatar": "/images/test1.png",
        "company": "XYZ Corp.",
        "companyLogo": "/images/testlogo.png"
      },
      {
        "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "name": "John Doe",
        "avatar": "/images/test2.png",
        "company": "XYZ Corp.",
        "companyLogo": "/images/testlogo.png"
      },
      {
        "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "name": "John Doe",
        "avatar": "/images/test1.png",
        "company": "XYZ Corp.",
        "companyLogo": "/images/testlogo.png"
      },
      
    ]
    
  

    export const navComponents = {
      "Start": [
        {
          title: "Start your business",
          href: "/start-your-business",
          description: "Build your brand"
        },
        {
          title: "Create your website",
          href: "/create-your-website",
          description: "Online store editor"
        },
        // Add more components related to "Start" here
      ],
      "Sell": [
        {
          title: "Sell your products",
          href: "/sell-your-products",
          description: "Sell online or in person"
        },
        {
          title: "Sell online",
          href: "/sell-online",
          description: "Grow your business online"
        },
        // Add more components related to "Sell" here
      ],
      "Market": [
        {
          title: "Market your business",
          href: "/market-your-business",
          description: "Reach & retain customers"
        },
        {
          title: "Market across social",
          href: "/market-across-social",
          description: "Social media integrations"
        },
        // Add more components related to "Market" here
      ],
      "Manage": [
        {
          title: "Manage your business",
          href: "/manage-your-business",
          description: "Track sales, orders & analytics"
        },
        {
          title: "Measure your performance",
          href: "/measure-your-performance",
          description: "Analytics and Reporting"
        },
        // Add more components related to "Manage" here
      ],
    };
    
 