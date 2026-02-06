import type { Metadata } from "next";
import LastUpdated from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
    title: "Terms of Use | Valora",
    description: "Terms and conditions for using Valora services.",
};

export default function TermsPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-trust-blue-950 mb-6">
                        Terms of Use
                    </h1>
                    <LastUpdated />
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-headings:font-serif prose-headings:text-trust-blue-950 prose-p:text-trust-blue-700 max-w-none">
                    <p>
                        Welcome to Valora. By accessing or using our website and services, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        1. Use of Services
                    </h3>
                    <p>
                        You agree to use our website and services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that all information you provide is accurate, current, and complete.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        2. Intellectual Property
                    </h3>
                    <p>
                        All content, features, and functionality regarding the Service (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Valora, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        3. Investment Disclaimer
                    </h3>
                    <p>
                        The information provided on this website is for general informational purposes only and does not constitute financial, investment, legal, or tax advice. Valora makes no representations or warranties regarding the accuracy or completeness of any information found on this site.
                    </p>
                    <p className="font-bold text-trust-blue-950 mt-4">
                        PAST PERFORMANCE IS NOT INDICATIVE OF FUTURE RESULTS.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        4. Limitation of Liability
                    </h3>
                    <p>
                        In no event will Valora, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website or any services or items obtained through the website.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        5. Changes to Terms
                    </h3>
                    <p>
                        We reserve the right to modify these Terms at any time. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.
                    </p>
                </div>
            </div>
        </div>
    );
}
