import Background from '../images/code.jpg';
import Navigation from '../components/Navigation.js';
import '../component-css/Navigation_CSS.css';
import '../component-css/View_CSS.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';


function View(){
    
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <section class="hero-wrap">
            <Navigation></Navigation>
           <div class="container">
               <div class="row no-gutters slider-text align-items-center">
                         <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                         <div class="col">
                             <div class="mb-4">
                                    <span class="box sb">hi there!</span>
                                    <h1>i'm chris mcdonald:</h1>
                                    <Typewriter options={{ strings: ['developer.', 'writer.', 'artist.', 'musician.', 'cat dad.', 'local weirdo.'], autoStart: true, loop: true,}}/>
                             </div>
                         </div>
                         </div>
                </div>
            </div>
        </section>
    );
}

export default View;