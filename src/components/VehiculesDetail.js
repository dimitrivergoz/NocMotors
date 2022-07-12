import React, {useState, useHistory} from 'react'
import { useParams } from 'react-router-dom';
import Data from './Data';
const VehiculesDetail = () => {
    const {id} = useParams()
    const [vehicules, setVehicules] = useState()
    
    return(
        <div>
            <div className="mt-20 mb-5" id="vehicules">
          <div className="flex flex-row justify-between text-gray-100 rounded">
            <h2 className=" text-xl md:text-3xl mb-3 ml-5">{Data[id].name}</h2>
          </div>
          <div className="gap-5 text-gray-100 mx-auto md:w-[800px]">
                <div className="shadow-lg rounded-lg border-2 mx-2" key={Data[id].id}>
                  {Data[id].type === "sell" && (
                    <p className="absolute bg-green-600 text-black p-2 text-m rounded-br-lg">
                      A vendre
                    </p>
                  )}
                  {Data[id].type === "rent" && (
                    <p className="absolute bg-orange-400 text-black p-2 text-m rounded-br-lg">
                      A louer
                    </p>
                  )}
                  <img
                    src={Data[id].src}
                    className="rounded-tl-lg rounded-tr-lg"
                    alt={Data[id].name}
                  />
                  <div className="p-4 hover:from-black hove:to-blue-100 flex justify-between">
                    <h3>{Data[id].name}</h3>
                    <h4>{Data[id].annee} </h4>
                  </div>
                </div>
          </div>
        </div>
        </div>
    )
}

export default VehiculesDetail;