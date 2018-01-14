import * as React from 'react';

export default class Loading extends React.Component<LoadingProps, LoadingState> { 
}

type LoadingType = "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";

declare interface LoadingProps {
    color? : string;
    height? : any;
    width? : any;
    delay?: number;
    type? : LoadingType;
    className?: string;
}

declare interface LoadingState{
    delayed : boolean;
}

