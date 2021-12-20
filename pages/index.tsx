import { ChangeEvent, useEffect, useState, useCallback } from "react";

export default function Index() {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [value, setValue] = useState<string>("");

  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return (
    <div className="container max-w-md min-h-screen mx-auto bg-gray-200">
      <div className="flex flex-col px-4 py-10 mx-auto gap-y-3">
        <h1 className="text-lg font-bold">現在の座標</h1>
        <h1>経度{latitude}</h1>
        <h1>緯度{longitude}</h1>
        <form className="flex flex-col">
          <input
            type="text"
            title="目的地"
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
            placeholder="目的地を入力してください"
            className="px-4 py-2 border border-gray-400 rounded-lg"
          />
          <a
            href={`https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${value}&travelmode=driving`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Google Mapで開く
          </a>
        </form>
      </div>
    </div>
  );
}
