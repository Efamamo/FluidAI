import './Qustion.css';
export default function Question({ question }: { question: string }) {
  return (
    <>
      <div className="question_container">
        <p>{question}</p>
        <div className="add">+</div>
      </div>
      <hr />
    </>
  );
}
