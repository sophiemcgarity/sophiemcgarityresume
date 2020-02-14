import React, { Component } from 'react';
import image from '../Assets/Image/profileSquare.jpg';
import { Link, animateScroll as scroll } from "react-scroll";

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.sidebarData = props.sidebarData;
    }
    scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
                    <span className="d-none d-lg-block">
                        <img onClick={this.scrollToTop} className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt="Profile of Sophie McGarity" />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <Link className="nav-item"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            <a className="nav-link" href="#about">About</a>
                        </Link>
                        <Link className="nav-item"
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            <a className="nav-link" href="#experience">Experience</a>
                        </Link>
                        <Link className="nav-item"
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            <a className="nav-link" href="#education">Education</a>
                        </Link>
                        <Link className="nav-item"
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            <a className="nav-link" href="#skills">Skills</a>
                        </Link>
                        <Link className="nav-item"
                            activeClass="active"
                            to="interests"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            <a className="nav-link" href="#interests">Interests</a>
                        </Link>
                        <Link className="nav-item"
                            activeClass="active"
                            to="awards"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            >
                            <a className="nav-link" href="#awards">Certifications</a>
                        </Link>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;