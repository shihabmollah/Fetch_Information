import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};
export default function Fotter(props) {
  return (
      <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
        {/* // ? Reach me at */}
        <div className="flex flex-row space-x-8 ">
          <ClickableIcon
            href={"https://github.com/shihabmollah"}
            Icon={GithubIcon}
          />
          <ClickableIcon
            href={"https://www.linkedin.com/in/shihab-mollah-647002257/?originalSubdomain=in"}
            Icon={LinkedinIcon}
          />
          <ClickableIcon
            href={"https://www.instagram.com/shihab_38_mollah/"}
            Icon={InstagramIcon}
          />
          
        </div>
        

           
         
      </div>
  );
}
