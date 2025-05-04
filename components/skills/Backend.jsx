// eslint-disable-next-line no-unused-vars
import React from 'react'
import Flask from "../../src/assets/icon/back/flask.png";
import Django from "../../src/assets/icon/back/django.png";
import FastAPI from "../../src/assets/icon/back/fastapi.png";
import Node from "../../src/assets/icon/back/node.png";
import PHP from "../../src/assets/icon/back/php.png";
import RestFulApi from "../../src/assets/icon/back/restapi.png";
import GraphQl from "../../src/assets/icon/back/graphql.png";
import WebSockets from "../../src/assets/icon/back/websocket.png";
import Pandas from "../../src/assets/icon/back/pandas.png";
import Numpy from "../../src/assets/icon/back/numpy.png";
import ETL from "../../src/assets/icon/back/etlpipeline.png";
import Scripting from "../../src/assets/icon/back/scripting.png";
import Bots from "../../src/assets/icon/back/bot.png";
import Scraping from "../../src/assets/icon/back/scraping.png";


const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={Flask} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Flask</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Django} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Django</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={FastAPI} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">FastAPI</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Node} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={PHP} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">PHP</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={RestFulApi} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">RESTful APIs</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={GraphQl} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">GraphQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <img src={WebSockets} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">WebSockets</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Pandas} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Pandas</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Numpy} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Numpy</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={ETL} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">ETL pipelines</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Scripting} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Scripting</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Bots} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Bots</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Scraping} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Web Scraping</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Backend