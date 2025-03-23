
export const BtnChangeColors = ({change}) => {
  return (
    <button className="w-[12rem] h-[4rem] px-6 py-3 bg-black/10 font-bold rounded-lg shadow-md hover:bg-white/10 transition-all duration-300 absolute  font-bold drop-shadow-lg text-[1rem] text-white" onClick={change}>Cambia el Color</button>
  )
}
