const BackgroundSpices = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Chili peppers */}
            <div className="absolute top-[10%] text-6xl opacity-20 animate-drift-left [animation-delay:0s]">
                🌶️
            </div>
            <div className="absolute top-[60%] text-4xl opacity-15 animate-drift-right [animation-delay:5s]">
                🌶️
            </div>
            <div className="absolute top-[30%] text-5xl opacity-10 animate-drift-diagonal [animation-delay:8s]">
                🌶️
            </div>

            {/* Tomatoes */}
            <div className="absolute top-[20%] text-5xl opacity-20 animate-drift-right [animation-delay:2s]">
                🍅
            </div>
            <div className="absolute top-[70%] text-6xl opacity-15 animate-drift-left [animation-delay:10s]">
                🍅
            </div>
            <div className="absolute top-[45%] text-4xl opacity-10 animate-drift-diagonal [animation-delay:15s]">
                🍅
            </div>

            {/* Onions */}
            <div className="absolute top-[35%] text-5xl opacity-20 animate-drift-left [animation-delay:4s]">
                🧅
            </div>
            <div className="absolute top-[80%] text-4xl opacity-15 animate-drift-right [animation-delay:12s]">
                🧅
            </div>
            <div className="absolute top-[15%] text-6xl opacity-10 animate-drift-diagonal [animation-delay:18s]">
                🧅
            </div>

            {/* Chicken */}
            <div className="absolute top-[50%] text-5xl opacity-20 animate-drift-right [animation-delay:6s]">
                🍗
            </div>
            <div className="absolute top-[25%] text-4xl opacity-15 animate-drift-left [animation-delay:14s]">
                🍗
            </div>
            <div className="absolute top-[75%] text-5xl opacity-10 animate-drift-diagonal [animation-delay:20s]">
                🍗
            </div>

            {/* Garlic */}
            <div className="absolute top-[40%] text-4xl opacity-20 animate-drift-diagonal [animation-delay:3s]">
                🧄
            </div>
            <div className="absolute top-[65%] text-5xl opacity-15 animate-drift-left [animation-delay:9s]">
                🧄
            </div>
            <div className="absolute top-[85%] text-4xl opacity-10 animate-drift-right [animation-delay:16s]">
                🧄
            </div>

            {/* Curry leaves */}
            <div className="absolute top-[55%] text-4xl opacity-20 animate-drift-left [animation-delay:7s]">
                🍃
            </div>
            <div className="absolute top-[10%] text-5xl opacity-15 animate-drift-diagonal [animation-delay:11s]">
                🍃
            </div>
            <div className="absolute top-[90%] text-4xl opacity-10 animate-drift-right [animation-delay:22s]">
                🍃
            </div>

            {/* Bay leaves */}
            <div className="absolute top-[30%] text-3xl opacity-15 animate-drift-right [animation-delay:13s]">
                🍃
            </div>
            <div className="absolute top-[70%] text-4xl opacity-10 animate-drift-left [animation-delay:17s]">
                🍃
            </div>

            {/* Coriander */}
            <div className="absolute top-[45%] text-3xl opacity-15 animate-drift-diagonal [animation-delay:19s]">
                🌿
            </div>
            <div className="absolute top-[20%] text-4xl opacity-10 animate-drift-right [animation-delay:21s]">
                🌿
            </div>
        </div>
    );
};

export default BackgroundSpices;
