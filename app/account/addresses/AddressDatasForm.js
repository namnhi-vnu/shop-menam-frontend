"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { setNewFormAddress } from "@/app/store/actions/authAction";
import { setFormOrderByUser } from "@/app/store/actions/cartAction";

const AddressDatasForm = ({ dispatch, ward, city, district }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWards, setSelectedWards] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json",
                );
                const data = await response.json();
                setProvinces(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleProvinceChange = (selectedOption) => {
        dispatch(setNewFormAddress({ city: selectedOption.label }));
        dispatch(
            setFormOrderByUser({
                orderDetails: { city: selectedOption.label },
            }),
        );
        setSelectedProvince(selectedOption);
        setSelectedDistrict(null);
        setSelectedWards(null);
        setWards([]);

        if (selectedOption) {
            const provinceData = provinces.find(
                (province) => province.Name === selectedOption.label,
            );
            if (provinceData) {
                setDistricts(
                    provinceData.Districts.map((district) => ({
                        label: district.Name,
                        value: district.Id,
                    })),
                );
            }
        } else {
            setDistricts([]);
        }
    };

    const handleDistrictChange = (selectedOption) => {
        dispatch(setNewFormAddress({ district: selectedOption.label }));
        dispatch(
            setFormOrderByUser({
                orderDetails: { district: selectedOption.label },
            }),
        );
        setSelectedDistrict(selectedOption);
        setSelectedWards(null);
        setWards([]);

        if (selectedOption) {
            const provinceData = provinces.find(
                (province) => province.Name === selectedProvince.label,
            );
            if (provinceData) {
                const districtData = provinceData.Districts.find(
                    (district) => district.Id === selectedOption.value,
                );
                if (districtData) {
                    setWards(
                        districtData.Wards.map((ward) => ({
                            label: ward.Name,
                            value: ward.Id,
                        })),
                    );
                }
            }
        } else {
            setWards([]);
        }
    };

    const handleWardsChange = (selectedOption) => {
        dispatch(setNewFormAddress({ ward: selectedOption.label }));
        dispatch(
            setFormOrderByUser({
                orderDetails: { ward: selectedOption.label },
            }),
        );
        setSelectedWards(selectedOption);
    };

    return (
        <div>
            <div className="py-2">
                <Select
                    options={provinces.map((province) => ({
                        label: province.Name,
                        value: province.Id,
                    }))}
                    value={selectedProvince}
                    name="city"
                    onChange={handleProvinceChange}
                    placeholder="Tỉnh/Thành phố"
                    className="w-full focus:border-gray-200"
                />
            </div>
            {selectedProvince && (
                <>
                    <div className="py-2">
                        <Select
                            options={districts}
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            placeholder="Quận/Huyện"
                            className="w-full"
                        />
                    </div>
                    <div className="py-2">
                        <Select
                            options={wards}
                            value={selectedWards}
                            onChange={handleWardsChange}
                            placeholder="Phường/Xã"
                            className="w-full"
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default AddressDatasForm;
