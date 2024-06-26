import airblade from "../../assets/images/xe/airblade.png"
import blade from "../../assets/images/xe/blade.png"
import future from "../../assets/images/xe/future.png"
import lead from "../../assets/images/xe/lead.png"
import sh from "../../assets/images/xe/sh.png"
import sh350i from "../../assets/images/xe/sh350i.png"
import vario from "../../assets/images/xe/vario.png"
import grande from "../../assets/images/xe/grande.png"
import honda from "../../assets/images/icons/honda.png"
import yamaha from "../../assets/images/icons/yamaha.png"
import Button from '@mui/material/Button';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import itemlogo from "../../assets/images/icons/itemlogo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';// Import icon vòng tròn

import "../NewProduct/Newproduct.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
const Newproduct = () => {
  return (
    <div>
        <section className="latest top">
            <div className="scontainer text-center w-4/5 m-auto md:p-12">
                <div className="heading text-left relative md:mb-10 mt-10 my-5 bg-red-100 rounded-md flex flex-row justify-between">
                    <h1 className="md:text-4xl font-normal text-2xl w-fit bg-button text-white p-1 rounded-md">BÁN CHẠY</h1>
                    {/* <div className="lines relative w-full flex1">
                        <div className="line border border-solid border-gray-300 h-3 absolute left-0 top-12 z-10"> <FontAwesomeIcon className="absolute right-0 top-0 text-white" icon={faCircle}/> </div>
                        <button>50% OFF</button>
                        <div className="line line2 absolute right-0 left-59%"> <FontAwesomeIcon className="absolute left-full" icon={faCircle}/> </div>
                    </div> */}
                    <div className="flex flex-row text-gray-700 text">
                        <a href="" className="my-auto text-xs md:text-lg">Xem tất cả</a>
                        <FontAwesomeIcon className=" my-auto text-xs px-2 " icon={faArrowRightLong} />
                    </div>
                </div>

                <div className="content md:grid md:grid-cols-4 gap-7 top flex flex-col">
                    <div className="box p-3 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={airblade} alt="" />
                            <div className="flex1 flex justify-between items-center text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                {/* <FontAwesomeIcon icon={faHeart} className="text-xl"/> */}
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        {/* <div className="detalis ">
                            <h3 className="font-semibold text-xl">Air Blade</h3>
                            <p>(Bản tiêu chuẩn)</p>
                            <h2 className="font-normal text-lg text-green-600 mx-0 my-5"> <span>Khoảng $2000</span> </h2>
                            <button className="text-sm">Xem Chi Tiết</button>
                        </div> */}
                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Air Blade</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">$2000</p>
                                </div>
                  
                                    <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                    </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={blade} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                <img className="text-xl" src={honda} alt="" />                            
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Blade</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">$2000</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={future} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Future</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">$2000</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={lead} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Lead</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">$2000</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={sh} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">SH</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">$2000</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={sh350i} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">SH 350i</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">$2000</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={vario} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                <img className="text-xl" src={honda} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Vario</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">$2000</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-red-400 cursor-pointer bg-stone-50">
                        <div className="img relative flex justify-center">
                            <img src={grande} alt="" />
                            <div className="flex1 flex justify-between text-green-600 absolute top-0 w-full">
                                {/* <label className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-green-600 text-center">50%</label> */}
                                {/* <FontAwesomeIcon icon={faHeart} className="text-xl"/> */}
                                <img className="text-xl" src={yamaha} alt="" />
                            </div>
                        </div>

                        <div className="detalis ">
                            <div className="flex">
                                <h3 className="font-semibold text-xl">Grande</h3>
                            </div>

                            <div className="flex justify-between text-gray-500 mt-3">
                                <div className="left flex flex-col gap-1 text-left text-xs">
                                    <p>Phanh: ABS</p>
                                    <p>D/t bình xăng: 4,4 lít</p>
                                    <p>Hộp số: Vô cấp</p>
                                </div>

                                <div className="right flex flex-col gap-1 text-right text-xs">
                                    <p>M/độ tiêu thụ: 2,3/100km</p>
                                    <p>Khối lượng: 113kg</p>
                                    <p>Độ cao yên: 775 mm</p>
                                </div>
                            </div>

                            <div className="flex justify-between mt-7">
                                <div className="text-left ">
                                    <p className="text-sm text-gray-500 flex ">Giá Khoảng</p>
                                    <p className="flex justify-center text-lg font-semibold">$2000</p>
                                </div>
                                <div className="text-right my-auto ">
                                        <Button variant="contained" color="error">
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

    </div>
  )
}

export default Newproduct
