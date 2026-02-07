import { IoWarningOutline, IoDocumentTextOutline, IoShieldCheckmarkOutline, IoTrendingDownOutline } from "react-icons/io5";

export const metadata = {
    title: "Required Disclosures & Risk Warnings",
    description: "Important risk disclosures and compliance information for Valora Asset Management.",
};

export default function RiskDisclosures() {
    return (
        <section className="bg-gray-50 min-h-screen">
            {/* Hero Header */}
            <div className="bg-[#082C49] text-white pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <IoDocumentTextOutline className="text-6xl text-gold-400 mx-auto mb-6 opacity-30" />
                    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                        Required Disclosures <br />
                        <span className="text-gold-400">& Risk Warnings</span>
                    </h1>
                    <p className="text-trust-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
                        Transparency and compliance are at the core of our operations. Please review the following important information regarding trading risks and regulatory compliance.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl -mt-12 pb-24 relative z-10">
                <div className="bg-white shadow-xl rounded-sm p-8 md:p-16 space-y-16">

                    {/* NFA Compliance Rules */}
                    <div className="space-y-4 border-b border-gray-100 pb-12">
                        <div className="flex items-start gap-4">
                            <IoShieldCheckmarkOutline className="text-3xl text-trust-blue-900 mt-1 flex-shrink-0" />
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-trust-blue-950 mb-3">
                                    NFA Compliance Rules
                                </h2>
                                <p className="text-trust-blue-800 leading-relaxed">
                                    All promotional materials comply with National Futures Association (NFA) Compliance Rules 2-29 and 2-36 governing communications with the public.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Limited Experience Disclosure */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-gold-600">
                            <IoWarningOutline className="text-2xl" />
                            <h2 className="font-serif text-2xl font-bold text-trust-blue-950">Limited Experience</h2>
                        </div>

                        <div className="relative overflow-hidden bg-yellow-50 rounded-sm border-l-4 border-gold-500 p-8 shadow-sm">
                            <p className="font-bold text-trust-blue-950 uppercase leading-loose text-sm md:text-[15px] tracking-wide text-justify">
                                VALORA ASSET MANAGEMENT HAS HAD LITTLE OR NO EXPERIENCE IN TRADING ACTUAL ACCOUNTS FOR CUSTOMERS. BECAUSE THERE ARE NO ACTUAL TRADING RESULTS TO COMPARE TO ANY HYPOTHETICAL RESULTS, CUSTOMERS SHOULD BE PARTICULARLY WARY OF PLACING UNDUE RELIANCE ON THESE HYPOTHETICAL PERFORMANCE RESULTS.
                            </p>
                        </div>
                    </div>

                    {/* Risk Disclosure Statement */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-red-600">
                            <IoTrendingDownOutline className="text-2xl" />
                            <h2 className="font-serif text-2xl font-bold text-trust-blue-950">Risk Disclosure Statement</h2>
                        </div>

                        <div className="relative overflow-hidden bg-red-50 rounded-sm border-l-4 border-red-500 p-8 shadow-sm">
                            <p className="font-bold text-red-950 uppercase leading-loose text-sm md:text-[15px] tracking-wide">
                                COMMODITY TRADING INVOLVES SUBSTANTIAL RISK OF LOSS.
                            </p>
                        </div>
                        <p className="text-trust-blue-800 leading-relaxed text-sm pl-4 border-l-2 border-gray-200">
                            The high degree of leverage that is often obtainable in commodity futures, options, and forex trading can work against you as well as for you. The use of leverage can lead to large losses as well as gains. In some cases, managed commodity accounts are subject to substantial charges for management and advisory fees. It may be necessary for those accounts that are subject to these charges to make substantial trading profits to avoid depletion or exhaustion of their assets.
                        </p>
                    </div>

                    {/* Past Performance Disclosure */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-2xl font-bold text-trust-blue-950 pl-4 border-l-4 border-trust-blue-900">
                            Past Performance Disclosure
                        </h2>

                        <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200">
                            <p className="font-bold text-trust-blue-950 uppercase leading-loose text-sm md:text-[15px] tracking-wide mb-4">
                                PAST RESULTS ARE NOT NECESSARILY INDICATIVE OF FUTURE RESULTS.
                            </p>
                            <p className="text-trust-blue-800 leading-relaxed text-sm">
                                Historical performance data should be considered in context with the market conditions that existed during that period. The results represented in any marketing materials are not indicative of future performance.
                            </p>
                        </div>
                    </div>

                    {/* Suitability Considerations - Enhanced */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-trust-blue-900 to-trust-blue-950 text-white rounded-sm p-8 md:p-12 shadow-md">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <IoShieldCheckmarkOutline className="text-[12rem] -mr-16 -mt-16" />
                        </div>

                        <div className="relative z-10">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                                <IoShieldCheckmarkOutline className="text-gold-400" />
                                Suitability Considerations
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-sm text-blue-100 leading-relaxed">
                                <div className="space-y-4">
                                    <p className="font-medium text-white text-lg mb-2">Evaluate Your Financial Condition</p>
                                    <p>
                                        You should carefully consider whether such trading is suitable for you in light of your financial condition. Trading commodity interests involves significant risk and is not suitable for all investors.
                                    </p>
                                    <div className="bg-white/10 p-4 rounded-sm border-l-2 border-gold-400">
                                        You may sustain a total loss of the premium and of any additional funds you deposit with your broker to establish or maintain your position.
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="font-medium text-white text-lg mb-2">Understand the Risks</p>
                                    <ul className="space-y-3 list-disc pl-4 marker:text-gold-400">
                                        <li>
                                            If you purchase or sell a commodity futures contract or sell a commodity option you may sustain a total loss of the initial margin funds or security deposit.
                                        </li>
                                        <li>
                                            You may lose any additional funds that you deposit with your broker to establish or maintain your position.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Before You Invest - Enhanced */}
                    <div className="bg-white rounded-sm p-8 md:p-12 shadow-lg border-t-4 border-gold-500 relative">
                        <div className="absolute top-0 right-4 transform -translate-y-1/2 bg-gold-400 text-trust-blue-950 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-sm">
                            Compliance Notice
                        </div>

                        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-sm border border-gray-100">
                                <IoDocumentTextOutline className="text-5xl text-trust-blue-500 mb-4" />
                                <h3 className="font-serif text-xl font-bold text-trust-blue-950 mb-2">Disclosure Document</h3>
                                <p className="text-xs text-gray-500">Available at no cost</p>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h2 className="font-serif text-2xl font-bold text-trust-blue-950 mb-4">
                                        Before You Invest
                                    </h2>
                                    <p className="text-trust-blue-800 leading-relaxed text-sm">
                                        The regulations of the Commodity Futures Trading Commission (CFTC) require that prospective clients of a CTA receive a
                                        disclosure document <span className="font-bold text-trust-blue-950">before they enter into an agreement</span> whereby the CTA will direct or guide the client&apos;s commodity
                                        interest trading.
                                    </p>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-sm text-sm text-trust-blue-900 border-l-2 border-trust-blue-400">
                                    <p className="mb-2 font-bold">Important Notice:</p>
                                    <p className="mb-3">
                                        Valora Asset Management will provide you a copy of our disclosure document at no cost. You should review our disclosure
                                        document and study it carefully to determine whether such trading is appropriate for you in light of your financial condition.
                                    </p>
                                    <p className="text-xs text-trust-blue-600 italic">
                                        The CFTC has not passed upon the merits of participating in our trading programs nor on the adequacy or accuracy of our
                                        disclosure document.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* COMPREHENSIVE RISK DISCLOSURE Section */}
                    <div className="pt-20 border-t border-gray-200">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-blue-950 mb-4 uppercase tracking-widest">
                                Comprehensive Risk Disclosure
                            </h2>
                            <div className="h-1 w-24 bg-gold-400 mx-auto rounded-full"></div>
                        </div>

                        {/* High Impact Warning Card */}
                        <div className="relative bg-gradient-to-br from-trust-blue-950 to-trust-blue-900 text-white p-8 md:p-12 shadow-2xl rounded-sm mb-12 overflow-hidden group">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10 transform rotate-12 transition-transform duration-700 group-hover:rotate-0">
                                <IoWarningOutline className="text-[10rem]" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                                    <IoWarningOutline className="text-4xl text-gold-400" />
                                </div>
                                <div>
                                    <h3 className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2">Critical Warning</h3>
                                    <p className="font-bold uppercase leading-relaxed text-sm md:text-lg tracking-wide text-white/95">
                                        THE RISK OF LOSS IN TRADING COMMODITY INTERESTS CAN BE SUBSTANTIAL. YOU SHOULD THEREFORE CAREFULLY CONSIDER WHETHER SUCH TRADING IS SUITABLE FOR YOU IN LIGHT OF YOUR FINANCIAL CONDITION.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Legal Text - Cards Layout */}
                        <div className="grid md:grid-cols-2 gap-6 text-left">

                            {/* Card 1: Leverage & Options */}
                            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-50 rounded-full text-blue-600">
                                        <IoTrendingDownOutline className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-trust-blue-950 text-base uppercase tracking-wider">Leverage & Options</h4>
                                </div>
                                <div className="space-y-4 text-sm text-trust-blue-700 leading-relaxed">
                                    <p className="font-medium text-trust-blue-900">
                                        PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE RESULTS. THE RISK OF LOSS IN TRADING COMMODITY FUTURES, OPTIONS, AND FOREIGN EXCHANGE (&quot;FOREX&quot;) IS SUBSTANTIAL.
                                    </p>
                                    <p>
                                        You should carefully consider whether such trading is suitable for you in light of your financial condition. The high degree of leverage that is often obtainable in commodity futures, options, and forex trading can work against you as well as for you. The use of leverage can lead to large losses as well as gains.
                                    </p>
                                    <p>
                                        In considering whether to trade or to authorize someone else to trade for you, you should be aware of the following: If you purchase a commodity option you may sustain a total loss of the premium and of any additional funds you deposit with your broker to establish or maintain your position.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Futures & Margin */}
                            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-orange-50 rounded-full text-orange-600">
                                        <IoWarningOutline className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-trust-blue-950 text-base uppercase tracking-wider">Futures & Margin Risks</h4>
                                </div>
                                <div className="space-y-4 text-sm text-trust-blue-700 leading-relaxed">
                                    <p>
                                        If you purchase or sell a commodity futures contract or sell a commodity option you may sustain a total loss of the initial margin funds or security deposit and any additional funds that you deposit with your broker to establish or maintain your position.
                                    </p>
                                    <p>
                                        If the market moves against your position, you may be called upon by your broker to deposit a substantial amount of additional margin funds, on short notice, in order to maintain your position. If you do not provide the requested funds within the prescribed time, your position may be liquidated at a loss, and you will be liable for any resulting deficit in your account.
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Market Volatility - Full Width on Mobile, Centered on Desktop if wanted, or just span 2 */}
                            <div className="md:col-span-2 bg-gradient-to-r from-gray-50 to-white p-6 rounded-sm shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-red-50 rounded-full text-red-600">
                                        <IoShieldCheckmarkOutline className="text-xl" />
                                    </div>
                                    <h4 className="font-bold text-trust-blue-950 text-base uppercase tracking-wider">Market Conditions & Limit Moves</h4>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 text-sm text-trust-blue-700 leading-relaxed">
                                    <p>
                                        Under certain market conditions, you may find it difficult or impossible to liquidate a position. This can occur, for example, when the market makes a &quot;limit move.&quot;
                                    </p>
                                    <p>
                                        The placement of contingent orders by you or your trading advisor, such as a &quot;stop-loss&quot; or &quot;stop-limit&quot; order, will not necessarily limit your losses to the intended amounts, since market conditions may make it impossible to execute such orders.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="font-bold mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-800 gap-4">
                            <p>© 2026 Valora Asset Management. All Rights Reserved. | NFA Registered CTA</p>
                            <p className="flex items-center gap-2">
                                <IoShieldCheckmarkOutline className="text-gold-500 text-lg" />
                                This document complies with NFA Compliance Rules 2-29 & 2-36
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
