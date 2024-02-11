const CardSkel = () => {
    return (
        <>
            {Array.from({ length: 20 }).map((index) => <div key={index} className="w-64 h-[370px] bg-slate-400 overflow-hidden border-4 border-cyan-500 rounded-lg cursor-pointer hover:border-red-500 hover:scale-[1.02] ease-in-out">
            </div>)}
        </>
    )
}

export default CardSkel