import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GrHistory } from "react-icons/gr";
import { TbPlaylistX } from "react-icons/tb";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiOutlineScissors } from "react-icons/hi2";
import { SiFireship } from "react-icons/si";
import { TiShoppingBag } from "react-icons/ti";
import { LuMusic2 } from "react-icons/lu";
import { PiFilmSlate } from "react-icons/pi";
import { HiSignal } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { MdSlowMotionVideo } from "react-icons/md";

import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFlag } from "react-icons/bs";

import { MdHelpOutline } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      name: "Home",
      icon: <IoHomeOutline />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscriptions",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const afterYou = [
    {
      id: 1,
      name: "Your Channel",
      icon: <FaUsersViewfinder />,
    },
    {
      id: 2,
      name: "History",
      icon: <GrHistory />,
    },
    {
      id: 3,
      name: "Playlist",
      icon: <TbPlaylistX />,
    },
    {
      id: 4,
      name: "Your Videos ",
      icon: <MdOndemandVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdOutlineWatchLater />,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <BiLike />,
    },
    {
      id: 7,
      name: "Downloads",
      icon: <LiaDownloadSolid />,
    },
    {
      id: 8,
      name: "Your clips",
      icon: <HiOutlineScissors />,
    },
  ];

  const Explore = [
    {
      id: 1,
      name: "Trending ",
      icon: <SiFireship />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <TiShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <LuMusic2 />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlate />,
    },
    {
      id: 5,
      name: "Live",
      icon: <HiSignal />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 7,
      name: "News",
      icon: <GiNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <HiOutlineTrophy />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <HiOutlineLightBulb />,
    },
    {
      id: 10,
      name: "Fashion & Beauty",
      icon: <MdFaceRetouchingNatural />,
    },
    {
      id: 11,
      name: "Podcast ",
      icon: <MdPodcasts />,
    },
  ];

  const MoreFromYt = [
    {
      id: 1,
      name: "YouTube Premium",
      icon: <IoLogoYoutube />,
    },

    {
      id: 2,
      name: "YouTube Studio",
      icon: <MdSlowMotionVideo />,
    },
    {
      id: 3,
      name: "YouTube Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "YouTube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  const Extra = [
    {
      id: 1,
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      id: 2,
      name: "Report History",
      icon: <BsFlag />,
    },
    {
      id: 3,
      name: "Help ",
      icon: <MdHelpOutline />,
    },
    {
      id: 4,
      name: "Send Feedback",
      icon: <RiFeedbackLine />,
    },
  ];

  return (
    <div className="px-6  w-[25%] h-[calc(100vh-6.625rem)] overflow-x-hidden overflow-y-scroll  pb-10">
      {" "}
      {/*This is main div of the sidebar all is wrapped inside this */}
      {/* for starting 3 icons and details  */}
      <div className="items-center space-y-3">
        {sidebarItems.map((item) => {
          return (
            <div className="flex items-center gap-4 hover:bg-gray-300 duration-200 rounded-xl px-3 py-2">
              <div className="cursor-pointer text-2xl">{item.icon}</div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/*for You section of the sidebar   */}
      <div>
        <div className="flex items-center gap-3 mt-3">
          <h2 className="font-bold text-2xl">You </h2>
          <h2 className="text-2xl">&gt;</h2>
        </div>
        <div className="items-center space-y-3 mt-3">
          {afterYou.map((item) => {
            return (
              <div className="flex items-center gap-3 hover:bg-gray-300 duration-200 rounded-xl px-3 py-2">
                <div className="cursor-pointer text-2xl">{item.icon}</div>
                <span className="cursor-pointer">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <hr />
      {/* for explore part of the sidebar  */}
      <div>
        <div className="mt-3 ">
          <h2 className="text-xl font-bold">Explore </h2>
        </div>
        <div className="items-center space-y-3 mt-3">
          {Explore.map((item) => {
            return (
              <div className="flex items-center gap-4 hover:bg-gray-300 duration-200 rounded-xl px-3 py-2">
                <div className="cursor-pointer text-2xl">{item.icon}</div>
                <span className="cursor-pointer">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <hr />
      {/* for more from yt part  */}
      <div>
        <div className="mt-3">
          <h2 className="text-xl font-bold">More From YouTube</h2>
        </div>
        <div className="items-center space-y-3 mt-3">
          {MoreFromYt.map((item) => {
            return (
              <div className="flex items-center gap-2  hover:bg-gray-300 duration-200 rounded-xl px-3 py-2">
                <div className="cursor-pointer text-2xl text-[rgb(255,0,0)]">
                  {item.icon}
                </div>
                <span className="cursor-pointer line-clamp-2">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <hr />
      <div>
        <div className="items-center space-y-3 mt-4">
          {Extra.map((item) => {
            return (
              <div className="flex items-center gap-4 hover:bg-gray-300 duration-200 rounded-xl px-3 py-2">
                <div className="cursor-pointer text-2xl">{item.icon}</div>
                <span className="cursor-pointer">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <hr />
      <span className="text-xs font-semibold text-gray-600">
        About Press Copyright <br />
        Contact us Creator <br />
        Advertise Developers <br /><br />
        <p>
          Terms Privacy Policy & Safety <br />
          How YouTube works <br /> Test new features
        </p>
      </span>
<br /><br />
      <span className="text-xs font-semibold text-gray-900">&Copyright; 2024 Google LLC</span>
      
    </div>
  );
};

export default Sidebar;
