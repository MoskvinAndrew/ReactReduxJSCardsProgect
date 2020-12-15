import {AppStoreType} from "./reduxStore";

export type ReturnVoid = void;
export type ExtraArgumentNya = {};
export type GetAppStoreType = () => AppStoreType;

export const tryCatch = async (
    logic: () => void,
    setError: (error: string) => void,
    info: string
) => {
    try {
        await logic();

    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console");
        setError(error);

    }
};
