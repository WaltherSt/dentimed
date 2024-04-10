export default function Tooth() {
  return (
    <div>
      <div className="grid grid-cols-2 w-10 h-10 border-2 rounded-full border-black relative rotate-45">
        <div className="border-r border-black border-b"></div>
        <div className="border-b border-black border-l"></div>
        <div className="border-r border-black border-t "></div>
        <div className="border-t border-black border-l"></div>

        <div className="absolute w-5 h-5 bg-white rounded-full border-2 border-black top-[8px] left-[8px]"></div>
      </div>
      <div className="absolute h-10 w-10 top-0 left-2">
        <div className="h-5 w-5 border border-black rounded-full bg-white"></div>
      </div>
    </div>
  );
}
