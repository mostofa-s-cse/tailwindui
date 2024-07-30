import Heroes from '@/app/images/heroes.png';
import featureSections from '@/app/images/feature-sections.png';
import ctaSections from '@/app/images/cta-sections.png';
import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:px-6">
            <div className="py-6">
                <h2 className="text-3xl font-semibold text-black">Marketing</h2>
                <p className="mt-4">Heroes, feature sections, newsletter sign up forms — everything you need
                    to build beautiful marketing
                    websites.</p>
            </div>

            <div>
                <div className="relative bg-white py-8">
                    {/* Hero Sections Start */}
                    <div className="mx-auto">
                        <h2 className="mt-2 text-2xl font-bold text-center tracking-tight text-gray-900">
                            Page Sections
                        </h2>

                        <div className="mt-12 px-8">
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                                <Link href="/components/marketing/hero-section/">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <div className="px-2">
                                        <Image src={Heroes} className="rounded-lg" alt="Heroes" />
                                    </div>
                                    <div className="bg-white py-3 px-3">
                                        <p className="text-lg font-semibold text-gray-900">Hero Sections</p>
                                        <p className="mt-1 text-sm text-gray-500">12 components</p>
                                    </div>
                                </div>
                                </Link>


                                <Link href="#">
                                    <div className="overflow-hidden rounded-lg shadow-lg">
                                        <div className="px-2">
                                            <Image src={featureSections} className="rounded-lg" alt="featureSections" />
                                        </div>
                                        <div className="bg-white py-3 px-3">
                                            <p className="text-lg font-semibold text-gray-900">Feature Sections</p>
                                            <p className="mt-1 text-sm text-gray-500">18 components</p>
                                        </div>
                                    </div>
                                </Link>


                                <Link href="#">
                                    <div className="overflow-hidden rounded-lg shadow-lg">
                                        <div className="px-2">
                                            <Image src={ctaSections} className="rounded-lg" alt="ctaSections" />
                                        </div>
                                        <div className="bg-white py-3 px-3">
                                            <p className="text-lg font-semibold text-gray-900">CTA Sections</p>
                                            <p className="mt-1 text-sm text-gray-500">11 components</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>


                {/* Hero Sections End */}
                {/* Elements Sections Start */}
                <div className="mx-auto mt-12">
                    <h2 className="mt-2 text-2xl font-bold text-center tracking-tight text-gray-900">
                        Elements
                    </h2>

                    <div className="mt-12 px-8">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                            <Link href="#">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <div className="px-2">
                                        <Image src={Heroes} className="rounded-lg" alt="Heroes"/>
                                    </div>
                                    <div className="bg-white py-3 px-3">
                                        <p className="text-lg font-semibold text-gray-900">Hero Sections</p>
                                        <p className="mt-1 text-sm text-gray-500">12 components</p>
                                    </div>
                                </div>
                            </Link>


                            <Link href="#">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <div className="px-2">
                                        <Image src={featureSections} className="rounded-lg" alt="featureSections"/>
                                    </div>
                                    <div className="bg-white py-3 px-3">
                                        <p className="text-lg font-semibold text-gray-900">Feature Sections</p>
                                        <p className="mt-1 text-sm text-gray-500">18 components</p>
                                    </div>
                                </div>
                            </Link>


                            <Link href="#">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <div className="px-2">
                                        <Image src={ctaSections} className="rounded-lg" alt="ctaSections"/>
                                    </div>
                                    <div className="bg-white py-3 px-3">
                                        <p className="text-lg font-semibold text-gray-900">CTA Sections</p>
                                        <p className="mt-1 text-sm text-gray-500">11 components</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Elements Sections End */}
            </div>
            </div>
        </div>
    )
        ;
}



