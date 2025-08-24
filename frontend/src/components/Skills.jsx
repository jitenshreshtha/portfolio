import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Skills() {
    const skills = [
        // === Frontend ===
        "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js",
        "Next.js", "Tailwind CSS", "Bootstrap", "Material-UI",
        "Redux", "Context API", "Vite", "Webpack", "Babel", "npm",

        // === Backend ===
        "Node.js", "Express.js", "RESTful API", "Socket.io",
        "JWT", "OAuth", "Passport.js", "Postman", "OpenAPI",

        // === Databases ===
        "MySQL", "MongoDB", "Firebase", "Firestore", "Redis", "Mongoose",

        // === DevOps & Deployment ===
        "AWS", "EC2", "S3", "Vercel", "Docker", "Docker Compose", "NGINX",
    ];
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const wrapper = wrapperRef.current;
        
        // Calculate total width including gaps
        const children = Array.from(container.children);
        const totalWidth = children.reduce((acc, child) => acc + child.offsetWidth + 48, 0); // 48px to account for gap-12
        
        // Duplicate the skills for seamless looping
        container.innerHTML += container.innerHTML;
        
        // Set initial position
        gsap.set(container, { x: 0 });
        
        // Create animation
        const animation = gsap.to(container, {
            x: -totalWidth,
            duration: 30,
            ease: 'none',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
            }
        });

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div ref={wrapperRef} className="overflow-hidden bg-purple-800 p-4">
            <div ref={containerRef} className="flex flex-row gap-12 text-white w-max">
                {skills.map((skill, index) => (
                    <p key={index} className="whitespace-nowrap">{skill}</p>
                ))}
            </div>
        </div>
    )
}

export default Skills;