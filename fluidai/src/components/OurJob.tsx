import questions from '../data/questions';
import Question from './core/Question';
import '../styles/OurJob.css';
export default function OurJob() {
  return (
    <div className="job">
      <div className="desc">
        <h1>What can curiosity, wonder, and awe do for you?</h1>
        <p>
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here's a brief
          overview of what curiosity and awe can do for you.
        </p>
      </div>
      <div className="q">
        {questions.map((question, idx) => (
          <Question key={idx} question={question} />
        ))}
      </div>
    </div>
  );
}
