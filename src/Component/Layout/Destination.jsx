import LightGallery from 'lightgallery/react';
import img1 from '../../assets/sundorbon.png';
import img2 from '../../assets/Sreemongol.png';
import img3 from '../../assets/Rectangle 27.png';
import img4 from '../../assets/Rectangle 26.png';
import img5 from '../../assets/Rectangle 1.png';



// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// // If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Destination = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const image = [
        {
            name:"sundorbon", src: img1
        }
    ]
    return (
        <div >
      

                <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <a href="img/img1.jpg">
                    <img alt={image.name} src={image.src} />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img2" src={img2} />
                </a>
                <a href="img/img1.jpg">
                    <img alt="img1" src={img3} />
                </a>
                <a href="img/img2.jpg">
                    <img alt="img2" src={img4} />
                </a>
                <a href="img/img1.jpg">
                    <img alt="img1" src={img5} />
                </a>
              
                </div>
            </LightGallery>
            </div>
     
    );
};

export default Destination;