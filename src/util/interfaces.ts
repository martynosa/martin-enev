export interface IMartin {
  profile: IProfile;
  certificates: {
    softuni: ICertificate[];
    udemy: ICertificate[];
  };
  projects: IProject[];
}

export interface IProfile {
  name: string;
  github: string;
  linkedIn: string;
  summary: string;
}

export interface ICertificate {
  name: string;
  link: string;
  isVisible: boolean;
}

export interface IProject {
  name: string;
  link: string;
  repo: string;
  isVisible: boolean;
}

export interface IPage {
  name: string;
  link: string;
}
