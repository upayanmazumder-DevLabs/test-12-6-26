export default function Vehicle({name, color, wheels}: {name: string, color: string, wheels: number}) { 
    return (
        <div className={`p-4 rounded-lg ${color}`}>
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <p className="text-gray-600 dark:text-gray-400">
                This vehicle has {wheels} wheels.
            </p>
        </div>
    );
}