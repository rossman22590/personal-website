import { GithubIcon, LinkedInIcon, EmailIcon } from './icons';

const links = [
    {
        title: 'Github',
        href: '//www.github.com/jedwards1230',
        icon: <GithubIcon width={30} height={30} />,
    },
    {
        title: 'LinkedIn',
        href: '//www.linkedin.com/in/justinedwards1230',
        icon: <LinkedInIcon width={30} height={30} />,
    },
    {
        title: 'Email',
        href: 'mailto:justinedwards1230@gmail.com',
        icon: <EmailIcon width={30} height={30} />,
    },
];
export default function IconLinks() {
    return (
        <div className="mt-2 flex w-48 justify-between fill-black dark:fill-white">
            {links.map((link, i) => (
                <a
                    key={i}
                    title={link.title}
                    className="transform transition duration-200 ease-in-out hover:scale-125"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
}
