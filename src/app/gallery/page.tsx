import { ParallaxScroll } from "@/components/ui/ParallaxScroll";
import pic1 from "../../../public/assets/gallery/C0006T01.jpg";
import pic2 from "../../../public/assets/gallery/C0013T01.jpg";
import pic3 from "../../../public/assets/gallery/C0031T01.jpg";
import pic4 from "../../../public/assets/gallery/C0039T01.jpg";
import pic5 from "../../../public/assets/gallery/C0041T01.jpg";
import pic6 from "../../../public/assets/gallery/C0044T01.jpg";
import pic7 from "../../../public/assets/gallery/C0048T01.jpg";
import pic8 from "../../../public/assets/gallery/C0123T01.jpg";
import pic9 from "../../../public/assets/gallery/C0127T01.jpg";
import pic10 from "../../../public/assets/gallery/C0128T01.jpg";
import pic11 from "../../../public/assets/gallery/C0130T01.jpg";
import pic12 from "../../../public/assets/gallery/Clip0029T01.jpg";
import pic13 from "../../../public/assets/gallery/Clip0035T01.jpg";
import pic14 from "../../../public/assets/gallery/Clip0095T01.jpg";
import pic15 from "../../../public/assets/gallery/Clip0096T01.jpg";
import pic16 from "../../../public/assets/gallery/DSC06900.jpg";
import pic17 from "../../../public/assets/gallery/DSC06940.jpg";
import pic18 from "../../../public/assets/gallery/DSC07174.jpg";
import pic19 from "../../../public/assets/gallery/DSC07203.jpg";
import pic20 from "../../../public/assets/gallery/DSC07219.jpg";
import pic21 from "../../../public/assets/gallery/DSC07333.jpg";
import pic22 from "../../../public/assets/gallery/GETH1049.jpg";
import pic23 from "../../../public/assets/gallery/GETH1124.jpg";
import pic24 from "../../../public/assets/gallery/GETH7220.jpg";
import pic25 from "../../../public/assets/gallery/GETH7222.jpg";
import pic26 from "../../../public/assets/gallery/GETH7224.jpg";
import pic27 from "../../../public/assets/gallery/GETH7227.jpg";
import pic28 from "../../../public/assets/gallery/GETH7229.jpg";
import pic29 from "../../../public/assets/gallery/GETH7231.jpg";
import pic30 from "../../../public/assets/gallery/GETH7234.jpg";
import pic31 from "../../../public/assets/gallery/IMG20230817155441.jpg";
import pic32 from "../../../public/assets/gallery/pic1.jpg";
import pic33 from "../../../public/assets/gallery/pic2.jpg";
import pic34 from "../../../public/assets/gallery/pic3.jpg";

function Gallery() {
    function shuffleArray(array: string[]) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    shuffleArray(images);

    return <ParallaxScroll images={images} />;
}

export default Gallery;

const images = [
    pic1.src,
    pic2.src,
    pic3.src,
    pic4.src,
    pic5.src,
    pic6.src,
    pic7.src,
    pic8.src,
    pic9.src,
    pic10.src,
    pic11.src,
    pic12.src,
    pic13.src,
    pic14.src,
    pic15.src,
    pic16.src,
    pic17.src,
    pic18.src,
    pic19.src,
    pic20.src,
    pic21.src,
    pic22.src,
    pic23.src,
    pic24.src,
    pic25.src,
    pic26.src,
    pic27.src,
    pic28.src,
    pic29.src,
    pic30.src,
    pic31.src,
    pic32.src,
    pic33.src,
    pic34.src,
];
