import { type FormEvent } from "react";
export default function newGoal() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        new FormData(e.currentTarget);
    }
    return  (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input type="text" name="goal" id="goal" />
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input type="text" name="" id="summary" />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}