import * as React from 'react';

declare class Loading extends React.Component<LoadingProps, LoadingState> { 
}

declare interface LoadingProps {
    color? : string;
    height? : any;
    width? : any;
    delay?: number;
    type? : string;
}

declare interface LoadingState{
    delayed : boolean;
}

export = Loading;
