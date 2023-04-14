import Slider from "../../components/slider/Slider";
import { images } from "../../data/slider-images";

export default function Homepage() {
    return (
        <div>
            <Slider images={images} />
        </div>
    )
}