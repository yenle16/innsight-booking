import axios from "axios";

const BASE_URL = 'http://localhost:3000';

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export interface Hotel {
    hotelId: number;
    hotelName: string;
    hotelType: number;
    address: string;
    priceByNight: number;
    hotelAmenities: string[];
    hotelImage: string[];
    description: string;
    roomsList: Room[];
    reviews: Review[];
    rules: Rule[];
}

export interface Room {
    id: number;
    roomName: string;
    discountPrice: number;
    price: number;
    roomImage: string;
    adult: number;
    quatity: number;
    children: number;
    services: string[];
    amenities: string[];
}

export interface Review {
    rate: number;
    review: string;
}

export interface Rule {
    name: string;
    describe: string;
}

export const getHotelById = async (id: number): Promise<{ Data: Hotel }> => {
    // const response = await axios.post(`${BASE_URL}`, JSON.stringify(data), config);
    // return response
    // console.log(id)
    const response: Hotel = {
        hotelId: 1,
        hotelName: 'Le House Boutique Hotel',
        hotelType: 3,
        address: '54 Nguyễn Lương Bằng, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng 550000, Việt Nam',
        priceByNight: 400000,
        hotelAmenities: [
            "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
        ],
        hotelImage: [
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',

        ],
        description: `Lưu trú tại La Beach Hotel là một lựa chọn đúng đắn khi quý khách đến thăm Phước Mỹ. Quầy tiếp tân 24 giờ luôn sẵn sàng phục vụ quý khách từ thủ tục nhận phòng đến trả phòng hay bất kỳ yêu cầu nào.`,
        roomsList: [
            {
                id: 1,
                roomName: 'Phòng Premium hai giường',
                discountPrice: 600000,
                price: 696900,
                roomImage: 'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                adult: 2,
                quatity: 10,
                children: 1,
                services: [
                    "Bãi đậu xe", "Nhận phòng nhanh", "Đã bao gồm bữa sáng", "Có thể đổi lịch"
                ],
                amenities: [
                    "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
                ]
            },
            {
                id: 1,
                roomName: 'Phòng Premium hai giường',
                discountPrice: 600000,
                price: 696900,
                roomImage: 'https://s3-alpha-sig.figma.com/img/62a3/8c8b/d795534912d8a246317e3f5d44c84d3b?Expires=1698624000&Signature=dbETZFyOeLtI1o4fAzmwPluhPMCiBkMxRsEBAwmOILmaXEvQfaud8HNGummJvG2Llsgj2jLn3c9ORaJFcC~eeaVxdDAEukSVJkDMNm-g6QrO-2LO0q2D4m0h-N8VJZBPW-~TJMvr3TpXqdydk~PPMH7bJLh6xXpPf-daVjC0f4-8qABot~p3aZRP~JwDeDNP~8ptfzVMmgL056vS7t3T5wcE3WyPnZcqgathpMqXIIo3RnODvGZQCAiwNc6Sg6YSH1PbqvH6DeVDZuXqpjSbMek2HbGLr2cHyrhMpHLbnOWZABHV0tVFWnZneihaEypcLHDwYThMrBEUfJ2NXd36aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                quatity: 5,
                adult: 2,
                children: 1,
                services: [
                    "Bãi đậu xe", "Nhận phòng nhanh", "Đã bao gồm bữa sáng", "Có thể đổi lịch"
                ],
                amenities: [
                    "2 giường đơn", "Nhà tắm riêng", "Điều hoà", "2 giường đơn", "Nhà tắm riêng", "Điều hoà",
                ]
            }
        ],
        reviews: [
            {
                rate: 8.9,
                review: "Sạch đẹp",
            },
            {
                rate: 9.9,
                review: "Không bẩn",
            }
        ],
        rules: [
            {
                name: "Check in",
                describe: "Từ 14:00 - 00:00",
            },
            {
                name: "Check out",
                describe: "Từ 00:00 - 12:00",
            },
            {
                name: "Hủy đặt phòng/Trả trước",
                describe: "Các chính sách hủy và thanh toán trước có khác biệt dựa trên loại chỗ nghỉ. Vui lòng kiểm tra các điều kiện có thể được áp dụng cho mỗi lựa chọn của bạn.",
            },
            {
                name: "Trẻ em và giường",
                describe: `Chính sách trẻ em
                    Phù hợp cho tất cả trẻ em.
                    Trẻ em từ 18 tuổi trở lên sẽ được tính giá như người lớn tại chỗ nghỉ này.
                    Để xem thông tin giá và tình trạng phòng trống chính xác, vui lòng thêm số lượng và độ tuổi của trẻ em trong nhóm của bạn khi tìm kiếm.
                    
                    Chính sách nôi (cũi) và giường phụ
                    Chỗ nghỉ này không có nôi/cũi và giường phụ.`,
            },
            {
                name: "Hút thuốc",
                describe: "Không cho phép hút thuốc.",
            },
            {
                name: "Vật nuôi",
                describe: "Không cho phép vật nuôi.",
            },
        ]

    }
    return { Data: response };
}
export const searchHotels = (filter: any): Promise<{ Data: Hotel[] }> => {
    // Implement your search logic here
    return Promise.resolve({ Data: [] });
};

export const SignIn = (data: any): { Token: string } => {
    // Implement your sign-in logic here
    return { Token: 'ABCToken' };
};

export const SignUp = (data: any): { Message: string } => {
    // Implement your sign-up logic here
    return { Message: 'OK' };
};