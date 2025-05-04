/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ExpData } from './Data';
import ExpItems from './ExpItems';
import './experience.css';

const Experience = () => {
    
  return (
    <div className="experience" id="experience">
        <div className="exp__background">
            <div className="section">
                <h2 className="section__title">Experience 💼</h2>
                <span className="section__subtitle">What I work as</span>

                <div className="exp__container container grid">
                    { ExpData.map((item) => {
                        return <ExpItems item={item} key={item.id} />
                    }) }                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience