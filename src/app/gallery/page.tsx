import { ParallaxScroll } from "@/components/ui/ParallaxScroll";

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
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133599/gallery/gtydpnsmmnknfwmhtssj.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133554/gallery/b6pqulukwtcmyxo27e98.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133553/gallery/ydnkndtogkz8n6whn5tu.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133544/gallery/o1cvzghm8bjksmclqdma.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133544/gallery/yllhbmnebolei4nqodus.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133538/gallery/qri4reqqmbnl5mlsbugr.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133520/gallery/ohrw4vaohpgkfb94wqmc.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133500/gallery/kh3chlr5wy1fbks1supy.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133490/gallery/v2dnjee5sgzde4ngijac.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133480/gallery/xmu7f98txmmaobln1pyd.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133469/gallery/xcskkieldro4hco7chis.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133458/gallery/phamhmic5t6sadmibo6s.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/gallery/jyv3czg9mhbbn3lmylkd.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/gallery/ceolt5xfvjiygoiktduv.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/gallery/nbp1xwdbx0nch0ubmvbz.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133437/gallery/j7wt8aepekjn3minfbp4.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133434/gallery/bwnw1ja1wdctrpre5baj.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133433/gallery/uykcuex5vcismzntgwgo.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133433/gallery/hbkk79xptaxc7gknlegr.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133432/gallery/zpjnkbbzzx0gyhtd5emv.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133432/gallery/uz3sn4maskkum4t0nmnd.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133431/gallery/eg1gcehvfd6cfi0qvwz9.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/rpxh7tsud776nrhu7v9b.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/rjda5kh98xoa6sg65jvg.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/uexunumgxvxu2avcnyre.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/bjqh6dmc0tivhvtlpjm2.jpg",
    "https://res.cloudinary.com/dbjy9s3cz/image/upload/v1726133429/gallery/zjm24mgrf8xzao46ojof.jpg",
];
