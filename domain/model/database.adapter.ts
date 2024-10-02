export interface DatabaseAdapter {
    getAllQuizes: () => Promise<any[]>;
    getQuizByID: (id: string) => Promise<any[]>;
}
