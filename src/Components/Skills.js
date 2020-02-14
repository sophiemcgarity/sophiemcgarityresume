import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3Alt, faGit, faJs, faNodeJs, faNpm, faSass } from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.skills = props.skills;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-2">Programming Languages &amp; Tools</div>
                    <div className="row">
                        <div className="col-6">
                            <p className="dev-icons mb-4">
                                <FontAwesomeIcon icon={faHtml5} className="mr-3"/>
                                <FontAwesomeIcon icon={faCss3Alt} className="mr-3"/>
                                <FontAwesomeIcon icon={faJs} className="mr-3"/>
                                <FontAwesomeIcon icon={faReact} className="mr-3"/>
                                <FontAwesomeIcon icon={faGit} className="mr-3"/>
                                <FontAwesomeIcon icon={faNodeJs} className="mr-3"/>
                                <FontAwesomeIcon icon={faNpm} className="mr-3"/>
                                <FontAwesomeIcon icon={faSass} className="mr-3"/>
                            </p>
                            <div class="subheading mb-2">Workflow</div>
                            {
                                this.skills.map((skill, index) => (
                                    <div key={index}>
                                        <FontAwesomeIcon icon={faCheck} className="mr-2"/>{skill.name}
                                    </div>

                                ))
                            }
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;