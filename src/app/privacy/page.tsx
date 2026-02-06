import type { Metadata } from "next";
import LastUpdated from "@/components/ui/LastUpdated";

export const metadata: Metadata = {
    title: "Privacy Policy | Valora",
    description: "Privacy Policy and data protection practices for Valora.",
};

export default function PrivacyPage() {
    return (
        <div className="bg-gray-200 min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-trust-blue-950 mb-6">
                        Privacy Policy
                    </h1>
                    <LastUpdated />
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-headings:font-serif prose-headings:text-trust-blue-950 prose-p:text-trust-blue-700 max-w-none">
                    <p>
                        At Valora, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or engage with our services.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        1. Information We Collect
                    </h3>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise when you contact us.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li><strong>Personal Identity Information:</strong> Name, email address, phone number, etc.</li>
                        <li><strong>Financial Information:</strong> Data necessary to process your investment profile (collected securely).</li>
                        <li><strong>Usage Data:</strong> Information on how you access and use our services (e.g., page views, time spent).</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        2. How We Use Your Information
                    </h3>
                    <p>
                        We use the information we collect or receive to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li>Provide, operate, and maintain our website and services.</li>
                        <li>Improve, personalize, and expand our website.</li>
                        <li>Understand and analyze how you use our website.</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        3. Data Security
                    </h3>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>

                    <h3 className="text-2xl font-bold mt-12 mb-6 text-trust-blue-900 border-l-4 border-gold-400 pl-4">
                        4. Contact Us
                    </h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:legal@valoraam.com" className="text-gold-500 hover:text-gold-600 font-medium">legal@valoraam.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
