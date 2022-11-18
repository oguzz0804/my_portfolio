import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggle, setToggle] = useState(false)

    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <section className="services section" id="serviecs">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__tile">
                            Web <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "services__modal active-modal "
                        : "services__modal "}>
                        <div className="services__modal-content">

                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Web Designer</h3>

                            <p className="services__modal-description"></p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Web page development</p>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__tile">
                            Database <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggle === 2 ? "services__modal active-modal "
                        : "services__modal "}>
                        <div className="services__modal-content">

                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Database Designer</h3>

                            <p className="services__modal-description"></p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Creating dynamic structure</p>

                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Admin Panel</p>

                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services