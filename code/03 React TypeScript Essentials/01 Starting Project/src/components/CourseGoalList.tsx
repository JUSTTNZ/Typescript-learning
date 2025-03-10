type CourseGoalList = {
  goals:  {
    title: string;
    description: string;
    id: number;
  }[]
}

import CourseGoal from './CourseGoal';
export default function CourseGoalList ({goals}: CourseGoalList) {
    
  
    return (
        <div>
            
            <ul>
                {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
                ))}
                
            </ul>
        </div>
        
    )
}