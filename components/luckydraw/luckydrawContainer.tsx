import LuckyDrawForm from "./luckydrawForm";

const LuckydrawContainer = () => {
    return (
        <div className="mt-[50px] max-w-[1320px] mx-auto flex flex-col lg:mt-[100px] lg:flex-row justify-between px-6 lg:px-4">
            {/* Left column - 3/10 width */}
            <div style={{ flex: '3' }}>
                <img
                    src="https://res.cloudinary.com/detatjujs/image/upload/v1724655638/SBC_Summit-Lisbon-2024_Floorplan-CTA_9x16_PNG_ezlq19.png"
                    alt="Banner"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>

            {/* Right column - 7/10 width */}
            <div style={{ flex: '7' }}>
                {/* // add a two column layout div */}
                <div className="lg:flex lg:justify-between gap-4 px-4">
                    <div className="text-white OpenSans text-xl">
                        <p>Stand a chance to win an Apple Watch Series 9! Simply fill in the following form with your details and information.</p>
                        <p className="mt-2">The winner will be contacted via WhatsApp & email by 23rd September, Monday, 11:59PM (GMT). The winner must be present at the SBC Summit 2024 to collect the prize at our booth*!</p>
                        <p className="mt-2">*The winner must be physically present to claim the prize. Should the winner be unable to do so, he/she must authorize a designated representative to claim on his/her behalf via written communication. </p>
                    </div>

                    <div className="text-white OpenSans">
                        <p>Tenha a chance de ganhar um Apple Watch Series 9! Basta preencher o seguinte formulário com seus dados e informações.</p>
                        <p className="mt-2">O vencedor será contactado via WhatsApp e email até dia 23 de setembro, segunda-feira, às 23h59 (GMT). O vencedor deve estar presente na SBC Summit 2024 para levantar o prémio no nosso stand*!
                        </p>
                        <p className="mt-2">*O ganhador deverá estar presente fisicamente para retirar o prêmio. Caso algum vencedor não consiga estar presente, deverá autorizar um representante designado para reivindicar em seu nome por meio de comunicação por escrito.
                        </p>
                    </div>
                </div>

                <div className="mt-4">
                    <LuckyDrawForm />
                </div>

                <div>
                    <div className="text-white OpenSans px-4 text-sm">
                        <p>
                           KingMidas Games is committed to protecting and respecting your privacy, and will only use your personal information to administer your account and to provide the products and services you requested from us. Please tick the checkbox below if you consent to receive communications from us regarding our products and services, as well as other content that may be of interest to you.
                        </p>
                        <p className="mt-2">
                            A KingMidas Games está comprometida em proteger e respeitar sua privacidade e só usará suas informações pessoais para administrar sua conta e fornecer os produtos e serviços que você nos solicitou. Marque a caixa de seleção abaixo se você concorda em receber nossas comunicações sobre nossos produtos e serviços, bem como outros conteúdos que possam ser do seu interesse.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LuckydrawContainer;
