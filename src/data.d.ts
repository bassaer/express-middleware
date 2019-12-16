export interface DataModel {
    message: Array<string>
}

declare global {
    namespace Express {
        export interface Response {
            data: DataModel
        }
    }
}
