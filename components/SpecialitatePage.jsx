export default function SpecialitatePage({ data }) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

            {/* TEXT */}
            <div className="flex-1 space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold">
                    {data.title}
                </h1>

                <p className="text-sm md:text-base">
                    <strong>Calificarea:</strong> {data.calificare}
                </p>

                <p className="text-sm md:text-base">
                    <strong>Durata studiilor:</strong> {data.durata}
                </p>

                <p className="text-slate-600 text-sm md:text-base">
                    {data.descriere}
                </p>

                <p className="text-slate-600 text-sm md:text-base">
                    {data.misiune}
                </p>

                <p className="text-slate-600 text-sm md:text-base">
                    {data.calificareDescriere}
                </p>

                {/* Oportunități */}
                <div>
                    <h2 className="font-bold mt-4 text-base md:text-lg">
                        Oportunități:
                    </h2>

                    <ul className="list-disc ml-5 text-sm md:text-base">
                        {data.oportunitati.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Competențe */}
                {data.competente && (
                    <div>
                        <h2 className="font-bold mt-4 text-base md:text-lg">
                            Competențe:
                        </h2>
                        <ul className="list-disc ml-5 text-sm md:text-base">
                            {data.competente.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Domenii de activitate */}
                {data.cariera && (
                    <div>
                        <h2 className="font-bold mt-4 text-base md:text-lg">
                            Domenii de activitate:
                        </h2>
                        <ul className="list-disc ml-5 text-sm md:text-base">
                            {data.cariera.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* IMAGINE */}
            <div className="w-full md:w-64 flex justify-center">
                <img
                    src={data.img}
                    className="w-full max-w-xs md:max-w-none h-48 md:h-64 object-cover rounded-xl shadow-lg"
                />
            </div>

        </div>
    )
}