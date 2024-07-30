import SimpleCentered from "@/components/SimpleCentered/SimpleCentered";
import SplitWithScreenshotOnDark from "@/components/SplitWithScreenshotOnDark/SplitWithScreenshotOnDark";
import SplitWithScreenshot from "@/components/SplitWithScreenshot/SplitWithScreenshot";

export default function Home() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:px-6">
            <h2 className="mt-5 text-2xl font-bold">Hero Sections</h2>
            <section>
                <SimpleCentered/>
            </section>

            <section className="mt-8">
                <SplitWithScreenshotOnDark/>
            </section>

            <section className="mt-8">
                <SplitWithScreenshot/>
            </section>
        </div>
    );
}