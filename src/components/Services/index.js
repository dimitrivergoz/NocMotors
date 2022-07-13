import React from "react";
import NavLogo from "../navlogo";
import { logoblanc } from "../Style";
function Services() {
  return (
    <>
    <div className="mt-20" id="evenements">
    <NavLogo/>
        <div className="flex flex-row justify-between text-gray-100 pt-5">
          <h2 className="text-xl md:text-3xl mb-3 ml-5">Nos services</h2>
        </div>
      </div>
      <section id="services" className="mb-20">
        <div
          id="noc"
          className="container flex flex-col px-10 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row text-white pt-6"
        >
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="md:w-1/8 flex flex-col justify-center font-bold -mb-8">
              <img src={logoblanc} width="35%" alt="" />
              Que propose Noc Motors ?
            </h2>
            <p className="max-w-sm md:text-left pr-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur, quia fugiat. Nulla, cumque mollitia consequuntur sint
              dolorem labore eum, itaque incidunt alias pariatur culpa illo quos
              perferendis odit corporis dignissimos?
            </p>
          </div>
          <div></div>
          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-gray-400 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-black rounded-full md:py-1 bg-white">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-black">
                    Track comp
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                  Track comp
                </h3>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus fuga dolores odit beatae quibusdam mollitia iure a
                  quod nihil, ullam rem vel totam voluptatibus itaque sequi
                  similique necessitatibus reiciendis voluptate.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-gray-400 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-black rounded-full md:py-1 bg-white">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-black">
                    Track comp
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                  Track comp
                </h3>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus fuga dolores odit beatae quibusdam mollitia iure a
                  quod nihil, ullam rem vel totam voluptatibus itaque sequi
                  similique necessitatibus reiciendis voluptate.
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-gray-400 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-black rounded-full md:py-1 bg-white">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden text-black">
                    Track comp
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block text-white">
                  Track comp
                </h3>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus fuga dolores odit beatae quibusdam mollitia iure a
                  quod nihil, ullam rem vel totam voluptatibus itaque sequi
                  similique necessitatibus reiciendis voluptate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
