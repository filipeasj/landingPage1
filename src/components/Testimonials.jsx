import { testimonials } from "../constants"

const Testimonials = () => {
    return (
        <div className="mt-20 tracking-wide">
             <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"> What people are saying</h2>
             <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonials, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 pt-2">
                        <div className="bg-neutral border border-neutral-800 font-thin p-6 rounded-md hover:bg-neutral-800 transition duration-200 h-full">
                            <p>{testimonials.text}</p>
                            <div className="flex mt-8 items-start">
                                <img src={testimonials.image} alt={testimonials.user} className="rounded-full w-12 h-12 border border-neutral-300 mr-6"/>
                            <div>
                                <h6>{testimonials.user}</h6>
                                <span className="text-sm font-normal italic text-neutral-600">{testimonials.company}</span>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    )
}

export default Testimonials;