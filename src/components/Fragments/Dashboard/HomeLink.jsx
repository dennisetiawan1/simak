import React from 'react'
import home from "../../../assets/home-1.svg"

const HomeLink = ({title}) => {
  return (
    <div class="w-[1220px] mx-auto">
    <div class="justify-between flex flex-row w-full py-4">
        <h1 class="text-xl">{title}</h1>
        <div class="flex flex-row items-center">
          <a href="/" class="home-logout-link">
            <img src={home} alt="" />
            Home
          </a>
          <h1 class="text-sm">/</h1>
          <a
            href="/login"
            class="home-logout-link border-dotted hover:border-b-2 hover:border-solid duration-300"
            data-modal-target="popup-modal1"
            data-modal-toggle="popup-modal1"
          >
            <img src="images/logout.svg" alt="" />
            Log Out
          </a>
        </div>
      </div>
    </div>
  )
}
HomeLink.defaultProps = {
  title: "Dashboard",
};

export default HomeLink
