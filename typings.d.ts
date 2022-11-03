interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image",
    asset: {
        _ref: string,
        _type: "reference"
    }
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image | null;
    name: string;
    phoneNumber: string;
    profilePic: Image | null;
}

export interface Technology extends SanityBody {
    _type: 'skill';
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody{
    _type: 'project';
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technology: Technology[];
}

export interface Experience extends SanityBody {
    _type: 'experiences';
    company: string;
    companiImage: Image;
    dateStarted: date;
    dateEnded: date;
    IsCurrentlyWorking:boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}