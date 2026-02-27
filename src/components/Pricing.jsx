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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing;