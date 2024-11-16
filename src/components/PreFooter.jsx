import { AiOutlineLike } from "react-icons/ai"; 
import { FaShippingFast } from "react-icons/fa"; 
import { BiRefresh } from "react-icons/bi"; 
import React from 'react'
import { BsBoxSeam} from "react-icons/bs";
import { Truck, Package, RefreshCw, ThumbsUp } from 'lucide-react';


function PreFooter() {
    const deliveryFeatures = [
      {
        icon: Package,
        title: "Speedy delivery",
        description: "Orders from all items",
      },
      {
        icon: RefreshCw,
        title: "Speedy delivery",
        description: "Orders from all items",
      },
      {
        icon: Truck,
        title: "Speedy delivery",
        description: "Orders from all items",
      },
      {
        icon: ThumbsUp,
        title: "Speedy delivery",
        description: "Orders from all items",
      },
    ];
  
    return (
      <section className="w-full mb-8">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-4 transition-transform duration-300 hover:transform hover:scale-105"
              >
                <feature.icon className="w-12 h-12 mb-4 text-gray-800" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default PreFooter
