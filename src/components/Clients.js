import React from 'react'
import Heading from './Heading'
import './styles/Clients.css'

function Clients({ bgColor }) {
    const clients = [
        "BMW", "Beanly", "Codeupkid", "DiscoverCareer", "Divine_Nature", "IItiansCaliber", "GoldenCrust", "Greenr",
        "Khabootar", "Phoenix", "miniso", "HaleandHearty", "Mahamala", "TheGoodPhat", "TheHouseofCeleste",
        "Potbelly", "Qubbe", "Scoopski", "timely_ai", "Coffeezza", "ArunElectronics", "Roseate", "Dhamsons", "Hestia"
    ]

    return (
        <div className="clients pt-3 pb-3" style={{ backgroundColor: bgColor }}>
            <div className="max_width client col d-flex justify-content-center">
                <div className="clients_mobile">
                    <Heading LWidth="43px" fontSize="22px" heading={<>Our Clients</>}></Heading>
                </div>
                {
                    clients.map(client =>
                        <img
                            key={client}
                            src={`/assets/clients/${client}.png`}
                            alt={`${client}`}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default Clients
