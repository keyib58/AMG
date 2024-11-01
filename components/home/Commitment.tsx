const Commitment = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-8 mt-20">
            {/* Title */}
            <h2 className="text-5xl title-font font-bold uppercase text-[#d8b866]">
                You Have Our Commitment
            </h2>

            {/* Descriptions */}
            <p className="mt-4 text-lg content-font text-white max-w-[800px]">
                Built on the principles of &apos;fairness, security, and prevention,&apos; we go the extra mile to keep users safe by staying compliant with the highest regulatory standards.
            </p>
            <p className="mt-4 text-lg content-font text-white max-w-[800px]">
                We take pride in maintaining a trustworthy environment by working closely with regulatory bodies and maintaining industry certifications to ensure our games are fair and secure.
            </p>

            {/* 3-Column Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-[1200px] w-full">

                {/* GLS Column */}
                <div className="p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-[#d8b866] mb-4 title-font">GLS</h3>
                    <p className="text-lg text-white">
                        The Gaming Supplier License as a part of the regulatory framework set by the Alcohol and Gaming Commission of Ontario (AGCO). AMG will be obtaining the GLS license to foster the Ontario and the greater Canadian market.
                    </p>
                    <p className="text-lg text-white mt-4">
                        *(AMG will be adding more as we proceed with various North America license applications)*
                    </p>
                </div>

                {/* GLI Column */}
                <div className="p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-[#d8b866] mb-4 title-font">GLI</h3>
                    <p className="text-lg text-white">
                        Gaming labs certified refers to a process where independent testing laboratories evaluate and certify gaming software and equipment for fairness, security, and compliance with industry standards. This certification ensures that games operate fairly and randomly, giving players a level playing field.
                    </p>
                </div>

                {/* BMM Column */}
                <div className="p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-[#d8b866] mb-4 title-font">BMM</h3>
                    <p className="text-lg text-white">
                        A leading independent testing laboratory that specializes in the gaming industry. They provide testing, certification, and consulting services for gaming software and equipment. BMM ensures that games and systems comply with regulatory standards, operate fairly, and meet the necessary technical requirements.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Commitment;
