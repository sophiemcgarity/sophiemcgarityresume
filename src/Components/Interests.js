import React, { Component } from 'react';
import GifPlayer from 'react-gif-player';
import hauntedJaunt from '../Assets/Video/Haunted_Jaunt.gif';
import hauntedJauntStill from '../Assets/Image/Haunted_Jaunt.jpg';
import spaceShooter from '../Assets/Video/Space_Shooter.gif';
import spaceShooterStill from '../Assets/Image/Space_Shooter.jpg';



class Interests extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: true
        };

        this.interests = props.interests;

    }
    render() {
        return (
            <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <div class="w-100">
                    <h2 class="mb-5">Interests</h2>
                    <div>
                        <p>{this.interests.paragraphOne}</p>
                    </div>
                    <div className="row ml-3">
                        <div className="gifSize mr-3">
                            <GifPlayer
                                gif={hauntedJaunt}
                                still={hauntedJauntStill}
                                pauseRef={pause => this.pauseGif = pause}
                                onTogglePlay={playing => this.setState({ playing })}
                            />
                        </div>
                        <div className="gifSize">
                            <GifPlayer
                                gif={spaceShooter}
                                still={spaceShooterStill}
                                pauseRef={pause => this.pauseGif = pause}
                                onTogglePlay={playing => this.setState({ playing })}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Interests;