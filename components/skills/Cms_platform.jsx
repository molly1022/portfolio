// eslint-disable-next-line no-unused-vars
import React from 'react'
import Wordpress from "../../src/assets/icon/cms/wordpress.png";
import Shopify from "../../src/assets/icon/cms/shopify.png";
import Webflow from "../../src/assets/icon/cms/webflow.png";
import Lovable from "../../src/assets/icon/cms/lovable.png";
import Headless from "../../src/assets/icon/cms/headlesscms.png";


const Cms_platform = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">CMS/Platforms</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <img src={Wordpress} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Wordpress</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Shopify} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Shopify</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Lovable} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Lovable</h3>
                        <span className="skills__level">Expert</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <img src={Webflow} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Webflow</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <img src={Headless} alt="svelte" className="skills__icon" />

                    <div>
                        <h3 className="skills__name">Headless CMS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cms_platform