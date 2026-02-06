import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ComingSoon({ title }: { title: string }) {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 text-center px-6">
            <span className="text-gold-500 font-medium tracking-widest text-sm uppercase mb-3">
                In Development
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-trust-blue-950 mb-6">
                {title}
            </h1>
            <p className="text-trust-blue-600 max-w-lg mb-10 text-lg">
                We are crafting a premium experience for this section. Please check back soon or contact us for immediate assistance.
            </p>
            <Link href="/">
                <Button variant="default">
                    Return Home <FaArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
}
