// eslint-disable-next-line no-unused-vars
import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import Cms_platform from './Cms_platform';
import Tools from './Tools';
import './skills.css'

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__background">
        <div className="section">
          <h2 className="section__title">Skills 🛠️</h2>
          <span className="section__subtitle">My Technical Level</span>

          <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Cms_platform />
            <Tools />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills