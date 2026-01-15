const CharacterCard = ({ character }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg relative">
            <div className="w-full h-64 flex items-center justify-center">
                <img
                    src={character.image}
                    alt={character.name}
                    className="max-h-full max-w-full object-contain hover:scale-115 transition duration-300"
                />
            </div>

            <div className="p-4 bg-slate-700">
                <h3 className="text-lg font-bold text-yellow-400">
                    {character.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                    Race: {character.race || 'Unknown'}
                </p>
                <p className="text-sm text-gray-300">
                    KI: {character.ki || '?'}
                </p>
            </div>
        </div>
    )
}

export default CharacterCard