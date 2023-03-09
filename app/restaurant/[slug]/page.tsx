import {Header} from "@/app/restaurant/[slug]/components/Header";
import {RestaurantNavbar} from "@/app/restaurant/[slug]/components/RestaurantNavbar";
import {Title} from "@/app/restaurant/[slug]/components/Title";
import {Rating} from "@/app/restaurant/[slug]/components/Rating";
import {Description} from "@/app/restaurant/[slug]/components/Description";
import {Images} from "@/app/restaurant/[slug]/components/Images";
import {Reviews} from "@/app/restaurant/[slug]/components/Reviews";
import {ReservationCard} from "@/app/restaurant/[slug]/components/ReservationCard";

export default function RestaurantPage() {
    return (
        <>
                    <div className="bg-white w-[70%] rounded p-3 shadow">
                        {/* RESTAURANT NAVBAR */}
                        <RestaurantNavbar/>
                        {/* RESTAURANT NAVBAR */}
                        {/* TITLE */}
                        <Title/>
                        {/* TITLE */}
                        {/* RATING */}
                        <Rating/>
                        {/* RATING */}
                        {/* DESCRIPTION */}
                        <Description/>
                        {/* DESCRIPTION */}
                        {/* IMAGES */}
                        <Images/>
                        {/* IMAGES */}
                        {/* REVIEWS */}
                        <Reviews/>
                        {/* REVIEWS */}
                    </div>
                    <div className="w-[27%] relative text-reg">
                        <ReservationCard/>
                    </div>
        </>
    )
}
