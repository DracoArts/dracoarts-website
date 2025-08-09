"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import { TEAM_DATA } from "@/public/data/team";
const Team = () => {
  const settings: Settings = {
    infinite: true,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 1500,
    centerPadding: "60px",

    focusOnSelect: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  const slider = useRef<Slider>(null);

  function scroll(e: WheelEvent) {
    if (slider === null) return 0;
    if (slider.current) {
      e.deltaY > 0 ? slider.current.slickNext() : slider.current.slickPrev();
    }
  }
  useEffect(() => {
    let parent = document.getElementById("parent");
    parent!.addEventListener("wheel", scroll);
    return () => {
      parent!.removeEventListener("wheel", scroll);
    };
  }, []);
  return (
    <section className="team-members pt-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-header text-center">
              <h4 className="sub-title">
                We Have A Passion For <span>Games!</span>
              </h4>
              <span className="fs-two heading mb-6">
                Our team is next-level. And we&apos;re <span>proud of it.</span>
              </span>
              <p>
                Meet our passionate team: creative artists, skilled developers,
                sharp analysts, and visionary product managers. Together, we
                push boundaries, spark innovation, and bring every project to
                life with energy and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="parent">
        <Slider ref={slider} {...settings} className="team-carousel">
          {TEAM_DATA.map((item) => (
            <div className="slide-area">
              <div className="single-slider">
                <div className="thumb">
                  <Image
                    width={416}
                    height={550}
                    src={item.image}
                    alt="Image"
                  />
                </div>
                <div className="title-area">
                  <h4 className="pt-8 pb-2">
                    <Link href={item.linkedin}>{item.name}</Link>
                  </h4>
                  <span className="designation">{item.position}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Team;
