export interface IProsCard extends ISerie {
    showDrawer : () => void;
   
}

export interface ISerie {
    title: string;
    description : string
    characters : string[]
    imgFont : string
    mainCharacterImg : string
}