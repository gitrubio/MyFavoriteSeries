export interface IProsCard extends ISerie {
    showDrawer : (params : ISerie) => void;
   
}

export interface ISerie {
    title: string;
    description : string
    characters : string[]
    imgFont : string
    mainCharacterImg : string
}