type CounterProps = {
    initialCount: number;
};

type WeatherProps = {
    weather: string;
};

type WeatherContextType = {
    weather: string;
    changeWeather: () => void;
};

type ContinentProps = {
    continent: string;
};
