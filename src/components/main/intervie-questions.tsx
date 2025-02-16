import { CodeBlock } from "../ui/code-block";

const InterviewQuestions = () => {
  const code = `function LikeButton() {
  return (
    <div className="button-container">
      <button
        className={classNames(
          'like-button',
            liked
            ? 'like-button--liked'
            : 'like-button--default',
        )}
        disabled={isPending}
        onClick={() => {
          likeUnlikeAction();
        }}>
        {isPending ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? 'Liked' : 'Like'}
      </button>
      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}
    </div>
  );`

  return (  
    <div className="my-40 flex items-center justify-center">
        <div className="w-[90vw]">
          <div className="lg:text-5xl text-3xl text-[#F4F4F4] lg:w-[900px] w-[90vw] font-medium">
            Every question answered by ex-interviewers
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-10">
            <div className="text-lg text-[#A1A1AA] lg:w-[45%] w-[90vw]">
              Having interviewed hundreds of candidates, we know what to look out for. Learn best practices and techniques gleaned from years of experience.
            </div>
            <div className="mt-4 lg:mt-0">
              <CodeBlock 
                language="tsx"
                filename="like-button.tsx"
                code={code}
                highlightLines={[7, 15]}
              />
            </div>
          </div>
        </div>
    </div>
  );
}
 
export default InterviewQuestions;