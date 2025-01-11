interface Project {
    name: string;
    description: string;
    githubLink: string;
    projectLink: string;
    tech: string[];
    photo: string[];
}

export const projects: Project[] = [
    {
        name: 'Dunder Mifflin',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum',
        githubLink: '',
        projectLink: '',
        tech: ['Tech1', 'Tech2', 'Tech3'],
        photo: ['PROJECT1_1', 'PROJECT1_2', 'PROJECT1_3'],
    },
] 