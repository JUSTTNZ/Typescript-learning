import { createContext, useContext, useReducer, type ReactNode } from "react";

type Timer = {
    name: string;
    duration: number;
}
type TimersState = {
    isRunning: boolean;
    timers: Timer[]
}

const initialState: TimersState = {
    isRunning: true,
    timers: []
}

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimer: () => void,
    stopTimer: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext () {
    const timersCtx = useContext(TimersContext)

    if(timersCtx === null) {
        throw new Error('TimersContext is null - that should not be the case!');
    }

    return timersCtx;
}
type TimersContextProviderProps = {
    children: ReactNode
}

function timersReducer(state, action) {
    
}
export default function TimersContextProvider({children}: TimersContextProviderProps ) {
    const [TimersState, dispatch] = useReducer(timersReducer, initialState)
    const ctx: TimersContextValue = {
        timers: [],
        isRunning: true,
        addTimer(timerData) {

        },
        startTimer() {
            
        },
        stopTimer() {
            
        },
    }
    return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}

