import React, { Component } from 'react';
import "./NavBar.css";
import { Carousels } from '../Carousel/Carousel';
import Jobs from '../Jobs/Jobs';

class Home extends Component {
    render() {

        return (
            <React.Fragment>
                    <div>

                        <div className='carousel'>
                            <Carousels />
                        </div>
                        <Jobs />
                    </div>
                
            </React.Fragment>
        )
    };
}

export default Home;