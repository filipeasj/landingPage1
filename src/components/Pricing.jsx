import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
    return(
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide mb-5">Pricing</h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((option,index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="rounded-xl border border-neutral-700 p-10">
                            <p className="text-4xl bm-8 ">
                                {option.title}
                                {option.title === "Pro" && <span className="bg-linear-to-r from-orange-500 to-red-500 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
                            </p>
                            <p className="mt-8">
                                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                <span className="text-neutral-400">/Month</span>
                            </p>
                            <ul className="mt-5">
                                {option.features.map((feature, index) => (
                                    <li key={index} className="flex items-center mt-8">
                                        <CheckCircle2 className="mr-2"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="mt-20 p-5 border border-orange-900 rounded-lg transition duration-200 inline-flex justify-center items-center text-center w-full h-12 tracking-tight
                            text-xl hover:bg-orange-900">Subscribe</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing;