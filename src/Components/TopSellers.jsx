import React, { useContext, useState, useEffect } from "react";
import { resource } from "../Main";
import Card from "./Card";

function TopSellers() {
  const { topsel } = useContext(resource);
  const [counter, setCounter] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  const [desktopItems, setDesktopItems] = useState(6);
  const [tabletItems, setTabletItems] = useState(3);
  const [mobileItems, setMobileItems] = useState(1);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [displayCards, setDisplayCards] = useState(
    pageWidth >= 1024 ? 6 : pageWidth >= 768 && pageWidth < 1024 ? 3 : 1
  );
  const [styleWidth, setStyleWidth] = useState(
    displayCards === 6 ? 190 : displayCards === 3 ? 200 : 325
  );

  let margin = 0;

  let slider = document.querySelector(".pack-container");
  let cardWith = document.querySelector(".item");

  useEffect(() => {
    setCounter(counter + 1);
    const handleResize = () => {
      setPageWidth(window.innerWidth);
      if (pageWidth >= 1024) {
        setDisplayCards(desktopItems);
        setStyleWidth(190);
      }
      if (pageWidth >= 768 && pageWidth < 1024) {
        setDisplayCards(tabletItems);
        setStyleWidth(200);
      }
      if (pageWidth < 768) {
        setDisplayCards(mobileItems);
        setStyleWidth(325);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [displayCards, viewAll, styleWidth]);
  console.log(pageWidth, displayCards, styleWidth);

  const btnLeft = () => {
    if (viewAll) {
      return;
    } else {
      let containerwidth = slider.clientWidth;
      slider.scrollLeft = slider.scrollLeft - containerwidth;
    }
  };

  const btnRight = () => {
    if (viewAll) {
      return;
    } else {
      let containerwidth = slider.clientWidth;
      slider.scrollLeft = slider.scrollLeft + containerwidth;
    }
  };
  const btnViewAll = () => {
    setViewAll(!viewAll);
  };
  return (
    <div className="flex flex-col px-6 md:px-16 py-10">
      <div className="flex justify-between flex-row items-center ">
        <div>
          <h1 className=" text-sm md:text-xl lg:text-2xl font-semibold md:font-normal">
            Our top Sellers
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div>
            <button
              className=" px-2 md:py-2 md:px-4 bg-gray-200 rounded-full mr-2"
              onClick={btnLeft}
            >
              &lt;
            </button>
            <button
              className=" px-2  md:py-2 md:px-4 bg-gray-200 rounded-full"
              onClick={btnRight}
            >
              &gt;
            </button>
          </div>
          <div>
            <button
              className=" text-xs py-2 px-3 md:py-2 md:px-4 bg-gray-200 rounded-md ml-5"
              onClick={btnViewAll}
            >
              View all
            </button>
          </div>
        </div>
      </div>
      <div className=" pack-container relative overflow-x-hidden h-[250px] mt-5">
        <div className=" pack-width absolute left-0 flex items-start justify-start transition duration-1000 ease-in">
          {topsel.map((ind) => (
            <div
              key={ind.id}
              className="item bg-gray-200 h-60 rounded-md shadow-md mr-[10px] text-center flex items-center justify-center"
              style={{
                width: `${styleWidth}px`,
              }}
              // style="{`width:${styleWidth}px`}"
            >
              <Card id={ind.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopSellers;
