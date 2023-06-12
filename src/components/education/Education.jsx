import React from "react";
import "./qualification.css";
import { HiOutlineCalendar } from "react-icons/hi";
import { education } from "../../config";

const RounderLine = () => (
  <div>
    <span className='qualification__rounder'></span>
    <span className='qualification__line'></span>
  </div>
);

const Education = () => {
  return (
    <section className='qualification section' id='education'>
      <h2 className='section__title'>Education</h2>
      <span className='section__subtitle'>My Journey</span>

      <div className='qualification__container container'>
        <div>
          {education.map((item, index) => (
            <div className='qualification__content' key={item.id}>
              <div className='qualification__data'>
                {index % 2 !== 0 && (
                  <>
                    <div></div>
                    <RounderLine />
                  </>
                )}
                <div>
                  <h3 className='qualification__title'>{item.schoolName}</h3>
                  <span className='qualification__subtitle'>{item.degree}</span>
                  <div className='qualification__calendar'>
                    <HiOutlineCalendar className='qualification__calendar-icon' />
                    {item.date} | {item.location}
                  </div>
                </div>

                {index % 2 === 0 && <RounderLine />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
