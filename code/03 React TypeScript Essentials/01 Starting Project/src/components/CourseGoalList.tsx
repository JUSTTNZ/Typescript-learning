import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal } from  '../App'
import InfoBox from './InfoBox';
import { type ReactNode } from 'react';
type CourseGoalListProps = {
  goals:  CGoal[];
  onDeleteGoal: (id: number) => void;
}
export default function CourseGoalList ({goals, onDeleteGoal}: CourseGoalListProps) {
    if(goals.length === 0) {
        return (
            <InfoBox mode='hint'>
                You have no Course Goals yet. Start adding Some!
            </InfoBox>
        )
    }

    let warningBox: ReactNode;

    if(goals.length >= 4) {
        warningBox = <InfoBox mode='warning' severity='high'>
            You're collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
    }
    return (
        <>
            {warningBox}
            <div>
            <ul>
                {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
                ))}
                
            </ul>
        </div>
        </>
    )
}