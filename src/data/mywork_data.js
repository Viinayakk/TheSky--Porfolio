import photo_1 from '/Images/Photography/1.png'
import photo_2 from '/Images/Photography/2.png'
import photo_3 from '/Images/Photography/3.png'
import photo_4 from '/Images/Photography/4.png'
import photo_5 from '/Images/Photography/6.png'
import photo_6 from '/Images/Photography/20260820_181834.jpg'
import photo_7 from '/Images/Photography/CG1.jpg'
import photo_8 from '/Images/Photography/CGC4.jpg'
import photo_9 from '/Images/Photography/S1 1.jpg'

import graphic_work_6 from '/Images/Backup_of_INFRABIT IT SOLUTIONS new green.jpg'
import graphic_work_7 from '/Images/Backup_of_KIZOMI EVENTS 2,999.jpg'
import graphic_work_9 from '/Images/RAMA SURGICALS LOGO 2.jpg'
import infrabit_client from '/Images/infrabit client.png'
import kizomi_client from '/Images/Kizomi Client.png'
import rama_client from '/Images/rama clients.jpeg'

// Categories: "all", "video", "graphic", "logo", "myvideos"
const mywork_data = [

    // --- My Personal Videos / Filming ---
    {
        w_no: 15,
        w_name: "Logo Designing",
        w_video: "/my_content_1.mp4",
        w_category: "myvideos",
        w_desc: "Creative logo design process showcase"
    },
    {
        w_no: 16,
        w_name: "Movie Review",
        w_video: "/my_content_2.mp4",
        w_category: "myvideos",
        w_desc: "Engaging movie review video edit"
    },
    {
        w_no: 20,
        w_name: "Jazba Teaser",
        w_video: "/jazba_teaser.mp4",
        w_category: "myvideos",
        w_desc: "High-energy teaser video edit"
    },
    {
        w_no: 25,
        w_name: "Crown Garnet Reel",
        w_video: "/Filming/CROWN GARNET REEL 1.mp4",
        w_category: "myvideos",
        w_desc: "Cinematic Crown Garnet Filming Reel"
    },
    {
        w_no: 26,
        w_name: "Filming Reel 2",
        w_video: "/Filming/REEL2.mp4",
        w_category: "myvideos",
        w_desc: "Creative Filming & Videography Reel"
    },

    // --- Video Projects ---
    {
        w_no: 1,
        w_name: "Robotics Edit",
        w_video: "/edit_1_robotics_123.mp4",
        w_category: "video",
        w_desc: "Dynamic robotics promo video"
    },
    {
        w_no: 2,
        w_name: "MJ Edit",
        w_video: "/mj_edit_2.mp4",
        w_category: "video",
        w_desc: "Cinematic music video edit"
    },
    {
        w_no: 3,
        w_name: "Reel Edit",
        w_video: "/reel_3kkkk.mp4",
        w_category: "video",
        w_desc: "Trending social media reel"
    },
    {
        w_no: 4,
        w_name: "UGC Edit",
        w_video: "/ugc_edit_1.mp4",
        w_category: "video",
        w_desc: "User-generated content edit"
    },
    {
        w_no: 5,
        w_name: "Shortfilm Glimpse",
        w_video: "/shortfilm_glimpse.mp4",
        w_category: "video",
        w_desc: "Cinematic short film teaser edit"
    },
    {
        w_no: 27,
        w_name: "Lepakshi Edit",
        w_video: "/LIPAKSHI EDIT 1.mp4",
        w_category: "video",
        w_desc: "Cinematic Lepakshi video edit"
    },

    // --- Photography / Graphic Designs ---
    {
        w_no: 7,
        w_name: "Photography Shot 1",
        w_img: photo_1,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },
    {
        w_no: 8,
        w_name: "Photography Shot 2",
        w_img: photo_2,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },
    {
        w_no: 9,
        w_name: "Photography Shot 3",
        w_img: photo_3,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },
    {
        w_no: 10,
        w_name: "Photography Shot 4",
        w_img: photo_4,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },
    {
        w_no: 11,
        w_name: "Photography Shot 5",
        w_img: photo_5,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },
    {
        w_no: 21,
        w_name: "Photography Shot 6",
        w_img: photo_6,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },
    {
        w_no: 22,
        w_name: "Photography Shot 7",
        w_img: photo_7,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },
    {
        w_no: 23,
        w_name: "Photography Shot 8",
        w_img: photo_8,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },
    {
        w_no: 24,
        w_name: "Photography Shot 9",
        w_img: photo_9,
        w_category: "graphic",
        w_desc: "Street & Urban Photography"
    },

    // --- Logo Designs ---
    {
        w_no: 12,
        w_name: "InfraBit Logo",
        w_img: graphic_work_6,
        w_category: "logo",
        w_desc: "InfraBit IT Solutions brand logo"
    },
    {
        w_no: 13,
        w_name: "Kizomi Events Logo",
        w_img: graphic_work_7,
        w_category: "logo",
        w_desc: "Kizomi Events brand identity"
    },
    {
        w_no: 14,
        w_name: "Rama Surgicals Logo",
        w_img: graphic_work_9,
        w_category: "logo",
        w_desc: "Rama Surgicals medical brand logo"
    },

    // --- Real-World Client Websites Using My Logos ---
    {
        w_no: 17,
        w_name: "InfraBit IT Solutions Website",
        w_img: infrabit_client,
        w_category: "client_logo",
        w_desc: "Live client website featuring my designed logo"
    },
    {
        w_no: 18,
        w_name: "Kizomi Events Website",
        w_img: kizomi_client,
        w_category: "client_logo",
        w_desc: "Live client website featuring my designed logo"
    },
    {
        w_no: 19,
        w_name: "Rama Surgicals Website",
        w_img: rama_client,
        w_category: "client_logo",
        w_desc: "Live client website featuring my designed logo"
    },
]

export default mywork_data;
