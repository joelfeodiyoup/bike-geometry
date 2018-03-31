export interface IGeometry {
    manufacturer: string;
    model: string;
    year: number;
    size: string;
    seatTubeLength?: number;
    seatTubeAngle?: number;
    topTubeLength?: number;
    headTubeLength?: number;
    headTubeAngle?: number;
    forkRake?: number;
    trail?: number;
    wheelbase?: number;
    chainStayLength?: number;
    bottomBracketDrop?: number;
    stack?: number;
    reach?: number;
    standOverHeight?: number;
    stemLength?: number;
    crankLength?: number;
    wheelSize?: string;
}

export interface IRenderingValues {
    groundStartX: number;
    groundEndX: number;
    groundStartY: number;
    groundEndY: number;
    wheelDiameter: number;
    wheelRadius: number;
    rearWheelX: number;
    rearWheelY: number;
    frontWheelX: number;
    frontWheelY: number;
    bottomBracketX: number;
    bottomBracketY: number;
    // the top of the seat tube
    seatTubeX: number;
    seatTubeY: number;
    // top of the head tube
    topHeadTubeX: number;
    topHeadTubeY: number;
    // bottom of the head tube
    bottomHeadTubeX: number;
    bottomHeadTubeY: number;
}
