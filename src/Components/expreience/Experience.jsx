import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs' 



const Experience = () => {
    return (
        <section id="experience">

            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experince__container">
                <div className="experince__frontend">

                    <h3>FrontEnd Development</h3>
                    <div className="experince__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>

                        </article><article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>

                </div>
                <div className="experince__backend">

                <h3>BackEnd Development</h3>
                    <div className="experince__content">

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>

                        </article><article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                    
                </div>

            </div>
            
        </section>
    )
}

export default Experience
