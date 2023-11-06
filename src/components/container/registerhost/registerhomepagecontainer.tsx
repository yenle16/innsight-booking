import IcCheck from "@/components/icons/ic-check";
import Link from "next/link";
import imgBanner from '@/assets/images/banner.jpg'
import Image from "next/image";
interface Feedback {
  score: number;
  content: string;
}

const feedback: Feedback[] = [
  {
    score: 9,
    content:
      "InnSight là một trong những kênh giúp chúng tôi giữ vững độ lấp đầy phòng trống cao. Điều này chủ yếu nhờ mô hình đặt phòng tức thì và khả năng bán lại phòng bị hủy dễ dàng hơn.",
  },
  {
    score: 8,
    content:
      "InnSight là một trong những kênh giúp chúng tôi giữ vững độ lấp đầy phòng trống cao. Điều này chủ yếu nhờ mô hình đặt phòng tức thì và khả năng bán lại phòng bị hủy dễ dàng hơn.",
  },
];

const RegisterHomeContainer: React.FC = () => {
  return (
    <div>
      <div className={'bg-indigo-950 min-h-screen sm:w-full sm:p-3.5 md:p-8 lg:px-48'}>
        <div className={'flex justify-between items-center lg:py-20'}>
          <div className='hidden xl:flex flex-1 flex-col 2xl:text-left xl:mr-20'>
            <h1 className='font-bold text-5xl leading-snug'>Đăng ký nơi lưu trú của mình trên InnSight</h1>
            <p className='text-2xl '>Dù kinh doanh chỗ nghỉ là công việc tay trái hay toàn thời gian, đừng quên đăng kí
              nhà nghỉ dưỡng trên Booking.com để tiếp cận du khách khắp thế giới</p>
          </div>
          <div className={`flex-none items-center bg-white rounded-lg p-5 px-8`} >
            <p className='text-xl font-semibold py-5 text-black'>Tăng thu nhập với lượng đơn đặt đều đặn</p>

            <div className={'flex py-2'}>
              <IcCheck />
              <p className='text-sm pl-5 text-black'>45% đối tác nhận được đơn đặt đầu tiên trong vòng 1 tuần</p>
            </div>

            <div className={'flex py-2'}>
              <IcCheck />
              <p className='text-sm pl-5 text-black'>Hơn 1,1 tỉ khách lưu trú tại nhà nghỉ dưỡng từ năm 2010</p>
            </div>

            <div className={'flex py-2'}>
              <IcCheck />
              <p className='text-sm pl-5 text-black'>Toàn quyền kiểm soát chỗ nghỉ và tài chính</p>
            </div>

            <div className={'flex py-2'}>
              <IcCheck />
              <p className='text-sm pl-5 text-black'>Đăng kí miễn phí và chỉ mất 15 phút</p>
            </div>

            <button className={'border-none mt-8 py-2 px-4 rounded drop-shadow-md inline-flex items-center justify-center w-full  bg-blue-600 hover:opacity-80'}>
              <Link href="">
                <span className='font-semibold text-xl text-white py-2 '>Đăng ký ngay</span>
              </Link>
            </button>

          </div>

        </div>
      </div>
      <div className={'justify-between hidden xl:block bg-gray-100 border-none h-5/6 sm:w-full sm:p-3.5 md:p-8 lg:px-48'}>
        <h1 className='text-4xl font-bold text-black '>Tiếp cận nguồn khách hàng toàn cầu</h1>
        <div className={`flex flex-col lg:flex-row justify-between  `}>
          <div className={`flex flex-1 flex-col pr-10 `}>
            <h1 className='text-6xl font-bold text-black'>2/3</h1>
            <p className='text-left text-lg text-black '>khách lưu trú ở nhà nghỉ dưỡng quay  lại đặt trên trang của chúng tôi</p>
          </div>

          <div className={`flex flex-1 flex-col px-10 `}>
            <h1 className='text-6xl font-bold text-black'>48%</h1>
            <p className='text-left text-lg text-black'>số đêm được đặt trên InnSight trong năm 2022 là cho kỳ nghỉ ở nước ngoài</p>
          </div>

          <div className={`flex flex-1 flex-col pl-10 `}>
            <h1 className='text-6xl font-bold text-black'>33%</h1>
            <p className='text-left text-lg text-black'>khách lưu trú ở nhà nghỉ dưỡng là thành viên cấp 2 hoặc 3 của chương trình khách hàng thân thiết Genius, đây là nhóm khách thường chi tiêu nhiều hơn cho mỗi lần đặt</p>
          </div>
        </div>

      </div>
      <div className={`justify-between hidden xl:flex bg-white border-none h-5/6 sm:w-full sm:p-3.5 md:p-8 lg:px-48 lg:py-20 `}>
        <div className={`basis-10/12 `}>
          <h1 className='text-4xl font-bold pb-3 text-black'>Dịch vụ toàn diện</h1>
          <div className={`py-3 flex `}>
            <IcCheck />
            <p className='text-xl font-medium pl-5 text-black'>Toàn quyền kiểm soát chỗ lưu trú của bạn-Giá cả, chính sách và hạn chế</p>
          </div>

          <div className={`py-3 flex`}>
            <IcCheck />
            <p className='text-xl font-medium pl-5 text-black'>Hỗ trợ giải quyết các vấn đề về chỗ ở của bạn 24/7</p>
          </div>

          <div className={`py-3 flex `}>
            <IcCheck />
            <p className='text-xl font-medium pl-5 text-black'>Tìm khách hàng lý tưởng-khách cần tuân theo các quy tắc và hạn chế do bạn đặt ra</p>
          </div>

          <div className={`py-3 flex `}>
            <IcCheck />
            <p className='text-xl font-medium pl-5 text-black'>Truy cập các đánh giá của khách cho những đặt phòng trước đây</p>
          </div>

          <div className={`py-3 flex`}>
            <IcCheck />
            <p className='text-xl font-medium pl-5 text-black'>Xu hướng thị trường chính xác để giúp bạn quản lý chỗ lưu trú của mình hiệu quả hơn</p>
          </div>
          
        </div>
        <div>
            <Image src={imgBanner} alt="" />

          </div>
      </div>
      <div className={`hidden xl:flex flex-col bg-gray-100 sm:w-full sm:p-3.5 md:p-8 lg:px-48`}>
                 <h1 className='text-4xl font-bold pb-3 text-black '>Đối tác nói gì về chúng tôi</h1>
                 <div className='flex justify-between space-x-48'>
                    {feedback.map((feedbackItem, index) => (
                                <div key={index}
                                    className={`rounded-lg shadow-md  }`}>
                                    <div className='flex items-center pb-5'>
                                        {/* <IcFaceSmile/> */}
                                        <h3 className='text-3xl font-bold pl-5 text-black'>{feedbackItem.score} / 10</h3>
                                    </div>
                                    <p className="text-black">{feedbackItem.content}</p>
                                </div>
                            ))}

                 </div>
                

            </div>
    </div>
  );
};
export default RegisterHomeContainer;
