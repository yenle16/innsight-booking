import img from "@/assets/images/autumn-image.png";
import Image from "next/image";
import imgDana from '@/assets/images/danang.png';
import imgHCM from '@/assets/images/ho-chi-minh.png';
import imgHaNoi from '@/assets/images/ha-noi.png';
import imgHA from '@/assets/images/hoi-an.png';
import imgHue from '@/assets/images/hue.png';
// import CardItem from "../carditem/carditem";
import Header from "@/components/header/header";
const city = [
    {
        img: imgDana,
        name: "Đà Nẵng",
    },
    {
        img: imgHCM,
        name: "Hồ Chí Minh",
    },
    {
        img: imgHaNoi,
        name: "Hà Nội",
    },
    {
        img: imgHue,      
        name: "Huế",
    },
    {
        img: imgHA,
        name: "Hội An",
    },

]
const cityFav = [
    {
        img: imgDana,
        name: "Đà Nẵng",
        describe: 'Biển Mỹ Khê, Đà Nẵng',
        reviews: 1234,
        score: 8.9,
    },
    {
        img: imgHCM,
        name: "Hồ Chí Minh",
        describe: 'Quận 1, Hồ Chí Minh',
        reviews: 1234,
        score: 8.9,
    },
    {
        img: imgHaNoi,
        name: "Hà Nội",
        describe: 'Biển Mỹ Khê, Đà Nẵng',
        reviews: 1234,
        score: 8.9,
    },
    {
        img: imgHue,
        name: "Huế",
        describe: 'Quận 1, Hồ Chí Minh',
        reviews: 1234,
        score: 8.9,
    },
]
const getHotelInCity = (cityName:string) => {
    console.log(city)
}
const HomeContainer = () => {
    return (
        <div className={'bg-white min-h-screen'}>
            <Header />
            <div className={ 'sm:w-full sm:p-3.5 md:p-8 lg:px-48'}>
                <div className={''}>
                    <div className={'text-black text-2xl font-semibold pb-3'}>Các ưu đãi đặc biệt cho bạn</div>
                    <div className={'flex sm:flex-col lg:flex-row justify-between'}>
                        <div className={' flex-1 sm:w-full lg:w-8/12 rounded-md pr-6'}>
                            <Image src={img} alt="Autumn background" className="rounded-2xl "/>
                        </div>
                        <div className={' text-black flex flex-col text-justify sm:w-full lg:w-3/12 justify-start pl-3'}>
                            Ưu đãi giảm giá 20% cho tất cả các đặt phòng vào tháng 10. Đừng bỏ lỡ cơ hội thư giãn và thưởng thức mùa thu tại khách sạn của chúng tôi.
                            <div>
                                <button className='float-right pt-6 text-blue'>Xem chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={''}>
                    <div className={'text-black pt-8 text-2xl font-semibold'}>Điểm đến thịnh hành</div>
                    <div className={''}>
                        <div className={`grid grid-cols-12 gap-4`}>
                            {city.map((cityItem, index) => (
                                <div
                                    key={index}
                                    onClick={() => getHotelInCity(cityItem.name)}
                                    className={` ${index < 2 ? 'col-span-6' : 'col-span-4'} py-4`}
                                >
                                    <span className="text-black font-semibold">{cityItem.name}</span>
                                    <Image src={cityItem.img} alt={cityItem.name} className="rounded-2xl h-full pt-2 hover:opacity-80" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className={''}>
                    <div className={'text-black pt-8 text-2xl font-semibold'}>Top các khách sạn được yêu thích nhất</div>
                    <div className={''}>
                        <div className="grid grid-cols-4 gap-4">
                            {cityFav?.map((cityItem, index) => (
                                <div key={index}
                                    onClick={() => getHotelInCity(cityItem.name)}
                                    className={'col-span-1}'}>
                                    {/* <CardItem item={cityItem} /> */}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeContainer