import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="min-h-screen bg-background font-sans text-text selection:bg-primary/30 antialiased">
            <Head>
                <title>Cloudy - Your Daily Mindfulness Companion</title>
                <meta name="description" content="Focus on the good. A mindful space for your daily memories and gratitude. Build a habit of positivity with Cloudy." />
            </Head>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-inactive/10 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 relative transform group-hover:rotate-12 transition-transform duration-500 ease-out">
                            <Image src="/logo.png" fill className="object-contain" alt="Cloudy Logo" />
                        </div>
                        <span className="text-2xl font-extrabold tracking-tight text-text">Cloudy</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-12">
                        <Link href="#features" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all">Features</Link>
                        <Link href="#how-it-works" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all">How it works</Link>
                        <Link href="/legal" className="text-sm font-bold opacity-70 hover:opacity-100 hover:text-primary transition-all">Privacy</Link>
                    </div>

                    <Link
                        href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
                        className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95"
                    >
                        Download
                    </Link>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="pt-48 pb-20 md:pt-64 md:pb-40 px-6 relative overflow-hidden">
                    {/* Background decorations */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-square bg-gradient-to-b from-primary/10 via-background to-background -z-20 rounded-full blur-[120px]"></div>
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        <div className="text-center lg:text-left space-y-12 relative z-10">
                            <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-primary/10 shadow-sm animate-fade-in">
                                <span className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary animate-pulse rounded-full"></span>
                                    Your New Morning Ritual
                                </span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-text">
                                Focus on <br />
                                <span className="text-primary">the good.</span>
                            </h1>
                            <p className="text-2xl text-muted/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Cloudy is a mindful space for your daily memories and gratitude.
                                Build a habit of positivity with your new companion for mental clarity.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                                <Link
                                    href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
                                    className="bg-text text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-black hover:shadow-primary/10 transition-all flex items-center justify-center gap-4"
                                >
                                    <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,25.88L5.03,24.86L16.81,13.08L21.41,15.65C22.61,16.27 22.61,17.97 21.41,18.59L16.81,21.16L16.81,15.12M16.81,8.88L21.41,11.45C22.61,12.11 22.61,13.88 21.41,14.54L16.81,17.12L5.03,5.34L6.05,4.32L16.81,15.08L16.81,8.88M15.19,13.5L4.82,23.86L3.32,22.36L13.69,12L3.32,1.64L4.82,0.14L15.19,10.5L15.19,13.5Z" />
                                    </svg>
                                    Get it on Google Play
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex justify-center lg:justify-end">
                            {/* App Screenshot */}
                            <div className="relative w-full max-w-[420px] aspect-[9/18.5] animate-float">
                                <Image
                                    src="/screenshots/main.png"
                                    fill
                                    className="object-contain drop-shadow-[0_45px_55px_rgba(255,158,125,0.4)]"
                                    alt="Cloudy Dashboard"
                                    priority
                                />
                            </div>

                            {/* Decorative Blobs */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-[120px] opacity-60"></div>
                        </div>
                    </div>
                </section>

                {/* Bento Grid Features Section */}
                <section id="features" className="py-32 md:py-48 bg-white relative">
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-white"></div>
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="text-center space-y-6 mb-24">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight text-text leading-tight">Everything you need <br /> to find your calm.</h2>
                            <p className="text-xl text-muted max-w-2xl mx-auto font-medium">Cloudy combines beautiful design with scientifically backed mindfulness practices.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-10 min-h-[950px]">

                            {/* Large Feature: Stats & Tracking */}
                            <div className="md:col-span-2 md:row-span-2 bg-[#FDFCF9] rounded-[64px] p-12 md:p-16 relative overflow-hidden group border border-secondary shadow-sm hover:shadow-2xl hover:bg-white transition-all duration-700 ease-in-out">
                                <div className="max-w-md relative z-10 space-y-8">
                                    <div className="w-20 h-20 bg-white rounded-[24px] flex items-center justify-center text-4xl shadow-md">📊</div>
                                    <h3 className="text-5xl font-black leading-[1.1] tracking-tight">Your growth, <br /> at a glance.</h3>
                                    <p className="text-muted/80 text-xl leading-relaxed font-medium">
                                        Visualize your emotional trends and consistency over time. Our intuitive charts help you understand your patterns without the complexity.
                                    </p>
                                </div>
                                <div className="absolute -bottom-20 -right-20 w-[75%] h-[65%] transform group-hover:-translate-y-8 group-hover:-translate-x-4 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                    <Image src="/screenshots/feature1.png" fill className="object-contain" alt="Stats Feature" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>

                            {/* Small Feature: Mascots */}
                            <div className="bg-[#FFF9F0] rounded-[64px] p-12 flex flex-col justify-between group border border-primary/5 hover:border-primary/20 hover:shadow-2xl transition-all duration-700">
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-white rounded-[20px] flex items-center justify-center text-3xl shadow-md">🦊</div>
                                    <h4 className="text-3xl font-black leading-tight">Unlock <br /> Companions.</h4>
                                    <p className="text-muted/80 text-lg leading-relaxed font-medium">Stay motivated with adorable friends that grow alongside your streak.</p>
                                </div>
                                <div className="relative h-48 mt-10 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 ease-out">
                                    <Image src="/images/mascot_star.png" fill className="object-contain" alt="Mascot Mascot" />
                                </div>
                            </div>
                            {/* Small Feature: Dark Mode / Privacy */}
                            <div className="bg-text text-white rounded-[64px] p-12 flex flex-col justify-between relative overflow-hidden group hover:shadow-2xl transition-all duration-700">
                                <div className="space-y-6 z-10">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-[20px] flex items-center justify-center text-3xl shadow-md">🔒</div>
                                    <h4 className="text-3xl font-black leading-tight text-white">Privacy by <br /> Design.</h4>
                                    <p className="text-white/60 text-lg leading-relaxed font-medium">Your journal is for your eyes only. Secure, local-first data ensures total peace of mind.</p>
                                </div>
                                <div className="absolute -right-14 -bottom-14 opacity-30 w-52 h-52 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-1000">
                                    <Image src="/images/mascot_lock.png" fill className="object-contain grayscale invert" alt="Lock" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Secondary Feature Row */}
                <section id="how-it-works" className="py-40 bg-background relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-background"></div>

                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-[4/3] rounded-[56px] bg-white p-12 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-inactive/5 hover:shadow-2xl transition-all duration-700">
                            <Image src="/screenshots/feature3.png" fill className="object-contain p-6 transform hover:scale-105 transition-transform duration-1000" alt="Feature Screenshot" />
                        </div>
                        <div className="space-y-12">
                            <h2 className="text-5xl font-black leading-tight tracking-tight">The most peaceful <br /> workflow imaginable.</h2>
                            <div className="space-y-10">
                                {[
                                    { title: "Pause", desc: "Start with a moment of silence to clear the noise.", icon: "🧘" },
                                    { title: "Reflect", desc: "Type your thoughts freely in a judgment-free space.", icon: "🖋" },
                                    { title: "Savor", desc: "Look back at your wins and practice gratitude.", icon: "☀️" }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-8 items-start group">
                                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-inactive/5 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">{step.icon}</div>
                                        <div>
                                            <h5 className="text-2xl font-black mb-2 text-text group-hover:text-primary transition-colors">{step.title}</h5>
                                            <p className="text-xl text-muted/80 leading-relaxed font-medium">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <section className="py-40 md:py-64 px-6 text-center overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <div className="absolute top-40 left-[10%] opacity-30 blur-3xl w-64 h-64 bg-primary/20 rounded-full animate-float"></div>
                    <div className="absolute bottom-40 right-[10%] opacity-30 blur-3xl w-64 h-64 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '-3s' }}></div>

                    <div className="max-w-4xl mx-auto space-y-16 relative z-10">
                        <div className="space-y-8">
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight">Ready to clear <br /> those clouds?</h2>
                            <p className="text-2xl text-muted/80 font-bold max-w-2xl mx-auto">Join thousands of users finding their mental clarity today.</p>
                        </div>

                        <div className="flex justify-center items-center">
                            <Link
                                href="https://play.google.com/store/apps/details?id=app.cloudy.journal"
                                className="bg-primary text-white px-16 py-6 rounded-3xl font-black text-2xl shadow-[0_20px_80px_-15px_rgba(255,158,125,0.5)] hover:shadow-[0_40px_100px_-20px_rgba(255,158,125,0.7)] hover:-translate-y-2 transition-all active:scale-95 group"
                            >
                                Get Started for Free
                                <span className="inline-block transition-transform duration-300 group-hover:translate-x-3 ml-4">→</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white border-t border-inactive/10 py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                        <div className="space-y-8">
                            <Link href="/" className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 relative transform group-hover:rotate-12 transition-transform duration-500">
                                    <Image src="/logo.png" fill className="object-contain" alt="Logo" />
                                </div>
                                <span className="text-2xl font-black tracking-tight text-text">Cloudy</span>
                            </Link>
                            <p className="text-lg text-muted/80 leading-relaxed font-medium">
                                Your peaceful companion for daily mindfulness. Built with love to help you focus on the good stuff.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-16 lg:col-span-3">
                            <div className="space-y-6">
                                <h6 className="font-black text-xs uppercase tracking-widest text-text opacity-30">Product</h6>
                                <ul className="space-y-4">
                                    <li><Link href="#features" className="text-lg font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">Features</Link></li>
                                    <li><Link href="#how-it-works" className="text-lg font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">How it works</Link></li>
                                    <li><Link href="https://play.google.com/store/apps/details?id=app.cloudy.journal" className="text-lg font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">Download</Link></li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h6 className="font-black text-xs uppercase tracking-widest text-text opacity-30">Legal & Support</h6>
                                <ul className="space-y-4">
                                    <li><Link href="/legal" className="text-lg font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">Privacy Policy</Link></li>
                                    <li><Link href="/legal" className="text-lg font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">Terms of Service</Link></li>
                                    <li><Link href="mailto:support@cloudyjournal.com" className="text-lg font-bold opacity-60 hover:opacity-100 hover:text-primary transition-all">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 pt-16 border-t border-inactive/10 flex flex-col md:flex-row justify-between items-center gap-8 text-lg text-muted font-bold opacity-40">
                        <p>© {new Date().getFullYear()} Cloudy. All rights reserved.</p>
                        <div className="flex gap-12">
                            <span>Made for tranquility</span>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .animate-float {
                    animation: float 8s ease-in-out infinite;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
}
