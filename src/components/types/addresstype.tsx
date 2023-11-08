interface ProvinceType {
    province_id: number,
    province_name: string,
    province_type : string,
}

interface DistrictType {
    district_id: number,
    district_name: string,
    district_type: string,
    province_id: number
}
interface WardType {
    district_id: number
    ward_id: number,
    ward_name: string,
    ward_type: string,
}