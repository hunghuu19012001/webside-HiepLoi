import honda from "../../assets/images/icons/honda.png"
// import yamaha from "../../assets/images/icons/yamaha.png"
import airblade from "../../assets/images/xe/air blade.png"
import blade from "../../assets/images/xe/blade.png"
import future from "../../assets/images/xe/future.png"
import lead from "../../assets/images/xe/lead.png"
import Button from '@mui/material/Button';

const xekazuki = () => {
  return (
    <div>
      <section className="latest top">
            <div className="scontainer text-center w-4/5 m-auto md:p-12">
                <div className="heading text-center relative mb-28">
                    <h1 className="md:text-5xl font-normal text-3xl">SẢN PHẨM MỚI</h1>
                    {/* <div className="lines relative w-full flex1">
                        <div className="line border border-solid border-gray-300 h-3 absolute left-0 top-12 z-10"> <FontAwesomeIcon className="absolute right-0 top-0 text-white" icon={faCircle}/> </div>
                        <button>50% OFF</button>
                        <div className="line line2 absolute right-0 left-59%"> <FontAwesomeIcon className="absolute left-full" icon={faCircle}/> </div>
                    </div> */}
                </div>

                <div className="content md:grid md:grid-cols-4 gap-7 top flex flex-col">
                    <div className="box p-3 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
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
                                        <Button variant="contained" style={{ backgroundColor: '#37B234', color: 'white' }}>
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
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
                                        <Button variant="contained" style={{ backgroundColor: '#37B234', color: 'white' }}>
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
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
                                        <Button variant="contained" style={{ backgroundColor: '#37B234', color: 'white' }}>
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer bg-stone-50">
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
                                        <Button variant="contained" style={{ backgroundColor: '#37B234', color: 'white' }}>
                                            Xem chi tiết
                                        </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    
                    
                    

                </div>
                                
                <div className="flex mt-3 mb-10">
                    <Button variant="contained" style={{ backgroundColor: '#37B234', color: 'white' }}>
                        XEM TẤT CẢ
                    </Button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default xekazuki