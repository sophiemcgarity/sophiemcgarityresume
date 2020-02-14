import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Experience extends Component {
    constructor(props) {
        super(props);

        this.experience = props.experience;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>
                    {
                        this.experience.map((exp, index) => (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <h3 className="mb-0">{exp.position}</h3>
                                    <div className="subheading mb-3">{exp.organization}</div>
                                    <p>{exp.aboutWork}</p>
                                    <p>Tools: {exp.tools}</p>
                                    {
                                        exp.url && <a href={exp.url}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                                    }
                                    
                                </div>
                                <div className="resume-date text-md-right">
                                    <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Experience;