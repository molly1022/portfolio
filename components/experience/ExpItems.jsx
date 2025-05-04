import React, { useState, useRef, useEffect } from 'react';

const ExpItems = ({ item }) => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="exp__content">
            <div className="exp__container__icon">
                <div className="exp__icon">
                    <img src={item.img} />
                </div>
            </div>
            <h3 className="exp__title">{item.role_title}</h3>

            <div className="exp__comp">
                <span >{item.company_name}</span>
            </div>

            <span className="exp__button" onClick={() => toggleTab(item.id)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

            <div className={toggleState === item.id ? "exp__modal active-modal" : "exp__modal"}>
                <div className="exp__modal-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                    <h3 className="exp__modal-title">{item.role_title}</h3>
                    <p className="exp__modal-description">{item.description}</p>

                    <ul className="exp__modal-experiences grid">
                        { item.info.map( (infoItem, index) => {
                            return <li className="exp__modal-experience" key={index}>
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">{infoItem}</p>
                                    </li>
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExpItems;