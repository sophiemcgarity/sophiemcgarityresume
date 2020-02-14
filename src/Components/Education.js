import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);

        this.education = props.education;
    }

    render() {

        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div class="w-100">
                    <h2 class="mb-5">Education</h2>
                    {
                        this.education.map((edu, index) => (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="resume-content">
                                    <h3 class="mb-0">{edu.school}</h3>
                                    <div class="subheading mb-0">{edu.location}</div>
                                    <h4>{edu.degree}</h4>
                                    <div class="mb-4">{edu.major}</div>
                                    <h4 class="mb-1">Achievements</h4>
                                    <div>{edu.achievement}</div>
                                    {
                                        edu.activity && <div><h4 class="mb-1 mt-3">Activities</h4>{edu.activity}</div>
                                    }
                                    <h4 class="mb-1  mt-3">Courses</h4>
                                    <div className="ul">
                                        <li>{edu.class1}</li>
                                        <li>{edu.class2}</li>
                                        <li>{edu.class3}</li>
                                    </div>
                                </div>
                                <div class="resume-date text-md-right">
                                    <span class="text-primary">
                                        {edu.fromDate} - {edu.toDate}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Education;