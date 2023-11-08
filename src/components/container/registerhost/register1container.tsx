import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  apiGetDistricts,
  apiGetProvinces,
  apiGetWards,
} from "@/api/apiAddress";
import SelectComponent from "@/components/select-address/select-address";
const Register1Container: React.FC = ({
}) => {
  const [provinces, setProvinces] = useState<ProvinceType[]>([]);
  const [districts, setDistricts] = useState<DistrictType[]>([]);
  const [wards, setWards] = useState<WardType[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<ProvinceType>();
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictType>();
  const [selectedWard, setSelectedWard] = useState<WardType>();

  useEffect(() => {
    const fetchProvinces = async () => {
      const response: any = await apiGetProvinces();
      if (response.status === 200) {
        setProvinces(response.data.results);
      }
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    setDistricts([]);
    const fetchDistricts = async () => {
      const response: any = await apiGetDistricts(selectedProvince?.province_id);
      console.log(response)
      if (response.status === 200) {
        setDistricts(response.data.results);
      }
    };

    if (selectedProvince) {
      fetchDistricts();
    }
  }, [selectedProvince]);

  useEffect(() => {
    setWards([]);
    const fetchWards = async () => {
      const response: any = await apiGetWards(selectedDistrict?.district_id);
      if (response.status === 200) {
        setWards(response.data.results);
      }
    };

    if (selectedDistrict) {
      fetchWards();
    }
  }, [selectedDistrict]);

  return (
    <div className={'min-h-full bg-white'}>
      <div className="sm:w-full sm:p-3.5 md:p-8 lg:px-48">
        <div className={''}>
          <div className="title">
            <h2 className="text-3xl overflow-hidden text-black">
              Đăng chỗ nghỉ của Quý vị trên InnSight và bắt đầu đón tiếp khách
              thật nhanh chóng!
            </h2>
            <p className="text-xl py-4 text-black">
              Chỗ nghỉ Quý vị muốn đăng ký nằm ở đâu?
            </p>
          </div>
          <div>
            <div className={`px-5 shadow-md pb-5 `}>
              <h3 className="py-3 text-lg text-black">Địa chỉ cụ thể</h3>
              <div className="flex justify-between">
                <div className={` flex flex-col    `}>
                  <h3 className="py-2 text-black">Tỉnh/TP</h3>
                  {/* <SelectComponent
                    type="province"
                    value={selectedProvince}
                    setValue={() => { setSelectedProvince(selectedProvince); console.log("up:", { selectedProvince }) }}
                    options={provinces}
                  /> */}
                </div>

                <div className={` flex flex-col   `}>
                  <h3 className="py-2 text-black">Quận/Huyện</h3>

                  {/* <SelectComponent
                    type="district"
                    value={selectedDistrict?.district_id}
                    setValue={() => { setSelectedDistrict(selectedDistrict) }}
                    options={districts}
                  /> */}
                </div>
              </div>

              <div className={` flex flex-col  `}>
                <h3 className="py-2 ">Phường/Xã</h3>

                {/* <SelectComponent
                  type="ward"
                  value={selectedWard}
                  setValue={setSelectedWard}
                  options={wards}
                /> */}
                {/* {<Select styles={{}} options={cityOptions} />} */}
              </div>

              <div className={` flex flex-col   `}>
                <h3 className="py-3 ">Số nhà/Đường</h3>
                <input
                  type="text"
                  placeholder="Nhập số nhà, đường"
                  className="px-3 py-2 border-2"
                ></input>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Register1Container;