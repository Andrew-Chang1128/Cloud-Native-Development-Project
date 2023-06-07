import React from "react";
import LocationChooseMap from './map/LocationChooseMap';
import markImage from '../image/mark.png'
import { useNavigate, useLocation } from 'react-router-dom';
import checkImage from '../image/check.png'
function Locationchoose() {
    const ref = React.useRef();

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);

    function click() {
        var cnt = ref.current.map.getCenter();
        console.log('CC Center at ', cnt.lat, cnt.lng);
        const lat = cnt.lat;
        const lng = cnt.lng;
        if (location.state.from === "order") {
            const depart = location.state.status.depart.depart;
            const destination = location.state.status.destination.destination;
            const isChecked = location.state.status.isChecked.isChecked;
            const selectedValue = location.state.status.selectedValue.selectedValue;
            const orderId = location.state.status.orderId.orderId;
            const date = location.state.status.date.date;
            const lat1 = location.state.status.depart.lat1;
            const lng1 = location.state.status.depart.lng1;
            const lat2 = location.state.status.destination.lat2;
            const lng2 = location.state.status.destination.lng2;
            if (location.state.type === 1) {
                navigate('/order', {
                    state: {
                        from: "Locationchoose",
                        type: 1,
                        status: {
                            depart: { lat, lng },
                            destination: { destination, lat2, lng2 },
                            isChecked: { isChecked },
                            selectedValue: { selectedValue },
                            orderId: { orderId },
                            date: { date }
                        }
                    }
                });
            } else if (location.state.type === 2) {
                navigate('/order', {
                    state: {
                        from: "Locationchoose",
                        type: 2,
                        status: {
                            depart: { depart, lat1, lng1 },
                            destination: { lat, lng },
                            isChecked: { isChecked },
                            selectedValue: { selectedValue },
                            orderId: { orderId },
                            date: { date }
                        }
                    }
                });
            }
        }
    }
    return (
        <div style={{ position: 'relative' }}>
            <LocationChooseMap ref={ref} />
            <div>
                <img src={markImage} height="60" style={{ height: '80', position: 'absolute', top: '45%', left: '45%' }} />
            </div>
            <div className="menu-gesture">
                <button onClick={() => click()} style={{ background: 'none', border: 'none', padding: 0 }}>
                    <img className="ges-icon" src={checkImage} alt="Check" />
                </button>
            </div>
        </div>
    );
}

export default Locationchoose;