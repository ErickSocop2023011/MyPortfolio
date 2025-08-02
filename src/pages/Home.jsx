export function Home() {
    return (
        <div className="w-full flex justify-center">
            <section className="p-6 sm:p-10 ml-16 md:ml-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4 text-neutral-800 dark:text-white">
                    Welcome to My Portfolio
                </h1>
                
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                    I’m <span className="font-semibold">Erick Socop</span>, a passionate 
                    <span className="text-primary"> software development student </span> 
                    and aspiring full-stack developer.  
                    This portfolio is a personal space to showcase my 
                    <span className="font-medium"> professional values, projects, skills, and achievements</span>.  
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">Who I Am</h2>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                            A proactive learner with hands-on experience in academic and personal projects. 
                            My main stack includes <strong>Java, React, Node.js, MySQL</strong>, and I enjoy 
                            building scalable and user-friendly applications.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">What You’ll Find Here</h2>
                        <ul className="list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                            <li>My professional values and personal brand</li>
                            <li>Featured projects with brief descriptions</li>
                            <li>Skills and technologies I’m experienced with</li>
                            <li>Certifications and key achievements</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-primary text-white rounded-2xl p-6 shadow-md text-center hover:shadow-xl transition">
                    <h2 className="text-xl font-semibold mb-2">Let’s Connect!</h2>
                    <p className="mb-4 text-sm">
                        Interested in my work or want to collaborate on a project?  
                        Feel free to reach out via email or explore my GitHub for more.
                    </p>
                    <a
                        href="mailto:ersc2006@gmail.com"
                        className="bg-white text-primary px-6 py-2 rounded-xl font-medium hover:bg-opacity-90 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </section>
        </div>
    );
}
