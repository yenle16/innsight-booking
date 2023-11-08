import React from "react";


interface SelectOptions {
  province_id?: number;
  district_id?: number;
  ward_id?: number;
  province_name?: string;
  district_name?: string;
  ward_name?: string;
}

interface SelectComponentProps {
  options: SelectOptions[];
  value: any;
  setValue: (value:  number|undefined|string) => void;
  type: "province" | "district" | "ward";
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  options,
  value,
  setValue,
  type,
}) => {
  return (
    <select
      value={value}
      onChange={(e) => {
        console.log(e.target.value)
        setValue(e.target.value)}}
      className={`border-2 px-3 py-2 text-black `}
    >
      {options?.map((option) => {
        return (
          <option
            key={
              type === "province"
                ? option.province_id
                : type === "district"
                ? option.district_id
                : option.ward_id
            }
            value={
              type === "province"
                ? option.province_id
                : type === "district"
                ? option.district_id
                : option.ward_id
            }
          >
            {type === "province"
              ? option.province_name
              : type === "district"
              ? option.district_name
              : option.ward_name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectComponent;