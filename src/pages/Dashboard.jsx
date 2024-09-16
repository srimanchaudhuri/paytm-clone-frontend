import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

export default function Dashboard() {
    const [balance, setBalance] = useState('0');
    const navigate = useNavigate(); // Use navigate instead of history

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            navigate("/signin", { replace: true }); // Redirect to login if no token
        }

        // Fetch balance data
        axios.get("http://localhost:3000/api/v1/account/balance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            setBalance(res.data.balance);
        });

        // Prevent going back to previous pages (like login/signup)
        const handleBackButton = (event) => {
            event.preventDefault();
            navigate("/dashboard", { replace: true }); // Keep user on dashboard
        };

        window.history.pushState(null, null, window.location.href);
        window.addEventListener("popstate", handleBackButton);

        return () => {
            window.removeEventListener("popstate", handleBackButton);
        };
    }, [navigate]);

    return (
        <div>
            <Appbar />
            <Balance balance={balance} />
            <Users />
        </div>
    );
}
