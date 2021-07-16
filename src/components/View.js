import Background from '../images/code.jpg';
import Navigation from '../components/Navigation.js';
import '../component-css/Navigation_CSS.css';
import '../component-css/View_CSS.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import { AddOutline } from 'react-ionicons';


function View(){
    
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <section class="hero-wrap">
           <div class="container">
               <div class="row no-gutters slider-text align-items-center">
                         <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                         <div class="col-lg">
                             <div class="mb-4">
                                    <span class="box sb">Hi there!</span>
                                    <h1>I'm chris mcdonald:</h1>
                                    <Typewriter options={{ strings: ['developer.', '60% iced coffee by volume','writer.', 'artist.', 'musician.', 'cat dad.', 'local weirdo.'], autoStart: true, loop: true,}}/>
                             </div>
                             <p class="mb-4-p">
                                    Welcome to my personal website. Here you'll find a bit of everything I'm up to. The site is a work in progress. Please direct all criticisms the site admin/tabby cat, Winston. 
                             </p>
                             <p class="social-media mt-5">
                                 <a href="https://www.linkedin.com/in/christianmcdonald90/"><AddOutline color={"#00000"} height="15px" width="15px"/>linkedin</a>
                                 <a href="https://github.com/religionfastfood"><AddOutline color={"#00000"} height="15px" width="15px"/>github</a>
                             </p>
                         </div>
                         </div>
                </div>
            </div>
        </section>
    );
}

export default View;