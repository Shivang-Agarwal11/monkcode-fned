import React, { Component } from 'react';
import Courses from '../Courses/Courses';
import Jobs from '../Jobs/Jobs';
import './Home.css';
class Home extends Component {
    render() {

        return (
                    <div className='showcase'>
                        <Courses/>
                                                <Jobs />     
                    </div>  
            
        )
    };
}

export default Home;