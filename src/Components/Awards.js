import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";

class Awards extends Component {
    constructor(props) {
        super(props);

        this.awards = props.awards;
    }
    render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
                <div class="w-100">
                    <h2 class="mb-5">Certifications</h2>
                    <ul class="fa-ul mb-0">
                        {
                            this.awards.map((award, index) => (
                                <li key={index}>
                                    <FontAwesomeIcon icon={faAward} color="#ffc107" />
                                    <span className="ml-2"> {award.awardDetail}</span>
                                        <div className="mb-2">
                                            <a href={award.url}>{award.organization}</a>
                                            <p>{award.date}</p>
                                        </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        );
    }
}

export default Awards;