// eslint-disable-next-line no-unused-vars
import React from 'react'
import PostgreSql from "../../src/assets/icon/tools/postgresql.png";
import Mongodb from "../../src/assets/icon/tools/mongodb.png";
import Redis from "../../src/assets/icon/tools/redis.png";
import AWS from "../../src/assets/icon/tools/aws.png";
import Firebase from "../../src/assets/icon/tools/firebase.png";
import Docker from "../../src/assets/icon/tools/docker.png";
import Github from "../../src/assets/icon/tools/gitactions.png";
import Linux from "../../src/assets/icon/tools/linux.png";

const Tools = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Infrastructure & Tools</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={PostgreSql} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">PostgreSQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Mongodb} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">MongoDB</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Redis} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Redis</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={AWS} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">AWS(Lambda, EC2, S3)</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Firebase} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Firebase</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={Docker} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Docker</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Github} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">GitHub Actions</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Linux} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Linux</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools