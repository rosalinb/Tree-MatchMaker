export interface Question {
    step_id: number;
    question: string;
    answers: string[];
    }
    
    export interface Match {
    name: string;
    description: string;
    }
    
    export interface HistoryItem {
    step_id: number,
    question: string;
    answers: string[];
    answer: string;
    }