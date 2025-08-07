"use client";
import Link from "next/link";
import aboutBlockBg from "@/public/images/about-block-bg.png";
import Image from "next/image";
import CounterElement from "../Counter";
import PrimaryBtn from "../PrimaryBtn";
import { ABOUT_DATA } from "@/public/data/about";
const About = () => {
  return (
    <section className="about-block pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xxl-6 col-lg-6 order-1 order-lg-0">
            <div className="sec-img mw-100 position-relative d-center">
              <Image src={aboutBlockBg} alt="sec-img" />
              <div className="experience p-2 p-lg-4 position-absolute ">
                <div className="experience-wrap p-3 px-lg-5 py-lg-8 d-inline-flex d-center gap-3">
                  <div className="counters d-center">
                    <CounterElement end={ABOUT_DATA.experience} className="display-four" />
                    <span className="display-four visible-slowly-bottom symbol">
                      +
                    </span>
                  </div>
                  <span className="w-25 d-inline-bloc">
                    Years Of Experience
                    
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6">
            <div className="section-text">
              <h4 className="sub-title">
                Welcome to <span>Draco Arts</span> Game Studios
              </h4>
              <span className="fs-two heading mb-6">
                Bringing people together through <span>the power of play</span>
              </span>
              <p>
                As Draco Arts Game & Art Studio, we continue to open doors to new worlds every
                day and we are working excitedly for creating new games and
                unique ideas!
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <div className="counters mb-3 d-flex align-items-center">
                    <CounterElement
                      end={ABOUT_DATA.total_downloads.total}
                      className="odometer fs-three heading"
                    />
                    <span className="fs-three heading">{ABOUT_DATA.total_downloads.symbol}</span>
                    <span className="fs-three heading symbol">+</span>
                  </div>
                  <span className="name-area fs-seven">
                      {ABOUT_DATA.total_downloads.description}
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <div className="counters mb-3 d-flex align-items-center">
                    <CounterElement
                      end={ABOUT_DATA.daily_users.total}
                      className="odometer fs-three heading"
                    />

                    <span className="fs-three heading">{ABOUT_DATA.daily_users.symbol}</span>
                    <span className="fs-three heading symbol">+</span>
                  </div>
                  <span className="name-area fs-seven">
                    {ABOUT_DATA.daily_users.description}
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <div className="counters mb-3 d-flex align-items-center">
                    <CounterElement
                      end={ABOUT_DATA.experts.total}
                      className="odometer fs-three heading"
                    />

                    <span className="fs-three heading symbol">+</span>
                  </div>
                  <span className="name-area fs-seven">
                    {ABOUT_DATA.experts.description}
                  </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item mb-8 pb-4">
                  <div className="counters mb-3 d-flex align-items-center">
                    <CounterElement
                      end={ABOUT_DATA.games.total}
                      className="odometer fs-three heading"
                    />
                    
                    <span className="fs-three heading symbol">+</span>
                  </div>
                  <span className="name-area fs-seven">
                    {ABOUT_DATA.games.description}
                  </span>
                </div>
              </div>
            </div>
            <PrimaryBtn text="Explore Our Games" classes="mt-2" href="game" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
