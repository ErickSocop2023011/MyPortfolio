import React, { useRef } from "react";
import { FileDown, Eye, Mail, Phone, MapPin } from "lucide-react";
import {
    SiReact,
    SiNodedotjs,
    SiJavascript,
    SiBootstrap,
    SiSpringboot,
    SiCss3,
    SiHtml5,
    SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { GiCircuitry } from "react-icons/gi";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export function CVDetails() {
    const cvRef = useRef();

    const techs = [
        { name: "Atlas", icon: <FaDatabase className="w-8 h-8 text-[#4DB33D]" title="Atlas" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-8 h-8 text-[#7952B3]" title="Bootstrap" /> },
        { name: "CSS3", icon: <SiCss3 className="w-8 h-8 text-[#264DE4]" title="CSS3" /> },
        { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 text-[#E34F26]" title="HTML5" /> },
        { name: "Jakarta", icon: <FaDatabase className="w-8 h-8 text-[#E76F00]" title="Jakarta" /> },
        { name: "Java", icon: <FaJava className="w-8 h-8 text-[#007396]" title="Java" /> },
        { name: "JavaFX", icon: <GiCircuitry className="w-8 h-8 text-[#E76F00]" title="JavaFX" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" title="JavaScript" /> },
        { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-[#4479A1]" title="MySQL" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-[#339933]" title="NodeJS" /> },
        { name: "React", icon: <SiReact className="w-8 h-8 text-[#61DAFB]" title="React" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="w-8 h-8 text-[#6DB33F]" title="Spring Boot" /> },
    ];

    const individualProjects = [
        { name: "Personal Portfolio", desc: "Developed with React and TailwindCSS to showcase personal projects and skills." },
        { name: "Company Management API", desc: "REST API built with Node.js, Express, and MongoDB for managing companies and reports." }
    ];

    const teamProjects = [
        { name: "BlueBrain System", desc: "A tutoring platform exclusively for Kinal students. Learners can request private tutoring sessions or join public tutoring groups according to their needs. In addition, users may apply to become tutors by submitting a photo of their grades along with a statement explaining why they want to teach. A teacher reviews the information and decides whether to approve or reject the application." }
    ];

    const generatePDF = () => {
        const input = cvRef.current;
        if (!input) return;

        html2canvas(input, { scale: 2, useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("CV_Erick_Socop.pdf");
        });
    };

    return (
        <>
        <div
            ref={cvRef}
            className="space-y-8 max-w-4xl mx-auto bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-md"
        >
            <header className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-white">Curriculum Vitae</h2>
            </header>

            <section className="flex flex-wrap gap-6 text-neutral-600 dark:text-neutral-300">
            <div className="flex items-center gap-2">
                <Mail size={18} /> ersc2006@gmail.com
            </div>
            <div className="flex items-center gap-2">
                <Phone size={18} /> +502 3247 8599
            </div>
            <div className="flex items-center gap-2">
                <MapPin size={18} /> Guatemala City
            </div>
            </section>

            <section>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                Professional Summary
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
                Passionate and detail-oriented Computer Science student with hands-on experience in academic and personal projects. Skilled in modern web and desktop development using Java, React, Node.js, and MySQL. Motivated to create secure, efficient, and scalable software solutions while continuously learning new technologies.
            </p>
            </section>

            <section>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Education</h3>
            <ul className="list-disc pl-6 text-neutral-600 dark:text-neutral-300 space-y-1">
                <li>Perito en Computación (3-year Technical Diploma in Computer Science) - Centro Educativo Técnico Laboral Kinal (2023 - 2025)</li>
                <li>Educación Básica (Basic Education) - Colegio Ciencia y Arte (2020 - 2022)</li>
            </ul>
            </section>

            <section>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Projects</h3>
            
            <div className="space-y-4">
                <div>
                    <h4 className="font-medium text-neutral-700 dark:text-neutral-200 mb-1">Individual Projects</h4>
                    <ul className="list-disc pl-6 text-neutral-600 dark:text-neutral-300 space-y-1">
                        {individualProjects.map((p) => (
                            <li key={p.name}>
                                <span className="font-medium">{p.name}:</span> {p.desc}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-neutral-700 dark:text-neutral-200 mb-1">Team Projects</h4>
                    <ul className="list-disc pl-6 text-neutral-600 dark:text-neutral-300 space-y-1">
                        {teamProjects.map((p) => (
                            <li key={p.name}>
                                <span className="font-medium">{p.name}:</span> {p.desc}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <span className="font-medium">Additional projects can be found on my GitHub.</span>
                </div>
            </div>
            </section>

            <section>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 mb-4">Skills & Technologies</h3>
            <ul className="flex flex-wrap gap-6 justify-center">
                {techs.map(({ name, icon }) => (
                <li
                    key={name}
                    className="flex flex-col items-center space-y-1 text-center text-neutral-700 dark:text-neutral-300"
                    title={name}
                >
                    <div className="text-5xl">{icon}</div>
                    <span className="text-sm font-medium">{name}</span>
                </li>
                ))}
            </ul>
            </section>

            <section>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Languages</h3>
            <ul className="list-disc pl-6 text-neutral-600 dark:text-neutral-300 space-y-1">
                <li>Spanish - Native</li>
                <li>English - Intermediate (B1/B2)</li>
            </ul>
            </section>

            <section>
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-200 mb-4">Certifications</h3>
            <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="d1250a45-1221-43e9-8d88-4141aea1262d"
                data-share-badge-host="https://www.credly.com"
            ></div>
            <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
            </section>
        </div>

        {/*
        <div className="max-w-4xl mx-auto flex justify-center mt-6">
            <button
            onClick={generatePDF}
            type="button"
            className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-xl hover:bg-green-600 hover:text-white transition"
            >
            <FileDown size={18} />
            Generate PDF
            </button>
        </div>
        */}
        </>
    );
}
